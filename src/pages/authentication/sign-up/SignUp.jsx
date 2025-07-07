import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

// Image
import Logo from "../../../assets/images/authentication/logo.svg";

const SignUp = () => {

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        navigate("/otp-Verify", { state: "sign-up" });
    }

    return (
        <>

            <div className='authentication sign_up'>
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-10 col-sm-9 col-md-7 col-lg-6 col-xl-5 col-xxl-4">
                        <div className="logo text-center">
                            <img src={Logo} alt="Logo" className='img-fluid' />
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="top">
                                <h2>Sign up</h2>

                                <p>Enter your email address and other details for sign-up!</p>
                            </div>

                            <div className="second">
                                <div className="col-12 mb-4">
                                    <label htmlFor="name" className='form-label'>Name *</label>
                                    <div>
                                        <input
                                            type="text"
                                            name='name'
                                            placeholder='Name'
                                            className='form-control'
                                            required
                                        />
                                    </div>
                                </div>

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

                                <div className="col-12 mb-4">
                                    <label htmlFor="phone" className='form-label'>Mobile Number *</label>
                                    <div>
                                        <input
                                            type="text"
                                            name='phone'
                                            placeholder='Mobile Number'
                                            className='form-control'
                                            required
                                        />

                                    </div>
                                </div>

                                <div className="col-12 mb-4">
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

                                <div className="col-12 mb-4">
                                    <label htmlFor="cpassword" className='form-label'>Confirm Password *</label>
                                    <div>
                                        <input
                                            type="text"
                                            name='cpassword'
                                            placeholder='Confirm Password'
                                            className='form-control'
                                            required
                                        />

                                    </div>
                                </div>

                                <div className='text-center'>
                                    <button type='submit' className='main_btn auth_btn'>
                                        SIGN UP
                                    </button>
                                </div>
                            </div>
                        </form>

                        <div className="account text-center">
                            Already have an account? <Link to="/">Sign in</Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SignUp;