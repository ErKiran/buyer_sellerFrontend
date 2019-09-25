import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { registerUser } from '../../actions/authAction';
import AuthHeader from './AuthHeader';
import AuthFooter from './AuthFooter';
import TextFieldGroup from '../common/TextFieldGroup';


class Register extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            password2: '',
            username: '',
            usertype: '',
            termsChecked: false,
            errors: {}
        };
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password,
            name: this.state.username,
            password2: this.state.password2,
            role: this.state.usertype,
            termsChecked: this.state.termsChecked
        };
        if (userData.password !== userData.password2) {
            console.log("Password Mismatched")
        } else {
            this.props.registerUser(userData, this.props.history);
            console.log(userData)
        }
    }

    clickme = () => {
        this.setState({ usertype: 'Seeker' })
    }

    clickmee = () => {
        this.setState({ usertype: 'Consultant' })
    }

    termClicked = () => {
        const check = this.state.termsChecked;
        (check === null) ? this.setState({ termsChecked: true }) : this.setState({ termsChecked: false });
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { errors } = this.state;
        return (
            <div>
                <AuthHeader
                    action="Login"
                />
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
                                            <input id="idRegisterCan" type="radio" name="register" onClick={this.clickme} />
                                            <span>Seeker</span>
                                        </label>
                                        <label for="idRegisterEmp">
                                            <input id="idRegisterEmp" type="radio" name="register" onClick={this.clickmee} />
                                            <span>Consultant</span>
                                        </label>
                                    </div>
                                    {errors.userRole}
                                    <form onSubmit={this.onSubmit}>
                                        <TextFieldGroup
                                            placeholder="Username*"
                                            name="username"
                                            type="text"
                                            value={this.state.username}
                                            onChange={this.onChange}
                                            error={errors.name}
                                        />
                                        <TextFieldGroup
                                            placeholder="Email"
                                            name="email"
                                            type="email"
                                            value={this.state.email}
                                            className="form-control"
                                            onChange={this.onChange}
                                            error={errors.email}
                                        />
                                        <TextFieldGroup
                                            placeholder="Password*"
                                            name="password"
                                            type="password"
                                            value={this.state.password}
                                            onChange={this.onChange}
                                            error={errors.password}
                                        />
                                        <TextFieldGroup
                                            placeholder="Repeat Password*"
                                            name="password2"
                                            type="password"
                                            value={this.state.password2}
                                            onChange={this.onChange}
                                            error={errors.password2}
                                        />
                                        <div className="more-option terms">
                                            <div className="mt-0 terms">
                                                <input className="custom-radio"
                                                    type="checkbox"
                                                    id="radio-4"
                                                    name="termsandcondition"
                                                    onClick={this.termClicked}
                                                />
                                                <label for="radio-4">
                                                    <span className="dot"></span> I accept the <Link to="terms_and_condition">terms & conditions</Link>
                                                </label>
                                            </div>
                                        </div>
                                        <button type="submit" className="button primary-bg btn-block">Register</button>
                                    </form>
                                    <AuthFooter
                                        info="Already have an account? "
                                        title="Login"
                                        link="/login"
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

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
