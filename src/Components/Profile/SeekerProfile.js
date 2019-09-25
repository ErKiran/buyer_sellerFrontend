import React, { Component } from 'react';
import BreadCrumb from '../common/BreadCrumb';
import ChangePassword from './ChangePassword';
import TextFieldGroup from '../common/TextFieldGroup';

class SeekerProfile extends Component {
    render() {
        return (
            <div>
                <BreadCrumb
                    title="Seeker Dashboard"
                />
                <div class="alice-bg section-padding-bottom">
                    <div class="container no-gliters">
                        <div class="row no-gliters">
                            <div class="col">
                                <div class="dashboard-container">
                                    <div class="dashboard-content-wrapper">
                                        <form action="#" class="dashboard-form">
                                            <div class="dashboard-section upload-profile-photo">
                                                <div class="update-photo">
                                                    <img class="image" src="dashboard/images/user-1.jpg" alt="" />
                                                </div>
                                                <div class="file-upload">
                                                    <input type="file" class="file-input" />Change Avatar
                                            </div>
                                            </div>
                                            <div class="dashboard-section basic-info-input">
                                                <h4><i data-feather="user-check"></i>Basic Info</h4>
                                                <div class="form-group row">
                                                    <label class="col-sm-3 col-form-label">Full Name</label>
                                                    <div class="col-sm-9">
                                                        <TextFieldGroup
                                                            placeholder="Email"
                                                            name="email"
                                                            type="email"
                                                            className="form-control"
                                                        />
                                                        <input type="text" class="form-control" placeholder="Full Name" />
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <label class="col-sm-3 col-form-label">Username</label>
                                                    <div class="col-sm-9">
                                                        <input type="text" class="form-control" placeholder="@username" />
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <label class="col-sm-3 col-form-label">Email Address</label>
                                                    <div class="col-sm-9">
                                                        <input type="text" class="form-control" placeholder="email@example.com" />
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <label class="col-sm-3 col-form-label">Phone</label>
                                                    <div class="col-sm-9">
                                                        <input type="text" class="form-control" placeholder="+55 123 4563 4643" />
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <label class="col-sm-3 col-form-label">Address</label>
                                                    <div class="col-sm-9">
                                                        <input type="text" class="form-control" placeholder="Washington D.C" />
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <label class="col-sm-3 col-form-label">Indestry Expertise</label>
                                                    <div class="col-sm-9">
                                                        <input type="text" class="form-control" placeholder="UI & UX Designer" />
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <label class="col-sm-3 col-form-label">About Me</label>
                                                    <div class="col-sm-9">
                                                        <textarea class="form-control" placeholder="Introduce Yourself"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <ChangePassword />
                                        </form>
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

export default SeekerProfile;