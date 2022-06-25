import React from 'react';
import { Form, Row, Button, Col } from 'react-bootstrap'
import HeadSection from './HeadSection'
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
function Contact() {
    return (
        <div className="contact pt-5">
            <HeadSection head="Contact Us"
                p="Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo."
            />

            <div className='container  py-5'>
                <div className='row g-4'>
                    <div className='col-md-5  col-sm-12 call p-5'>
                        <div className='box-contact py-3'>
                            <h6>Call Us</h6>
                            <p className="pt-2"> <FaPhoneAlt size="16" /> +012 345 67890 </p>
                        </div>
                        <div className='box-contact py-3'>
                            <h6>Email Us</h6>
                            <p className="pt-2"> <FaEnvelope size="16" />  info @example.com </p>
                        </div>
                        <div className='box-contact py-3'>
                            <h6>Office Address</h6>
                            <p className="pt-2"> <FaMapMarkerAlt size="16" /> 123 Street, New York, USA </p>
                        </div>
                        <div className='box-contact py-3'>
                            <h6>Follow Us</h6>
                            <p className="pt-2">
                                <a href="#nm"><FaFacebookF className="p-1 icon rounded-circle me-2" /></a>
                                <a href="#nm"><FaTwitter className="p-1 icon rounded-circle me-2" /></a>
                                <a href="#nm"><FaLinkedinIn className="p-1 icon rounded-circle me-2" /></a>
                                <a href="#nm"><FaInstagram className="p-1 icon rounded-circle me-2" /></a></p>
                        </div>
                    </div>
                    <div className='col-md-7  col-sm-12 form'>

                        <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.
                            Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.
                        </p>
                        <Form>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail" >
                                    <Form.Control type="email" placeholder="Enter email" className="p-3 out rounded-0" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Control type="password" placeholder="Password" className="p-3 out rounded-0" />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Control placeholder="1234 Main St" className="p-3 out rounded-0" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" rows={8} placeholder="Message" className="p-3 out rounded-0" />
                            </Form.Group>

                            <Button variant="primary" type="submit" className="p-3  rounded-pill submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>

            <div className='map py-0 '>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin" width="100%" height="450px" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0" ></iframe>
            </div>

        </div >
    );
}

export default Contact;
