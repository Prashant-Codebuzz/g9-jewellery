import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

// Image
import Logo from "../../../assets/images/authentication/logo.svg";

const ForgotPassword = () => {

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        navigate("/otp-Verify", { state: "sign-in" });
    }

    return (
        <>

            <div className='authentication'>
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-10 col-sm-9 col-md-7 col-lg-6 col-xl-5 col-xxl-4">
                        <div className="logo text-center">
                            <img src={Logo} alt="Logo" className='img-fluid' />
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="top">
                                <h2>Forgot Password</h2>

                                <p>Enter your email address for forgot password!</p>
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

                                <div className='text-center'>
                                    <button type='submit' className='main_btn auth_btn'>
                                        CONTINUE
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ForgotPassword;