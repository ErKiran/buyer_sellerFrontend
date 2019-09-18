import React, { Component } from 'react';
import AuthHeader from './AuthHeader';

class Register extends Component {
    render() {
        return (
            <div>
                <AuthHeader />
                <div className="padding-top-90 padding-bottom-90 access-page-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-md-6">
                                <div className="access-form">
                                    <div className="form-header">
                                        <h5><i data-feather="edit"></i>Register Account</h5>
                                    </div>
                                    <div className="account-type">
                                        <label for="idRegisterCan">
                                            <input id="idRegisterCan" type="radio" name="register" />
                                            <span>Candidate</span>
                                        </label>
                                        <label for="idRegisterEmp">
                                            <input id="idRegisterEmp" type="radio" name="register" />
                                            <span>Employer</span>
                                        </label>
                                    </div>
                                    <form action="#">
                                        <div className="form-group">
                                            <input type="text" placeholder="Username" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" placeholder="Email Address" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" placeholder="Password" className="form-control" />
                                        </div>
                                        <div className="more-option terms">
                                            <div className="mt-0 terms">
                                                <input className="custom-radio" type="checkbox" id="radio-4" name="termsandcondition" checked />
                                                <label for="radio-4">
                                                    <span className="dot"></span> I accept the <a href="#">terms & conditions</a>
                                                </label>
                                            </div>
                                        </div>
                                        <button className="button primary-bg btn-block">Register</button>
                                    </form>
                                    <div className="shortcut-login">
                                        <span>Or connect with</span>
                                        <div className="buttons">
                                            <a href="#" className="facebook"><i className="fab fa-facebook-f"></i>Facebook</a>
                                            <a href="#" className="google"><i className="fab fa-google"></i>Google</a>
                                        </div>
                                        <p>Already have an account? <a href="login.html">Login</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;