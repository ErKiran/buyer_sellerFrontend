import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SingleItem extends Component {
    render() {
        return (
            <div className="category">
                <div className="icon">
                    <i className={this.props.icon}></i>
                </div>
                <h5><Link to="job-listing.html">{this.props.subject}<span>({this.props.count})</span></Link></h5>
            </div>
        );
    }
}

export default SingleItem;