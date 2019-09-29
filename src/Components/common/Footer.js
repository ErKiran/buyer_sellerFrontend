import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer-bg">
            <div className="footer-widget-wrapper padding-bottom-60 padding-top-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-sm-6">
                            <div className="footer-widget widget-about">
                                <img src="images/logo2.png" alt="Logo" />
                                <div className="widget-inner" style={{ paddingTop: '5px' }}>
                                    <p className="description">We tend to bridge beautiful ideas to capable hands.</p>
                                    <span className="about-contact"><i data-feather="phone-forwarded"></i>+8 246-345-0698</span>
                                    <span className="about-contact"><i data-feather="mail"></i>info@konsult101.com</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 offset-lg-1 col-sm-6">
                            <div className="footer-widget footer-shortcut-link">
                                <h4>Information</h4>
                                <div className="widget-inner">
                                    <ul>
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Contact Us</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Terms &amp; Conditions</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-6">
                            <div className="footer-widget footer-shortcut-link">
                                <h4>Buyers</h4>
                                <div className="widget-inner">
                                    <ul>
                                        <li><Link to="/">Buyers Consulting</Link></li>
                                        <li><Link to="/">Konsult 101</Link></li>
                                        <li><a href="#">FAQ</a></li>
                                        <li><a href="#">Video Guides</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-6">
                            <div className="footer-widget footer-shortcut-link">
                                <h4>Consultant</h4>
                                <div className="widget-inner">
                                    <ul>
                                        <li><a href="#">Products/Service</a></li>
                                        <li><a href="#">Post a Advertisement</a></li>
                                        <li><a href="#">FAQ</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom-area">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="footer-bottom border-top">
                                <div className="row">
                                    <div className="col-xl-4 col-lg-5 order-lg-2">
                                        <div className="footer-app-download">
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 order-lg-1">
                                        <p className="copyright-text">&copy; Copyright <a href="#">Konsult 101</a> {new Date().getFullYear()}, All right reserved</p>
                                    </div>
                                    <div className="col-xl-4 col-lg-3 order-lg-3">
                                        <div className="back-to-top">
                                            <a href="#">Back to top<i className="fas fa-angle-up"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;