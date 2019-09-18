import React, { Component } from 'react';
import AuthHeader from './AuthHeader'

class Login extends Component {
    render() {
        return (
            <div>
                <AuthHeader
                    action="Register"
                    link="/register"
                />
                <div className="padding-top-90 padding-bottom-90 access-page-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-md-6">
                                <div className="access-form">
                                    <div className="form-header">
                                        <h5><i data-feather="user"></i>Login</h5>
                                    </div>
                                    <form action="#">
                                        <div className="form-group">
                                            <input type="email" placeholder="Email Address" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" placeholder="Password" className="form-control" />
                                        </div>
                                        <div className="more-option">
                                            <div className="mt-0 terms">
                                                <input className="custom-radio" type="checkbox" id="radio-4" name="termsandcondition" />
                                                <label for="radio-4">
                                                    <span className="dot"></span> Remember Me
                                              </label>
                                            </div>
                                            <a href="#">Forget Password?</a>
                                        </div>
                                        <button className="button primary-bg btn-block">Login</button>
                                    </form>
                                    <div className="shortcut-login">
                                        <span>Or connect with</span>
                                        <div className="buttons">
                                            <a href="#" className="facebook"><i className="fab fa-facebook-f"></i>Facebook</a>
                                            <a href="#" className="google"><i className="fab fa-google"></i>Google</a>
                                        </div>
                                        <p>Don't have an account? <a href="register.html">Register</a></p>
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

export default Login;