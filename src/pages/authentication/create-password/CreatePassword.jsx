import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

// Image
import Logo from "../../../assets/images/authentication/logo.svg";

const CreatePassword = () => {

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        navigate("/");
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
                                <h2>Create Password</h2>

                                <p>Enter your password for set new password!</p>
                            </div>

                            <div className="second">
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
                                    <label htmlFor="password" className='form-label'>Confirm Password *</label>
                                    <div>
                                        <input
                                            type="text"
                                            name='password'
                                            placeholder='Confirm Password'
                                            className='form-control'
                                            required
                                        />

                                    </div>
                                </div>

                                <div className='text-center'>
                                    <button type='submit' className='main_btn auth_btn'>
                                        SUBMIT
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

export default CreatePassword;