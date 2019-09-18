import React, { Component } from 'react';
import AuthHeader from './AuthHeader'
import AuthFooter from './AuthFooter';

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
                                        <h5><i className="user"></i>Login</h5>
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
                                    <AuthFooter
                                        info="Don't have an account? "
                                        title="Register"
                                        link="/register"
                                    />
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