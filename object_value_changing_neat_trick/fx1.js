const { checkSchema, validationResult } = require("express-validator");
let { RegisterValidate } = require("../ValidateSchema");
const { responses } = require('../../helpers');
const { KnexInsert } = require("../../Knex/KnexQuery");
const {generateToken} = require("../../helpers/generateToken");
const bcrypt = require("bcrypt");



exports.register = [
    checkSchema(RegisterValidate),
    async (request, response) => {
        try {
            let validateError = validationResult(request);
            if (!validateError.isEmpty()) {
                return responses.validation(response, validateError.array());
            }
            let passwordHash = await bcrypt.hash(request.body.password, 10);

 //---------------------------------------------Important part---------------------------------------- 
 //deleted the values but still got hem.          
            let registerInputs = { ...request.body, password: passwordHash };
            delete registerInputs["business_type"];
            delete registerInputs["permission"];
            KnexInsert({ table: 'users', data: registerInputs }).then(async (user) => {
                KnexInsert({
                    table: 'roles',
                    data: {
                        user_id: user[0],
                        role: request.body.business_type,
                        permission: JSON.stringify(request.body.permission)
                    }
//--------------------------------------------------------------------------------------------------------                   
                }).then(async (role) => {
                    let result = { id: user[0], role_id: role[0] }
                    let token = generateToken(result);
                    return responses.success(response, { result: { ...result, token }, msg: 'User successfully inserted', statusCode: 200 });
                }).catch((error) => {
                    return responses.error(response, { results: error });
                })
            }).catch((error) => {
                return responses.error(response, { results: error });
            })

        } catch (error) {
            return responses.validation(response, error);
        }
    }
];
