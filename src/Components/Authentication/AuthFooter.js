import React from 'react';
import { Link } from 'react-router-dom';

const AuthFooter = (props) => {
    return (
        <div>
            <div className="shortcut-login">
                <span>Or connect with</span>
                <div className="buttons">
                    <a href="#" className="facebook"><i className="fab fa-facebook-f"></i>Facebook</a>
                    <a href="#" className="google"><i className="fab fa-google"></i>Google</a>
                </div>
                <p> {props.info}<Link to={props.link}>{props.title}</Link></p>
            </div>
        </div>
    );
};

export default AuthFooter;