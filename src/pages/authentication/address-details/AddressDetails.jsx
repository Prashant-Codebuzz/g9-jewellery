import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

// Image
import Logo from "../../../assets/images/authentication/logo.svg";

const AddressDetails = () => {

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        navigate("/");
    }

    return (
        <>

            <div className='authentication sign_up'>
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-10 col-sm-9 col-md-7 col-lg-6 col-xl-5 col-xxl-4">
                        <div className="logo text-center">
                            <img src={Logo} alt="Logo" className='img-fluid' draggable={false} />
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="top">
                                <h2>Address Details</h2>

                                <p>Enter your delivery address for shipping!</p>
                            </div>

                            <div className="second row">
                                <div className="col-12 mb-4">
                                    <label htmlFor="address" className='form-label'>Address Line 1 *</label>
                                    <div>
                                        <input
                                            type="text"
                                            name='address'
                                            placeholder='Address Line 1'
                                            className='form-control'
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="col-12 mb-4">
                                    <label htmlFor="address" className='form-label'>Address Line 2 *</label>
                                    <div>
                                        <input
                                            type="text"
                                            name='address'
                                            placeholder='Address Line 2'
                                            className='form-control'
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="col-6 mb-4">
                                    <label htmlFor="city" className='form-label'>City *</label>
                                    <div>
                                        <input
                                            type="text"
                                            name='city'
                                            placeholder='City'
                                            className='form-control'
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="col-6 mb-4">
                                    <label htmlFor="city" className='form-label'>State/Province *</label>
                                    <div>
                                        <input
                                            type="text"
                                            name='city'
                                            placeholder='State'
                                            className='form-control'
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="col-6 mb-4">
                                    <label htmlFor="country" className='form-label'>Country *</label>
                                    <div>
                                        <input
                                            type="text"
                                            name='country'
                                            placeholder='Country'
                                            className='form-control'
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="col-6 mb-4">
                                    <label htmlFor="code" className='form-label'>Postal Code *</label>
                                    <div>
                                        <input
                                            type="text"
                                            name='code'
                                            placeholder='Postal Code'
                                            className='form-control'
                                            required
                                        />
                                    </div>
                                </div>


                                <div className="col-12 mb-4">
                                    <label htmlFor="email" className='form-label'>Address Type *</label>
                                    <div className='d-flex gap-4'>
                                        <div className="form-check">
                                            <input
                                                type="radio"
                                                id="home"
                                                name="type"
                                                className="form-check-input"
                                                value={"home"}
                                                checked={"home"}
                                                required
                                            />
                                            <label className="form-check-label" htmlFor="home">
                                                Home
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                type="radio"
                                                id="work"
                                                name="type"
                                                className="form-check-input"
                                                value={"Work"}
                                                checked={"Work"}
                                                required
                                            />
                                            <label className="form-check-label" htmlFor="work">
                                                Company
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                type="radio"
                                                id="other"
                                                name="type"
                                                className="form-check-input"
                                                value={"other"}
                                                checked={"other"}
                                                required
                                            />
                                            <label className="form-check-label" htmlFor="other">
                                                Other
                                            </label>
                                        </div>
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

export default AddressDetails;