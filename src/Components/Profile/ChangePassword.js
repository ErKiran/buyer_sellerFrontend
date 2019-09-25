import React, { Component } from 'react';
import TextFieldGroup from '../common/TextFieldGroup';

class ChangePassword extends Component {
    constructor() {
        super();
        this.state = {
            currentPass: '',
            newPass: '',
            confirmPass: ''
        };
    }
    onSubmit = async (e) => {
        e.preventDefault();
        const userData = {
            currentPass: this.state.currentPass,
            newPass: this.state.newPass,
            confirmPass: this.state.confirmPass
        };
        console.log(userData)
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div className="dashboard-section basic-info-input">
                <form onSubmit={this.onSubmit} className="dashboard-form">
                    <h4><i data-feather="lock"></i>Change Password</h4>
                    <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Current Password</label>
                        <div className="col-sm-9">
                            <TextFieldGroup
                                name="currentPass"
                                onChange={this.onChange}
                                value={this.state.currentPass}
                                placeholder="Current Password"
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-3 col-form-label">New Password</label>
                        <div className="col-sm-9">
                            <TextFieldGroup
                                name="newPass"
                                onChange={this.onChange}
                                value={this.state.newPass}
                                placeholder="New Password"
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Retype Password</label>
                        <div className="col-sm-9">
                            <TextFieldGroup
                                name="confirmPass"
                                onChange={this.onChange}
                                value={this.state.confirmPass}
                                placeholder="Confirm Password"
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-3 col-form-label"></label>
                        <div className="col-sm-9">
                            <button className="button">Save Change</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default ChangePassword;