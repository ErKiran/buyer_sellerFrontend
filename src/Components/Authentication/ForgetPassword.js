import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextFieldGroup from '../common/TextFieldGroup';
import { forgetPassword } from '../../actions/authAction';

class ForgetPassword extends Component {
    constructor() {
        super();
        this.state = {
            email: ''
        };
    }
    onSubmit = (e) => {
        e.preventDefault();
        const userData = {
            email: this.state.email
        };
        this.props.forgetPassword(userData);
        console.log(this.props)
        if (this.props.auth.isResetRequest) {
            this.props.history.push('/login');
        }
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        return (
            <div>
                <div className="padding-top-90 padding-bottom-90 access-page-bg-forget">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-md-6">
                                <div className="access-form">
                                    <div className="form-header">
                                        <h5><i className="user"></i>Forget Password</h5>
                                    </div>
                                    <p>Enter your E-mail address for password Reset</p>
                                    <form onSubmit={this.onSubmit}>
                                        <TextFieldGroup
                                            className="form-control-lg"
                                            placeholder="Email*"
                                            type="email"
                                            name="email"
                                            value={this.state.email}
                                            onChange={this.onChange}
                                        />
                                        <button className="button primary-bg btn-block" type="submit">Reset</button>
                                    </form>
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

export default connect(mapStateToProps, { forgetPassword })(ForgetPassword);
