import React, { useState } from 'react'

// Css

// Image
// Light
import HomeLight from "../../../assets/images/account/home-light.svg";
import WorkLight from "../../../assets/images/account/work-light.svg";
import OtherLight from "../../../assets/images/account/other-light.svg";
import MenuLight from "../../../assets/images/account/menu-light.svg";

import AccountSidebar from '../../../components/account-sidebar/AccountSidebar';

import Delete from '../../../components/modal/delete/Delete';
import Primary from '../../../components/modal/primary/Primary';
import { useNavigate } from 'react-router-dom';

const initialModalState = {
    primary: false,
    delete: false
}

const Address = () => {

    const navigate = useNavigate();

    const [modalShow, setModalShow] = useState(initialModalState);

    const handleClose = () => {
        setModalShow(initialModalState);
    }


    return (
        <>

            {/* ------ Address Start ------ */}
            <div className="account pd-x">
                <div className="page_menu">
                    Home {` > `} <span>Manage Address</span>
                </div>


                <div className="row">
                    <div className="col-lg-3">
                        <AccountSidebar />
                    </div>

                    <div className="col-lg-9">
                        <div className="account_overview">
                            <h4>Manage Address</h4>

                            <div className="details">

                                <div className="address">
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <div className='type d-flex align-items-center'>
                                            <img src={HomeLight} alt="" className='img-fluid' draggable={false} />

                                            <span className='mx-3'>Home</span>

                                            <div className='status delivered'>
                                                Primary
                                            </div>
                                        </div>

                                        <div>
                                            <button type='button' className='menu_btn' data-bs-toggle="dropdown" aria-expanded="false">
                                                <img src={MenuLight} alt="" className='img-fluid' draggable={false} />
                                            </button>
                                            <ul className="dropdown-menu dropdown-menu-end">
                                                <li><button type='button' className="dropdown-item" onClick={() => { setModalShow({ ...modalShow, primary: true }) }}>Set As Primary</button></li>
                                                <li><button type='button' className="dropdown-item" onClick={() => { navigate("/address/edit/1") }}>Edit</button></li>
                                                <li><button type='button' className="dropdown-item" onClick={() => { setModalShow({ ...modalShow, delete: true }) }}>Delete</button></li>

                                            </ul>

                                        </div>
                                    </div>

                                    <p className='mb-0'>
                                        123, Shyamdham Soc, Nana Varachha <br />
                                        Surat, Gujarat, India - 395006
                                    </p>
                                </div>

                                <div className="line"></div>

                                <div className="address">
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <div className='type d-flex align-items-center'>
                                            <img src={WorkLight} alt="" className='img-fluid' draggable={false} />

                                            <span className='mx-3'>Work</span>
                                        </div>

                                        <div>
                                            <button type='button' className='menu_btn' data-bs-toggle="dropdown" aria-expanded="false">
                                                <img src={MenuLight} alt="" className='img-fluid' draggable={false} />
                                            </button>
                                            <ul className="dropdown-menu dropdown-menu-end">
                                                <li><button type='button' className="dropdown-item" onClick={() => { setModalShow({ ...modalShow, primary: true }) }}>Set As Primary</button></li>
                                                <li><button type='button' className="dropdown-item" onClick={() => { navigate("/address/edit/2") }}>Edit</button></li>
                                                <li><button type='button' className="dropdown-item" onClick={() => { setModalShow({ ...modalShow, delete: true }) }}>Delete</button></li>

                                            </ul>

                                        </div>
                                    </div>

                                    <p className='mb-0'>
                                        306, Dhara Arcade, Mota Varachha <br />
                                        Surat, Gujarat, India - 395006
                                    </p>
                                </div>

                                <div className="line"></div>

                                <div className="address">
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <div className='type d-flex align-items-center'>
                                            <img src={OtherLight} alt="" className='img-fluid' draggable={false} />

                                            <span className='mx-3'>Other</span>
                                        </div>

                                        <div>
                                            <button type='button' className='menu_btn' data-bs-toggle="dropdown" aria-expanded="false">
                                                <img src={MenuLight} alt="" className='img-fluid' draggable={false} />
                                            </button>
                                            <ul className="dropdown-menu dropdown-menu-end">
                                                <li><button type='button' className="dropdown-item" onClick={() => { setModalShow({ ...modalShow, primary: true }) }}>Set As Primary</button></li>
                                                <li><button type='button' className="dropdown-item" onClick={() => { navigate("/address/edit/3") }}>Edit</button></li>
                                                <li><button type='button' className="dropdown-item" onClick={() => { setModalShow({ ...modalShow, delete: true }) }}>Delete</button></li>

                                            </ul>

                                        </div>
                                    </div>

                                    <p className='mb-0'>
                                        789, Light House, Udhana Darwaja <br />
                                        Surat, Gujarat, India - 395006
                                    </p>
                                </div>

                            </div>

                            <button type='button' className='main_btn address_btn' onClick={() => navigate("/address/create")}>
                                ADD NEW ADDRESS
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* ------ Address End ------ */}


            {/* Modal-Primary */}
            <Primary show={modalShow.primary} handleClose={handleClose} />
            {/* Modal-Delete */}
            <Delete show={modalShow.delete} handleClose={handleClose} />

        </>
    )
}

export default Address;