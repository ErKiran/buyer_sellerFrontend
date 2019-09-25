import React from 'react';

const CompanyWrap = () => {
    return (
        <div className="company-wrap">
            <div className="thumb">
                <a href="#">
                    <img src="images/company/company-logo-1.png" className="img-fluid" alt="" />
                </a>
            </div>
            <div className="body">
                <h4><a href="employer-details.html">Digoin</a></h4>
                <span>Kansas City, Missouri</span>
                <a href="job-listing.html" className="button">4 Open Positions</a>
            </div>
        </div>
    );
};

export default CompanyWrap;