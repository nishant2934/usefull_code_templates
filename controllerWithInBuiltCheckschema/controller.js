const { checkSchema, validationResult } = require("express-validator");
let { RegisterValidate } = require("./ValidateSchema");
const { responses } = require("../../helpers");
const knex = require("../../knexfile");
exports.register = [
    checkSchema(RegisterValidate),// this is important using middleware right from here in the controller. Now you can just call this function normally in router.post("bj/",register)
    async(request, response) => {
        console.log("came here");
        try {
            let validateError = validationResult(request);
            if (!validateError.isEmpty()) {
                return responses.validation(response, validateError.array());
            }
            const {name,businessName,email,password,contactNo} = req.body;
            const salt = await bcrypt.genSalt(10);
            let passwordToSave = await bcrypt.hash(password,salt);
            knex('users').insert({
                name: `${name}`,
                business_name: `${businessName}`,
                email: `${email}`,
                contact_no: `${contactNo}`,
                password: `${passwordToSave}`
            }).then((result) => {
                return responses.success(response, { msg: 'User has been successfully added.', 'statusCode': 200, result: result });
            }).catch((error) => {
                return responses.validation(response, error.message);
            })
        } catch (error) {
            return responses.validation(response, error);
        }
    }
];