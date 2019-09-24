import React from 'react';
import { Link } from 'react-router-dom';

const Info = () => {
    return (
        <div>
            <div className="padding-top-80 section-padding-bottom alice-bg">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="section-padding-150 error-page-wrap text-center white-bg">
                                <div className="icon">
                                    <img src="images/email-box-letters.png"
                                        width="300px"
                                        height="300px"
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>
                                <h1>Hola</h1>
                                <p>Check your mail box and follow the instructions to recover your account</p>
                                <Link to="/login" className="button">Go Back</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;