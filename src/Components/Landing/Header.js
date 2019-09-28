import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <header style={{ backgroundColor: 'red !important' }}>
                <nav className="navbar navbar-expand-xl absolute-nav transparent-nav cp-nav navbar-light bg-light fluid-nav">
                    <a className="navbar-brand" href="index.html">
                        <img src="images/logo2.png" height="30px" width="60" className="img-fluid" alt="" />
                    </a>
                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto main-nav">
                            <li className="menu-item post-job"><Link title="Title" to="/"><i className="fas fa-home"></i>Home</Link></li>
                            <li className="menu-item post-job"><Link title="Title" to="/login"><i className="fas fa-sign-in-alt"></i>Login</Link></li>
                            <li className="menu-item post-job"><Link title="Title" to="/register"><i className="fas fa-user-plus"></i>Registration</Link></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header;