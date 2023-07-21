import React, { useEffect, useRef, useState } from 'react';
import Logo from '../../assets/logo.png'
import taxtamixo from '../../assets/Tax-amico.png'
import { Controller, useForm } from 'react-hook-form';
import { Button } from 'primereact/button'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import { AuthAction } from '../Services';
import { Toast } from 'primereact/toast';
import { capitalize } from 'lodash';
import { InputMask } from "primereact/inputmask";
import { Password } from "primereact/password";


const Register = (props) => {

    const toast = useRef(null);

    const {
        control,
        formState: { errors },
        handleSubmit,
        getValues,
        reset
    } = useForm();


    const [meterStrength, setMeterStrength] = useState();
    const [formFields, setFormFields] = useState()

    const meterContant = {
        long: 'At least 8 characters long',
        upper: 'One uppercase character',
        lower: 'One lowercase character',
        number: 'One number',
        special: 'One special character',

    }

    const [meterContantDisplay, setMeterContantDisplay] = useState(false);

    const onInputChange = (e) => {
        let { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value })
    }

    useEffect(() => {
        if (props?.responses?.message && !props?.responses?.loading) {
            toast.current.show({
                severity: props?.responses?.status,
                summary: capitalize(props?.responses?.status),
                detail: props?.responses?.message, life: 3000
            });
        }
    }, [props?.responses])

    const onSubmit = (data) => {
        props.register(data);
    }
    const getFormErrorMessage = (name) => {
        return errors[name] ? <small className="p-error">{errors[name].message}</small> : '';
    };

    const calculateStrength = (value) => {
        setFormFields({ ...formFields, ["password"]: value });
        let i = 0;
        var stringCheck = {
            long: false,
            upper: false,
            lower: false,
            number: false,
            special: false,
        };

        while (i <= value.length) {
            let character = value.charAt(i);
            if (character !== '') {
                if (isNaN(parseInt(character)) && typeof character === "string" && character.toLowerCase() === character) {
                    stringCheck.lower = true;
                }
                if (isNaN(parseInt(character)) && typeof character === "string" && character.toUpperCase() === character) {
                    stringCheck.upper = true;
                }
                if (!isNaN(parseInt(character)) && !isNaN(character * 1)) {
                    stringCheck.number = true;
                }
                let specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
                if (specialChars.test(character)) {
                    stringCheck.special = true;
                }
            }
            i++;
        }
        if (value.length > 7) {
            stringCheck.long = true;
        }
        setMeterStrength(stringCheck);
    }

    const isStrength = () => {
        let check = true;
        for (let key in meterStrength) {
            if (!meterStrength[key]) {
                check = false || `Password must include at least 8 characters, 1 uppercase letter, 
                                                    1 lowercase letter, 1 number, and 1 special character.` ;
            }
        }
        return check;
    }



    return (
        <div className="login-screen">
            <Toast ref={toast} />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 mt-4">
                        <a className="logo-login" >
                            <img src={Logo} alt="logo" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="content-login">
                <div className="cust-container">
                    <div className="row main-wrap mt-5 pt-3">
                        <div className="col-md-5 col-12 tax-image">
                            <img src={taxtamixo} alt="Image" className="img-fluid" />
                        </div>
                        <div className="col-md-7 col-12 contents">
                            <div className="row justify-content-center align-items-center">
                                <div className="col-md-10">
                                    <div className="form-login">
                                        <div className="mb-2">
                                            <h3 className="mb-2">Sign up To Digital Impost</h3>
                                            <p>Enter your details below to continue</p>
                                        </div>

                                        <form className="row-form-login" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                                            <div className="form-group mb-2">
                                                <label htmlFor="username">Your Name</label>
                                                <Controller
                                                    name="name"
                                                    control={control}
                                                    rules={{
                                                        required: 'Name is required.',
                                                        minLength: {
                                                            value: 6,
                                                            message: "Please enter minimum 5 characters."
                                                        },
                                                        maxLength: {
                                                            value: 20,
                                                            message: "Please enter minimum 20 characters."
                                                        },
                                                    }}
                                                    render={({ field, fieldState }) => (

                                                        <input type="text" className={'form-control ' + ((fieldState?.error && ' p-invalid '))} id="username" name='name'
                                                            value={formFields?.name || ''}
                                                            onChange={(e) => { onInputChange(e); field.onChange(e.target.value) }}
                                                        />
                                                    )}
                                                />
                                                {getFormErrorMessage('name')}

                                            </div>
                                            <div className="form-group mb-2">
                                                <label htmlFor="business_name">Business Name</label>
                                                <Controller
                                                    name="business_name"
                                                    control={control}
                                                    rules={{
                                                        required: 'Business name is required.',
                                                        minLength: {
                                                            value: 5,
                                                            message: "Please enter minimum 5 characters."
                                                        },
                                                        maxLength: {
                                                            value: 20,
                                                            message: "Please enter minimum 20 characters."
                                                        },
                                                    }}
                                                    render={({ field, fieldState }) => (
                                                        <input name='business_name' id='business_name' value={formFields?.business_name || ''}
                                                            className={'form-control ' + ((fieldState?.error && ' p-invalid '))}
                                                            onChange={(e) => { onInputChange(e); field.onChange(e.target.value) }}
                                                        />
                                                    )}
                                                />
                                                {getFormErrorMessage('business_name')}
                                            </div>

                                            <div className="form-group mb-2">
                                                <label htmlFor="email">Business Email</label>
                                                <Controller
                                                    name="email"
                                                    control={control}
                                                    rules={{
                                                        required: 'Business Email is required.',
                                                        pattern: {
                                                            value: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                                                            message: "Please enter a valid business email"
                                                        },

                                                    }}

                                                    render={({ field, fieldState }) => (
                                                        <input id="email" name='email' value={formFields?.email || ''}
                                                            className={'form-control ' + ((fieldState?.error && ' p-invalid '))}
                                                            autoComplete="new-password"
                                                            onChange={(e) => { onInputChange(e); field.onChange(e.target.value) }}
                                                        />
                                                    )}
                                                />
                                                {getFormErrorMessage('email')}
                                            </div>

                                            <div className="form-group mb-2">
                                                <label htmlFor="business_conact">Busness Contact No.</label>
                                                <Controller
                                                    name="business_conact"
                                                    control={control}
                                                    rules={{
                                                        required: 'contact is required.',
                                                        pattern: {
                                                            value: /^[0-9+()\- ]+$/,
                                                            message: "Please enter a valid contact number"
                                                        },

                                                    }}

                                                    render={({ field, fieldState }) => (
                                                        <InputMask id="business_conact" name='business_conact' mask="999-999-9999" placeholder="999-999-9999"
                                                            value={formFields?.business_conact || ''}
                                                            className={'form-control ' + ((fieldState?.error && ' p-invalid '))}
                                                            onChange={(e) => { onInputChange(e); field.onChange(e.target.value) }}
                                                        ></InputMask>
                                                    )}
                                                />
                                                {getFormErrorMessage('business_conact')}
                                            </div>
                                            <div className="form-group mb-2">
                                                <label htmlFor="password">Password</label>
                                                <Controller
                                                    name="password"
                                                    control={control}
                                                    rules={{ required: 'Password is required.' }}
                                                    render={({ field, fieldState }) => (
                                                        <Password id="password"
                                                            name="password"
                                                            value={formFields?.password || ''}
                                                            className={'form-control ' + ((fieldState?.error && ' p-invalid '))}
                                                            onChange={(e) => { onInputChange(e); field.onChange(e.target.value) }}
                                                            feedback={false} />
                                                    )}
                                                />
                                                {getFormErrorMessage('password')}
                                            </div>

                                            <div className="form-group mb-3">
                                                <label htmlFor="confirm-password">Confirm Password</label>
                                                <Controller
                                                    name="confirmPassword"
                                                    control={control}
                                                    rules={{
                                                        required: 'Confirm password is required.',
                                                        validate: (value) => {
                                                            if(value===formFields.password){
                                                                return true;
                                                            }
                                                            else{
                                                                return "Passwords do not match"
                                                            }
                                                        },
                                                    }}
                                                    render={({ field, fieldState }) => (
                                                        <input id="confirmPassword"
                                                            name="confirmPassword"
                                                            value={formFields?.confirmPassword || ''}
                                                            className={'form-control ' + ((fieldState?.error && ' p-invalid '))}
                                                            onChange={(e) => { onInputChange(e); field.onChange(e.target.value) }}
                                                        />
                                                    )}
                                                />
                                                {getFormErrorMessage('confirmPassword')}
                                            </div>

                                            <div className="d-flex mb-2 justify-content-between">
                                                <div className="mb-2 form-check">
                                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                    <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                                                </div>
                                            </div>
                                            <Button label="Sign Up" type='submit' className="btn-theme btn-theme-dark" loading={props?.responses?.loading} />
                                        </form>

                                    </div>
                                    <div className="btm-sms text-center">have an account.<Link className='text-decoration-none' to='/Login'>Sign In</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const MapStateToProps = state => ({
    responses: state?.registration
})

const MapDispachToProps = dispatch => ({
    register: dispatch(AuthAction.register)
})

export default connect(MapStateToProps, MapDispachToProps)(Register);