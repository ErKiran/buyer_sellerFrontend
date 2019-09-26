import React from 'react';
import { Link } from 'react-router-dom';

const AuthHeader = (props) => {
    return (
        <div>
            <header className="header-2 access-page-nav">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="header-top">
                                <div className="logo-area">
                                    <Link to="/"><img src="images/logo-2.png" alt="" /></Link>
                                </div>
                                <div className="top-nav">
                                    <Link to={props.link} className="account-page-link">{props.action}</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default AuthHeader;