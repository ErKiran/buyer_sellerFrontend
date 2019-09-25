import React, { Component } from 'react';
import BreadCrumb from '../common/BreadCrumb'
import ChangePassword from './ChangePassword';

class ConsultantProfile extends Component {
    render() {
        return (
            <div>
                <BreadCrumb
                    title="Consultant Dashboard"
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
                                                    <img class="image" src="dashboard/images/company-logo.png" alt="" />
                                                </div>
                                                <div class="file-upload">
                                                    <input type="file" class="file-input" />Change Avatar
                    </div>
                                            </div>
                                            <div class="dashboard-section basic-info-input">
                                                <h4><i data-feather="user-check"></i>Basic Info</h4>
                                                <div class="form-group row">
                                                    <label class="col-sm-3 col-form-label">Company Name</label>
                                                    <div class="col-sm-9">
                                                        <input type="text" class="form-control" placeholder="Company Name" />
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
                                                    <label class="col-sm-3 col-form-label">Category</label>
                                                    <div class="col-sm-9">
                                                        <input type="text" class="form-control" placeholder="UI & UX Designer" />
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <label class="col-sm-3 col-form-label">About Us</label>
                                                    <div class="col-sm-9">
                                                        <textarea class="form-control" placeholder=""></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="dashboard-section media-inputs">
                                                <h4><i data-feather="image"></i>Photo &amp; Video</h4>
                                                <div class="form-group row">
                                                    <label class="col-sm-3 col-form-label">Intro Video</label>
                                                    <div class="col-sm-9">
                                                        <div class="input-group">
                                                            <div class="input-group-prepend">
                                                                <div class="input-group-text">Link</div>
                                                            </div>
                                                            <input type="text" class="form-control" placeholder="https://www.youtube.com/watch?v=ZRkdyjJ_489M" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <label class="col-sm-3 col-form-label">Gallery</label>
                                                    <div class="col-sm-9">
                                                        <div class="input-group image-upload-input">
                                                            <div class="input-group-prepend">
                                                                <div class="input-group-text">Image</div>
                                                            </div>
                                                            <div class="active">
                                                                <div class="upload-images">
                                                                    <div class="pic">
                                                                        <span class="ti-plus"></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="dashboard-section social-inputs">
                                                <h4><i data-feather="cast"></i>Social Networks</h4>
                                                <div class="form-group row">
                                                    <label class="col-sm-3 col-form-label">Social Links</label>
                                                    <div class="col-sm-9">
                                                        <div class="input-group">
                                                            <div class="input-group-prepend">
                                                                <div class="input-group-text"><i class="fab fa-facebook-f"></i></div>
                                                            </div>
                                                            <input type="text" class="form-control" placeholder="facebook.com/username" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <div class="offset-sm-3 col-sm-9">
                                                        <div class="input-group">
                                                            <div class="input-group-prepend">
                                                                <div class="input-group-text"><i class="fab fa-twitter"></i></div>
                                                            </div>
                                                            <input type="text" class="form-control" placeholder="twitter.com/username" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <div class="offset-sm-3 col-sm-9">
                                                        <div class="input-group">
                                                            <div class="input-group-prepend">
                                                                <div class="input-group-text"><i class="fab fa-google-plus"></i></div>
                                                            </div>
                                                            <input type="text" class="form-control" placeholder="google.com/username" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <div class="offset-sm-3 col-sm-9">
                                                        <div class="input-group add-new">
                                                            <div class="input-group-prepend">
                                                                <div class="input-group-text dropdown-label">
                                                                    <select class="form-control" id="exampleFormControlSelect1">
                                                                        <option>Select</option>
                                                                        <option>2</option>
                                                                        <option>3</option>
                                                                        <option>4</option>
                                                                        <option>5</option>
                                                                    </select><i class="fa fa-caret-down"></i>
                                                                </div>
                                                            </div>
                                                            <input type="text" class="form-control" placeholder="Input Profile Link" />
                                                        </div>
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

export default ConsultantProfile;