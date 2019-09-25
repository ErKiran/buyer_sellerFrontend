import React, { Component } from 'react';

class ChangePassword extends Component {
    render() {
        return (
            <div className="dashboard-section basic-info-input">
                <h4><i data-feather="lock"></i>Change Password</h4>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Current Password</label>
                    <div className="col-sm-9">
                        <input type="password" className="form-control" placeholder="Current Password" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label">New Password</label>
                    <div className="col-sm-9">
                        <input type="password" className="form-control" placeholder="New Password" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Retype Password</label>
                    <div className="col-sm-9">
                        <input type="password" className="form-control" placeholder="Retype Password" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label"></label>
                    <div className="col-sm-9">
                        <button className="button">Save Change</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChangePassword;