import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSeekerProfile } from '../../actions/profileAction';

import BreadCrumb from '../common/BreadCrumb';
import TextFieldGroup from '../common/TextFieldGroup';
import DashboardMenu from './DashboardMenu';

class SeekerProfile extends Component {
    constructor() {
        super();
        this.state = {
            fullname: '',
            file: null,
            phone: '',
            address: '',
            aboutMe: '',
            industryInterest: ''
        };
    }
    onSubmit = async (e) => {
        e.preventDefault();
        const userData = {
            fullname: this.state.fullname,
            phone: this.state.phone,
            industryInterest: this.state.industryInterest,
            address: this.state.address,
            aboutMe: this.state.aboutMe
        };
        this.props.addSeekerProfile(userData)
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div>
                <BreadCrumb
                    title="Seeker Dashboard"
                />
                <div className="alice-bg section-padding-bottom">
                    <div className="container no-gliters">
                        <div className="row no-gliters">
                            <div className="col">
                                <div className="dashboard-container">
                                    <div className="dashboard-content-wrapper">
                                        <form onSubmit={this.onSubmit} className="dashboard-form">
                                            <div className="dashboard-section upload-profile-photo">
                                                <div className="update-photo">
                                                    <img className="image" src="dashboard/images/user-1.jpg" alt="" />
                                                </div>
                                                <div className="file-upload">
                                                    <input type="file" name="file" onChange={this.onChange} className="file-input" />Change Avatar
                                            </div>
                                            </div>
                                            <div className="dashboard-section basic-info-input">
                                                <h4><i data-feather="user-check"></i>Basic Info</h4>
                                                <div className="form-group row">
                                                    <label className="col-sm-3 col-form-label">Full Name</label>
                                                    <div className="col-sm-9">
                                                        <TextFieldGroup
                                                            placeholder="Fullname*"
                                                            name="fullname"
                                                            type="text"
                                                            value={this.state.fullname}
                                                            onChange={this.onChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-3 col-form-label">Phone</label>
                                                    <div className="col-sm-9">
                                                        <TextFieldGroup
                                                            placeholder="Phone Number*"
                                                            name="phone"
                                                            type="text"
                                                            value={this.state.phone}
                                                            onChange={this.onChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-3 col-form-label">Address</label>
                                                    <div className="col-sm-9">
                                                        <TextFieldGroup
                                                            placeholder="Address*"
                                                            name="address"
                                                            type="text"
                                                            value={this.state.address}
                                                            onChange={this.onChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-3 col-form-label">Industry Interest</label>
                                                    <div className="col-sm-9">
                                                        <TextFieldGroup
                                                            placeholder="Industry Interest*"
                                                            name="industryInterest"
                                                            type="text"
                                                            value={this.state.industryInterest}
                                                            onChange={this.onChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-3 col-form-label">About Me</label>
                                                    <div className="col-sm-9">
                                                        <textarea className="form-control"
                                                            name="aboutMe"
                                                            placeholder="Introduce Yourself"
                                                            value={this.state.aboutMe}
                                                            onChange={this.onChange}
                                                        />
                                                    </div>
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
                                    <DashboardMenu />
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
    errors: state.errors
});

export default connect(mapStateToProps, { addSeekerProfile })(SeekerProfile);

