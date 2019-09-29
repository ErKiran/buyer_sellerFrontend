import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MainHeading extends Component {
    render() {
        const onClick = () => {
            return (
                <div className="account-card">
                    <div className="header-top-account-info">
                        <a href="#" className="account-thumb">
                            <img src="images/account/thumb-1.jpg" className="img-fluid" alt="" />
                        </a>
                        <div className="account-body">
                            <h5><a href="#">Robert Chavez</a></h5>
                            <span className="mail">chavez@domain.com</span>
                        </div>
                    </div>
                    <ul className="account-item-list">
                        <li><a href="#"><span className="ti-user"></span>Account</a></li>
                        <li><a href="#"><span className="ti-settings"></span>Settings</a></li>
                        <li><a href="#"><span className="ti-power-off"></span>Log Out</a></li>
                    </ul>
                </div>
            )
        }
        return (
            <header className="header-2">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="header-top">
                                <div className="logo-area">
                                    <Link to="/"><img src="images/logo-2.png" alt="" /></Link>
                                </div>
                                <div className="header-top-toggler">
                                    <div className="header-top-toggler-button"></div>
                                </div>
                                <div className="top-nav">
                                    <div className="dropdown header-top-account">
                                        <button className="account-button" onClick={onClick}>My Account</button>
                                    </div>
                                    <select className="selectpicker select-language" data-width="fit">
                                        <option data-content='<span className="flag-icon flag-icon-us"></span> English'>English</option>
                                        <option data-content='<span className="flag-icon flag-icon-mx"></span> Español'>Español</option>
                                    </select>
                                </div>
                            </div>
                            <nav className="navbar navbar-expand-lg cp-nav-2">
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav">
                                        <li className="menu-item active"><Link to="/">Home</Link></li>
                                        <li className="menu-item active"><Link to="/dashboard">Dashboard</Link></li>
                                        <li className="menu-item active"><Link to="/about">About</Link></li>
                                        <li className="menu-item active"><Link to="/contact_us">Contact</Link></li>
                                        <li className="menu-item active"><Link to="/contact_us">Logout</Link></li>
                                        <li className="menu-item post-job"><a href="post-job.html"><i className="fas fa-plus"></i>Post a Ad</a></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>

        );
    }
}

export default MainHeading;