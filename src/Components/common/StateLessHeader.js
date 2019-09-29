import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class StateLessHeader extends Component {
    render() {
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
                                        <li className="menu-item active"><Link to="/login">Login</Link></li>
                                        <li className="menu-item active"><Link to="/register">Register</Link></li>
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

export default StateLessHeader;