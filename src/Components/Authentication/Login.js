import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authAction';
import { Link } from 'react-router-dom';
import TextFieldGroup from '../common/TextFieldGroup';
import AuthHeader from './AuthHeader'
import AuthFooter from './AuthFooter';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        };
    }
    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/What_we_do');
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/What_we_do');
        }
    }
    onSubmit = (e) => {
        e.preventDefault();

        const userData = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.loginUser(userData);
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/What_we_do')
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
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
                                    <form onSubmit={this.onSubmit}>
                                        <TextFieldGroup
                                            className="form-control"
                                            placeholder="Email*"
                                            type="email"
                                            name="email"
                                            value={this.state.email}
                                            onChange={this.onChange}
                                        />
                                        <TextFieldGroup
                                            className="form-control"
                                            placeholder="Password*"
                                            type="password"
                                            name="password"
                                            value={this.state.password}
                                            onChange={this.onChange}
                                        />
                                        <div className="more-option">
                                            <div className="mt-0 terms">
                                                <input className="custom-radio" type="checkbox" id="radio-4" name="termsandcondition" />
                                                <label for="radio-4">
                                                    <span className="dot"></span> Remember Me
                                              </label>
                                            </div>
                                            <Link to="/forget_password">Forget Password?</Link>
                                        </div>
                                        <button className="button primary-bg btn-block" type="submit">Login</button>
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


const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);
