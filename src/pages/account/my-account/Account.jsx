import React from 'react'
import { Link } from 'react-router-dom';

// Css
import "../Account.scss"

// Image
// Light
import EditLight from "../../../assets/images/account/edit-light.svg";
import HomeLight from "../../../assets/images/account/home-light.svg";

import AccountSidebar from '../../../components/account-sidebar/AccountSidebar';

const Account = () => {
    return (
        <>

            {/* ------ Account Start ------ */}
            <div className="account pd-x">
                <div className="page_menu">
                    Home {` > `} <span>My Account</span>
                </div>


                <div className="row">
                    <div className="col-lg-3">
                        <AccountSidebar />
                    </div>

                    <div className="col-lg-9">
                        <div className="account_overview">
                            <h4>Account Overview</h4>

                            <div className="details">
                                <div className="user_info">
                                    <div className="name d-flex justify-content-between">
                                        Tarun Patel

                                        <Link>
                                            <img src={EditLight} alt="" className='img-fluid' draggable={false} />
                                        </Link>
                                    </div>
                                    <div className="email">tarunpatel123@gmail.com</div>
                                    <div className="phone">+91 01234567980</div>
                                </div>

                                <div className="line"></div>

                                <div className="user_address">
                                    <div className='title'>Primary Address</div>

                                    <div className='title d-flex align-items-center'>
                                        <img src={HomeLight} alt="" className='img-fluid me-3' draggable={false} />
                                        Home
                                    </div>

                                    <p className='mb-0'>
                                        123, Shyamdham Soc, Nana Varachha
                                        Surat, Gujarat, India - 395006
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ------ Account End ------ */}

        </>
    )
}

export default Account;
