import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

// Css
import "../Authentication.scss";

// Image
import Logo from "../../../assets/images/authentication/logo.svg";
import GoogleIcon from "../../../assets/images/authentication/google-icon.svg";

const SignIn = () => {

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

    }


    return (
        <>
            <div className='authentication'>
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-10 col-sm-9 col-md-7 col-lg-6 col-xl-5 col-xxl-4">
                        <div className="logo text-center">
                            <img src={Logo} alt="Logo" className='img-fluid' draggable={false} />
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="top">
                                <h2>Sign in</h2>

                                <p>Enter your email address and password for sign-in!</p>
                            </div>

                            <div className="second">
                                <div className="col-12 mb-4">
                                    <label htmlFor="email" className='form-label'>Email Address *</label>
                                    <div>
                                        <input
                                            type="email"
                                            name='email'
                                            placeholder='Email'
                                            className='form-control'
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="col-12 mb-3">
                                    <label htmlFor="password" className='form-label'>Password *</label>
                                    <div>
                                        <input
                                            type="text"
                                            name='password'
                                            placeholder='Password'
                                            className='form-control'
                                            required
                                        />

                                    </div>
                                </div>

                                <div className='mb-4 text-end forgot-password'>
                                    <Link to="/forgot-password">Forgot Password?</Link>
                                </div>

                                <div className='text-center'>
                                    <button type='submit' className='main_btn auth_btn'>
                                        SIGN IN
                                    </button>
                                </div>

                                <div className='or d-flex align-items-center justify-content-center'>
                                    <span></span>
                                    <p className='mb-0'>or continue with</p>
                                    <span></span>
                                </div>

                                <button
                                    type='button'
                                    className='main_btn google_btn d-flex align-items-center justify-content-center'
                                >
                                    <img src={GoogleIcon} alt="Google" className='img-fluid me-3' draggable={false} />
                                    Sign in With Google
                                </button>
                            </div>
                        </form>

                        <div className="account text-center">
                            Don’t have an account? <Link to="/sign-up">Sign up</Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SignIn