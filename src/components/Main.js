import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

function Main() {
    return (
        <div className="main px-5">
            <div className="container-fluid ">
                <div className="row ">
                    <div className="col-md-6 first ">
                        <span><FaMapMarkerAlt className="em  " />123 Street, New York, USA</span >
                        <span ><FaEnvelope className="em " />info@example.com</span>
                    </div>
                    <div className="col-md-6 second">
                        <p className="text-end">
                            <span>Follow us: </span>
                            <a href="#"><FaFacebookF /></a>
                            <a href="#"><FaLinkedinIn /></a>
                            <a href="#"><FaTwitter /></a>
                            <a href="#"><FaInstagram /></a>
                        </p>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Main;
