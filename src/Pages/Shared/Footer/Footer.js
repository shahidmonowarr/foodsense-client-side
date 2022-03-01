import { faMapMarkedAlt, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Nav, NavLink } from 'react-bootstrap';
import './Footer.css';
const Footer = () => {
    return (
        <div>
            <div className="footer-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-6">
                            <div className="left-container text-start"> <br /><br /><br />
                                <h2 className=' text-light'>FOOD<span className='text-warning'>Sense</span></h2>
                                <div className=""><hr />
                                    <div className="d-flex justify-content-center ">

                                        <div className="m-2 icon">
                                            <h3><i className="fab fa-facebook-square icon text-primary"></i></h3>
                                        </div>
                                        <div className="m-2 icon">
                                            <h3><i className="fab fa-instagram icon text-danger"></i></h3>
                                        </div>
                                        <div className="m-2 icon">
                                            <h3><i className="fab fa-linkedin icon text-primary"></i></h3>
                                        </div>
                                        <div className="m-2 icon">
                                            <h3><i className="fab fa-youtube text-danger icon  "></i></h3>
                                        </div>
                                        <div className="m-2 icon">
                                            <h3><i className="fab fa-twitter icon text-primary"></i></h3>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="footer-news-container">
                                <h4><i className="fas fa-user-edit"></i> News & tips</h4> <hr />
                                <div className="news">
                                    <div className="">
                                        <h6>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, suscipit?</h6>
                                        <hr />
                                    </div>

                                    <div className=""> <h6>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, suscipit?</h6>
                                    </div>

                                </div>

                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <div className="right-footer-container">
                                <h4>Sign Up</h4>
                                <hr />
                                <input
                                    className="footer-input rounded-3"
                                    type="text"
                                    placeholder="Enter Email"
                                />
                                <div className="phone d-flex align-items-center justify-content-center mt-4">
                                    <div className="footer-phone-icon text-success">
                                        <FontAwesomeIcon icon={faPhoneVolume} />
                                    </div>
                                    <div>
                                        <h5>+1 0 0000 0000</h5>
                                    </div>
                                </div>
                                <div className="map d-flex align-items-center justify-content-center">
                                    <div className="footer-phone-icon">
                                        <FontAwesomeIcon icon={faMapMarkedAlt} />
                                    </div>
                                    <div>
                                        <p>
                                            Savar, Dhaka
                                            <br />Bangladesh
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6">
                            <div className="footer-menu-container">
                                <h4>Link</h4>
                                <hr />
                                <Nav.Link as={NavLink} to="/home" className="nav-item text-white fw-bold">
                                    Home
                                </Nav.Link>
                                <Nav.Link as={NavLink} to="/service" className="nav-item text-white fw-bold">
                                    our Services
                                </Nav.Link>
                                <Nav.Link as={NavLink} to="/about" className="nav-item text-white fw-bold">
                                    About
                                </Nav.Link>
                                <Nav.Link as={NavLink} to="/contact" className="nav-item text-white fw-bold">
                                    Contact
                                </Nav.Link>


                            </div>
                        </div>
                    </div>
                    <hr />
                    <p>
                        <small> All rights reserved.© Shahid Monowar</small>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;