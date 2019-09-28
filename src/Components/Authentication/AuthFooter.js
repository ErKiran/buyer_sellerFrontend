import React from 'react';
import { Link } from 'react-router-dom';

const AuthFooter = (props) => {
    return (
        <div>
            <div className="shortcut-login">

                <p> {props.info}<Link to={props.link}>{props.title}</Link></p>
            </div>
        </div>
    );
};

export default AuthFooter;