import React, { Component } from 'react';
import CompanyWrap from './CompanyWrap';

class TopCompany extends Component {
    render() {
        return (
            <div className="section-padding-top padding-bottom-90 alice-bg">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="section-header">
                                <h2>Top Consultant Companies</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="company-carousel owl-carousel">
                                <CompanyWrap />
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
                                <div className="company-wrap">
                                    <div className="thumb">
                                        <a href="#">
                                            <img src="images/company/company-logo-2.png" className="img-fluid" alt="" />
                                        </a>
                                    </div>
                                    <div className="body">
                                        <h4><a href="employer-details.html">Orion Ltd.</a></h4>
                                        <span>Sacramento, California</span>
                                        <a href="job-listing.html" className="button">2 Open Positions</a>
                                    </div>
                                </div>
                                <div className="company-wrap">
                                    <div className="thumb">
                                        <a href="#">
                                            <img src="images/company/company-logo-3.png" className="img-fluid" alt="" />
                                        </a>
                                    </div>
                                    <div className="body">
                                        <h4><a href="employer-details.html">Realhouse</a></h4>
                                        <span>London, United Kingdom</span>
                                        <a href="job-listing.html" className="button">4 Open Positions</a>
                                    </div>
                                </div>
                                <div className="company-wrap">
                                    <div className="thumb">
                                        <a href="#">
                                            <img src="images/company/company-logo-4.png" className="img-fluid" alt="" />
                                        </a>
                                    </div>
                                    <div className="body">
                                        <h4><a href="employer-details.html">BioPro</a></h4>
                                        <span>Ajax, Ontarioland</span>
                                        <a href="job-listing.html" className="button">1 Open Positions</a>
                                    </div>
                                </div>
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
                                <div className="company-wrap">
                                    <div className="thumb">
                                        <a href="#">
                                            <img src="images/company/company-logo-2.png" className="img-fluid" alt="" />
                                        </a>
                                    </div>
                                    <div className="body">
                                        <h4><a href="employer-details.html">Orion Ltd.</a></h4>
                                        <span>Sacramento, California</span>
                                        <a href="job-listing.html" className="button">2 Open Positions</a>
                                    </div>
                                </div>
                                <div className="company-wrap">
                                    <div className="thumb">
                                        <a href="#">
                                            <img src="images/company/company-logo-3.png" className="img-fluid" alt="" />
                                        </a>
                                    </div>
                                    <div className="body">
                                        <h4><a href="employer-details.html">Realhouse</a></h4>
                                        <span>London, United Kingdom</span>
                                        <a href="job-listing.html" className="button">4 Open Positions</a>
                                    </div>
                                </div>
                                <div className="company-wrap">
                                    <div className="thumb">
                                        <a href="#">
                                            <img src="images/company/company-logo-4.png" className="img-fluid" alt="" />
                                        </a>
                                    </div>
                                    <div className="body">
                                        <h4><a href="employer-details.html">BioPro</a></h4>
                                        <span>Ajax, Ontarioland</span>
                                        <a href="job-listing.html" className="button">1 Open Positions</a>
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

export default TopCompany;