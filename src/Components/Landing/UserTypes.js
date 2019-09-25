import React from 'react';

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
                            <a href="#" data-toggle="modal" data-target="#exampleModalLong2">Register Now <i className="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="call-to-action-box employer-register">
                            <div className="icon">
                                <img src="images/register-box/2.png" alt="" />
                            </div>
                            <span>Are You</span>
                            <h3>Seeker?</h3>
                            <a href="#" data-toggle="modal" data-target="#exampleModalLong3">Register Now <i className="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserTypes;