import React, { Component } from 'react';
import BreadCrumb from '../common/BreadCrumb';
import DashboardMenu from './DashboardMenu';
import { connect } from 'react-redux';
import { getConsultantProfileData, addConsultantProfile, editConsultantProfile } from '../../actions/profileAction';
import TextFieldGroup from '../common/TextFieldGroup';

class ConsultantProfile extends Component {
    constructor() {
        super();
        this.state = {
            companyName: '',
            file: null,
            phone: '',
            address: '',
            aboutMe: '',
            serviceProvided: '',
            introVideo: '',
            images: [],
            links: {}
        };
    }
    componentDidMount() {
        this.props.getConsultantProfileData()
    }

    checkIfProfileExist = (userData) => {
        const { profileData } = this.props.profileData;
        console.log(this.props.profileData)
        Object.values(profileData).length === 1 ? this.props.editConsultantProfile(userData) : this.props.addConsultantProfile(userData)
    }


    onSubmit = async (e) => {
        e.preventDefault();
        const userData = {
            companyName: this.state.companyName,
            phone: this.state.phone,
            serviceProvided: this.state.serviceProvided,
            address: this.state.address,
            aboutMe: this.state.aboutMe,
            introVideo: this.state.introVideo
        };
        this.checkIfProfileExist(userData)
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    componentWillReceiveProps(nextProps) {
        const { profileData } = nextProps.profileData;
        const datas = Object.values(profileData);
        if (datas[0]) {
            this.setState({
                companyName: datas[0].companyName,
                phone: datas[0].phone,
                industryInterest: datas[0].industryInterest,
                address: datas[0].address,
                aboutMe: datas[0].aboutMe
            })
        }
    }

    render() {
        return (
            <div>
                <BreadCrumb
                    title="Consultant Dashboard"
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
                                                    <img className="image" src="dashboard/images/company-logo.png" alt="" />
                                                </div>
                                                <div className="file-upload">
                                                    <input type="file" className="file-input" />Change Avatar
                                                </div>
                                            </div>
                                            <div className="dashboard-section basic-info-input">
                                                <h4><i data-feather="user-check"></i>Basic Info</h4>
                                                <div className="form-group row">
                                                    <label className="col-sm-3 col-form-label">Company Name</label>
                                                    <div className="col-sm-9">
                                                        <TextFieldGroup
                                                            placeholder="Company Name"
                                                            name="companyName"
                                                            type="text"
                                                            value={this.state.companyName}
                                                            onChange={this.onChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-3 col-form-label">Phone</label>
                                                    <div className="col-sm-9">
                                                        <TextFieldGroup
                                                            placeholder="Phone"
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
                                                            placeholder="Address"
                                                            name="address"
                                                            type="text"
                                                            value={this.state.address}
                                                            onChange={this.onChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-3 col-form-label">Category</label>
                                                    <div className="col-sm-9">
                                                        <TextFieldGroup
                                                            placeholder="Category"
                                                            name="serviceProvided"
                                                            type="text"
                                                            value={this.state.serviceProvided}
                                                            onChange={this.onChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-3 col-form-label">About Us</label>
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
                                            <div className="dashboard-section media-inputs">
                                                <h4><i data-feather="image"></i>Photo &amp; Video</h4>
                                                <div className="form-group row">
                                                    <label className="col-sm-3 col-form-label">Intro Video</label>
                                                    <div className="col-sm-9">
                                                        <div className="input-group">
                                                            <div className="input-group-prepend">
                                                                <div className="input-group-text">Link</div>
                                                            </div>
                                                            <TextFieldGroup
                                                                placeholder="URL Link"
                                                                name="introVideo"
                                                                type="text"
                                                                value={this.state.introVideo}
                                                                onChange={this.onChange}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-3 col-form-label">Gallery</label>
                                                    <div className="col-sm-9">
                                                        <div className="input-group image-upload-input">
                                                            <div className="input-group-prepend">
                                                                <div className="input-group-text">Image</div>
                                                            </div>
                                                            <div className="active">
                                                                <div className="upload-images">
                                                                    <div className="pic">
                                                                        <span className="ti-plus"></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="dashboard-section social-inputs">
                                                <h4><i data-feather="cast"></i>Social Networks</h4>
                                                <div className="form-group row">
                                                    <label className="col-sm-3 col-form-label">Social Links</label>
                                                    <div className="col-sm-9">
                                                        <div className="input-group">
                                                            <div className="input-group-prepend">
                                                                <div className="input-group-text"><i className="fab fa-facebook-f"></i></div>
                                                            </div>
                                                            <input type="text" className="form-control" placeholder="facebook.com/username" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="offset-sm-3 col-sm-9">
                                                        <div className="input-group">
                                                            <div className="input-group-prepend">
                                                                <div className="input-group-text"><i className="fab fa-twitter"></i></div>
                                                            </div>
                                                            <input type="text" className="form-control" placeholder="twitter.com/username" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="offset-sm-3 col-sm-9">
                                                        <div className="input-group">
                                                            <div className="input-group-prepend">
                                                                <div className="input-group-text"><i className="fab fa-google-plus"></i></div>
                                                            </div>
                                                            <input type="text" className="form-control" placeholder="google.com/username" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="offset-sm-3 col-sm-9">
                                                        <div className="input-group add-new">
                                                            <div className="input-group-prepend">
                                                                <div className="input-group-text dropdown-label">
                                                                    <select className="form-control" id="exampleFormControlSelect1">
                                                                        <option>Select</option>
                                                                        <option>2</option>
                                                                        <option>3</option>
                                                                        <option>4</option>
                                                                        <option>5</option>
                                                                    </select><i className="fa fa-caret-down"></i>
                                                                </div>
                                                            </div>
                                                            <input type="text" className="form-control" placeholder="Input Profile Link" />
                                                        </div>
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
    errors: state.errors,
    profileData: state.profile
});

export default connect(
    mapStateToProps,
    {
        addConsultantProfile,
        getConsultantProfileData,
        editConsultantProfile
    }
)(ConsultantProfile);
