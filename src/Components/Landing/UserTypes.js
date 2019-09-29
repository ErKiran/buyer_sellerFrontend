import React from 'react';
import { Link } from 'react-router-dom';

const UserTypes = () => {
    return (
        <div className="section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="call-to-action-box candidate-box">
                            <div className="icon">
                                <img src="images/register-box/1.png" alt="" />
                            </div>
                            <span>Are You</span>
                            <h3>Consultant?</h3>
                            <Link to={{ pathname: "/register", state: { usertype: 'Consultant' } }}>Register Now <i className="fas fa-arrow-right"></i></Link>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="call-to-action-box employer-register">
                            <div className="icon">
                                <img src="images/register-box/2.png" alt="" />
                            </div>
                            <span>Are You</span>
                            <h3>Buyer?</h3>
                            <Link to={{ pathname: '/register', state: { usertype: 'Buyer' } }}>Register Now <i className="fas fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default UserTypes;