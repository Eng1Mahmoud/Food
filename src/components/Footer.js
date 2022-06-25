import React from 'react';
// import icone
import { FaPhoneAlt, FaAngleRight, FaMapMarkerAlt, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
function Footer() {
    return (
        <footer>
            <div className="container pt-5">
                <div className="row g-4 row1 pb-3">
                    <div className="col-lg-3 col-md-6 col-sm-">
                        <h5 className="logo pb-2">F<span>oo</span>dy</h5>
                        <p>Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita</p>
                        <div>
                            <a href="#nm"><FaFacebookF className="p-1 icon rounded-circle me-2" /></a>
                            <a href="#nm"><FaTwitter className="p-1 icon rounded-circle me-2" /></a>
                            <a href="#nm"><FaLinkedinIn className="p-1 icon rounded-circle me-2" /></a>
                            <a href="#nm"><FaInstagram className="p-1 icon rounded-circle me-2" /></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <h5 className="pb-2">Address</h5>
                        <p> <FaMapMarkerAlt size="16" />123 Street, New York, USA </p>
                        <p> <FaPhoneAlt size="16" /> +012 345 67890 </p>
                        <p> <FaEnvelope size="16" /> info @example.com </p>

                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <h5 className="pb-2">Quick Links</h5>
                        <ul>
                            <li><a href="#"><FaAngleRight className='angle' size="16" /> About Us</a></li>
                            <li><a href="#"><FaAngleRight className='angle' size="16" /> Contact Us</a></li>
                            <li><a href="#"><FaAngleRight className='angle' size="16" /> Our Services</a></li>
                            <li><a href="#"><FaAngleRight className='angle' size="16" /> Terms & Condition</a></li>
                            <li><a href="#"><FaAngleRight className='angle' size="16" /> Suports</a></li>
                        </ul>

                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <h5 className="pb-2" >Newsletter</h5>
                        <p>Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.</p>
                        <div className="search ">
                            <input type="email"></input>
                            <button type="submit">SignUp</button>
                        </div>
                    </div>
                </div>
                <div className="row row2 pt-3">
                    <div className='copy-right  col-md-6 col-sm-12'>
                        <p> &copy;<strong>Food,</strong> All Right Reserved. </p>
                    </div>
                    <div className='Devoloper  col-md-6 col-sm-12 text-md-end text-sm-start'>
                        <p> Designed By <strong>Mahmoud Mohamed</strong> </p>
                    </div>
                </div>
            </div >
        </footer >
    );
}

export default Footer;
