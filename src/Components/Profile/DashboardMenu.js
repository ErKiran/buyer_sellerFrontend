import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getConsultantProfileData, getSeekerProfileData } from '../../actions/profileAction';

class DashboardMenu extends Component {
    constructor() {
        super();
        this.state = {
            fullname: '',
            mention: '',
            errors: {}
        };
    }
    componentDidMount() {
        this.props.getSeekerProfileData();
        this.props.getConsultantProfileData()
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.profileData) {
            this.setState({ fullname: nextProps.profileData.fullname });
        }
    }

    render() {
        const { profileData } = this.state;
        return (
            <div>
                <div className="dashboard-sidebar">
                    <div className="user-info">
                        <div className="thumb">
                            <img src="dashboard/images/user-1.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="user-body">
                            <h5>KIran Adhikari</h5>
                            <span>@username</span>
                        </div>
                    </div>
                    <div className="profile-progress">
                        <div className="progress-item">
                            <div className="progress-head">
                                <p className="progress-on">Profile</p>
                            </div>
                            <div className="progress-body">
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: 0 }}></div>
                                </div>
                                <p className="progress-to">70%</p>
                            </div>
                        </div>
                    </div>
                    <div className="dashboard-menu">
                        <ul>
                            <li className={this.props.dashboard}><i className="fas fa-home"></i><a href="dashboard.html">Dashboard</a></li>
                            <li className={this.props.edit}><i className="fas fa-user"></i><a href="dashboard-edit-profile.html">Edit Profile</a></li>
                            <li className={this.props.book}><i className="fas fa-heart"></i><a href="dashboard-bookmark.html">Bookmarked</a></li>
                            <li className={this.props.applied}><i className="fas fa-check-square"></i><a href="dashboard-applied.html">Contacted Consultant</a></li>
                            <li className={this.props.message}><i className="fas fa-comment"></i><a href="dashboard-message.html">Message</a></li>
                            <li className={this.props.change}><i className="fas fa-key"></i><Link to="/change_password">Password Settings</Link></li>
                            <li className={this.props.pricing}><i className="fas fa-calculator"></i><a href="dashboard-pricing.html">Pricing Plans</a></li>
                        </ul>
                        <ul className="delete">
                            <li><i className="fas fa-power-off"></i><a href="#">Logout</a></li>
                            <li><i className="fas fa-trash-alt"></i><a href="#" data-toggle="modal" data-target="#modal-delete">Delete Profile</a></li>
                        </ul>
                        <div className="modal fade modal-delete" id="modal-delete" tabIndex="-1" role="dialog" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-body">
                                        <h4><i data-feather="trash-2"></i>Delete Account</h4>
                                        <p>Are you sure! You want to delete your profile. This can't be undone!</p>
                                        <form action="#">
                                            <div className="form-group">
                                                <input type="password" className="form-control" placeholder="Enter password" />
                                            </div>
                                            <div className="buttons">
                                                <button className="delete-button">Save Update</button>
                                                <button className="">Cancel</button>
                                            </div>
                                            <div className="form-group form-check">
                                                <input type="checkbox" className="form-check-input" defaultChecked="" />
                                                <label className="form-check-label">You accepts our <a href="#">Terms and Conditions</a> and <a href="#">Privacy Policy</a></label>
                                            </div>
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

const mapStateToProps = state => ({
    errors: state.errors,
    profileData: state.profile
});

export default connect(
    mapStateToProps,
    {
        getConsultantProfileData,
        getSeekerProfileData
    }
)(DashboardMenu);