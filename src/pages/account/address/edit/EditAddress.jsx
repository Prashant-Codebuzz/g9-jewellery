import React from 'react'
import { useNavigate } from 'react-router-dom';

// Css
// import "./CreateAddress.scss"

const EditAddress = () => {

    const navigate = useNavigate();

    return (
        <>

            {/* ------ Edit-Address Start ------ */}
            <div className="create_address pd-x">
                <h4>Edit Address</h4>

                <div className='address_form'>
                    <form className='row m-0'>
                        <div className="col-lg-6 mb-4">
                            <label htmlFor="address1" className='form-label'>Address Line 1 *</label>
                            <div>
                                <input
                                    type="text"
                                    name='address1'
                                    placeholder=''
                                    className='form-control'
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <label htmlFor="address2" className='form-label'>Address Line 2 *</label>
                            <div>
                                <input
                                    type="text"
                                    name='address2'
                                    placeholder=''
                                    className='form-control'
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <label htmlFor="city" className='form-label'>City *</label>
                            <div>
                                <input
                                    type="text"
                                    name='city'
                                    placeholder=''
                                    className='form-control'
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <label htmlFor="state" className='form-label'>State/Province *</label>
                            <div>
                                <input
                                    type="text"
                                    name='state'
                                    placeholder=''
                                    className='form-control'
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <label htmlFor="country" className='form-label'>Country *</label>
                            <div>
                                <input
                                    type="text"
                                    name='country'
                                    placeholder=''
                                    className='form-control'
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <label htmlFor="postalcode" className='form-label'>Postal Code *</label>
                            <div>
                                <input
                                    type="text"
                                    name='postalcode'
                                    placeholder=''
                                    className='form-control'
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-lg-12">
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
                                        value={"Other"}
                                        checked={"Other"}
                                        required
                                    />
                                    <label className="form-check-label" htmlFor="other">
                                        Other
                                    </label>
                                </div>
                            </div>
                        </div>

                        <button type='submit' className='main_btn address_btn' onClick={() => navigate("/address")}>
                            EDIT ADDRESS
                        </button>
                    </form>
                </div>
            </div>
            {/* ------ Edit-Address End ------ */}

        </>
    )
}

export default EditAddress;