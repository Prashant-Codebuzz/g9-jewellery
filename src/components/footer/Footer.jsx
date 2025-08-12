import React from 'react'
import { Link } from 'react-router-dom';

// Css
import "./Footer.scss"

// Image
// Light
import CallLight from "../../assets/images/footer/call-light.svg";
import EmailLight from "../../assets/images/footer/email-light.svg";
import InstagramLight from "../../assets/images/footer/instagram-light.svg";
import FacebookLight from "../../assets/images/footer/facebook-light.svg";
import LinkedinLight from "../../assets/images/footer/linkedin-light.svg";
import YoutubeLight from "../../assets/images/footer/youtube-light.svg";

const Footer = () => {
    return (
        <>

            {/* ------ Footer Start ------ */}
            <footer className='pd-x'>
                <div className="row">
                    <div className="col-lg-2">
                        <h3>Quick Links</h3>

                        <ul>
                            <li><Link>Home</Link></li>
                            <li><Link>About Us</Link></li>
                            <li><Link>Our Story</Link></li>
                            <li><Link>Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-2">
                        <h3>Men’s Jewellery</h3>

                        <ul>
                            <li><Link>Rings</Link></li>
                            <li><Link>Bracelets</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-2">
                        <h3>Women’s Jewellery</h3>

                        <ul>
                            <li><Link>Rings</Link></li>
                            <li><Link>Bracelets</Link></li>
                            <li><Link>Necklaces</Link></li>
                            <li><Link>Earrings</Link></li>
                            <li><Link>Chains</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-2">
                        <h3>Accessories</h3>

                        <ul>
                            <li><Link>Watches</Link></li>
                            <li><Link>Diamonds</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-2">
                        <h3>Policies</h3>

                        <ul>
                            <li><Link>Privacy Policy</Link></li>
                            <li><Link>Terms & Conditions</Link></li>
                            <li><Link>Payment & Delivery Policy</Link></li>
                            <li><Link>Refund & Return Policy</Link></li>
                        </ul>
                    </div>
                </div>
            </footer>
            {/* ------ Footer End ------ */}



            {/* ------ Developed Start ------ */}
            <div className='developed'>
                <div className="social">
                    <h3 className='text-center'>Get In Touch</h3>

                    <div className="d-flex justify-content-center flex-wrap gap-4">
                        <Link>
                            <img src={CallLight} alt="" className='img-fluid' draggable={false} />
                        </Link>
                        <Link>
                            <img src={EmailLight} alt="" className='img-fluid' draggable={false} />
                        </Link>
                        <Link>
                            <img src={InstagramLight} alt="" className='img-fluid' draggable={false} />
                        </Link>
                        <Link>
                            <img src={FacebookLight} alt="" className='img-fluid' draggable={false} />
                        </Link>
                        <Link>
                            <img src={LinkedinLight} alt="" className='img-fluid' draggable={false} />
                        </Link>
                        <Link>
                            <img src={YoutubeLight} alt="" className='img-fluid' draggable={false} />
                        </Link>
                    </div>
                </div>

                <p className='mb-0 text-center'>
                    G9 Jewellery © 2025, All Right Reserved.
                </p>
            </div>
            {/* ------ Developed End ------ */}

        </>

    )
}

export default Footer;