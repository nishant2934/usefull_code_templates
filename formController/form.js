import React, { useEffect, useState, useRef } from 'react'
import { Button } from 'primereact/button'
import Logo from '../../assets/logo.png'
import taxtamixo from '../../assets/Tax-amico.png'
import facebookicon from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import gmail from '../../assets/gmail.png'
import { Link } from 'react-router-dom'
import { Controller, useForm } from 'react-hook-form';
import { Toast } from 'primereact/toast';
import { capitalize } from 'lodash';

const Login = (props) => {
    const toast = useRef(null);
    const [formFields, setFormFields] = useState();
    const {
        control,
        formState: { errors },
        handleSubmit,
        getValues,
        reset
    } = useForm();

    useEffect(() => {
        if (props?.responses?.message && !props?.responses?.loading) {
            toast.current.show({
                severity: props?.responses?.status,
                summary: capitalize(props?.responses?.status),
                detail: props?.responses?.message, life: 3000
            });
        }
    }, [props?.responses])

    const getFormErrorMessage = (name) => {
        return errors[name] ? <small className="p-error">{errors[name].message}</small> : '';
    };

    const onInputChange = (e) => {
        let { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value })
    }

    const onSubmit = (data) => {
        console.log(data);
    }


    return (
        <div className="login-screen">
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
                <div className="cust-container mt-5 pt-5">
                    <div className="row main-wrap">
                        <div className="col-md-5 tax-image">
                            <img src={taxtamixo} alt="Image" className="img-fluid" />
                        </div>
                        <div className="col-md-7 contents">
                            <div className="row justify-content-center align-items-center">
                                <div className="col-md-10">
                                    <div className="form-login">
                                        <div className="mb-5">
                                            <h3 className="mb-3">Sign In To Digital Impost</h3>
                                            <p>Enter your details below to continue</p>
                                        </div>

                                        <form className="row-form-login" onSubmit={handleSubmit(onSubmit)}  action="#" method="post">
                                            <div className="form-group mb-4">
                                                <label htmlFor="email">Email</label>
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
                                                            onChange={(e) => { onInputChange(e); field.onChange(e.target.value) }}
                                                        />
                                                    )}
                                                />
                                                {getFormErrorMessage('email')}
                                            </div>
                                            <div className="form-group mb-4">
                                                <label htmlFor="password">Password</label>
                                                <Controller
                                                    name="password"
                                                    control={control}
                                                    rules={{
                                                        required: 'Password is required.'

                                                    }}
                                                    render={({ field, fieldState }) => (
                                                        <input id="password" name='password' value={formFields?.password || ''}
                                                            className={'form-control ' + ((fieldState?.error && ' p-invalid '))}
                                                            onChange={(e) => { onInputChange(e); field.onChange(e.target.value) }}
                                                        />
                                                    )}
                                                />
                                                {getFormErrorMessage('password')}
                                            </div>
                                            <div className="d-flex mb-4 justify-content-between">
                                                <div className="mb-3 form-check">
                                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                    <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                                                </div>
                                                <span className="ml-auto"><Link to="/forgetpasswd" className="forgot-pass text-decoration-none">Forgot Password</Link></span>
                                            </div>
                                            {/* <input type="submit" value="Sign In" className="btn-theme btn-theme-dark" /> */}
                                            <Button label="Sign Up" type='submit' className="btn-theme btn-theme-dark" loading={props?.responses?.loading} />
                                            <span className="d-block text-left my-4 text-muted">— or login with —</span>
                                            <div className="social-login">

                                                <a href="javascript:void(0)" className="facebook icon">
                                                    <span className="social__icon">
                                                        <img src={facebookicon} alt="fb icon" />
                                                    </span>
                                                </a>

                                                <a href="javascript:void(0)" className="twitter icon mx-3">
                                                    <span className="social__icon">
                                                        <img src={twitter} alt="fb icon" />
                                                    </span>
                                                </a>

                                                <a href="javascript:void(0)" className="google icon">
                                                    <span className="social__icon">
                                                        <img src={gmail} alt="fb icon" />
                                                    </span>
                                                </a>
                                            </div>
                                        </form>

                                    </div>

                                    <div className="btm-sms text-center ">Don't have an account yet? <Link className='text-decoration-none' to={'/login'} > Sign Up</Link></div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login