import React, { Component } from 'react';

class SearchListing extends Component {
    render() {
        return (
            <div>
                <div classname="searchAndFilter-wrapper " style={{ paddingTop: '300px' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="searchAndFilter-block">
                                    <div className="searchAndFilter">
                                        <form action="#" className="search-form">
                                            <input type="text" placeholder="Enter Keywords" />
                                            <select className="selectpicker" id="search-location">
                                                <option value="" selected>Location</option>
                                                <option value="california">California</option>
                                                <option value="las-vegas">Las Vegas</option>
                                                <option value="new-work">New Work</option>
                                                <option value="carolina">Carolina</option>
                                                <option value="chicago">Chicago</option>
                                                <option value="silicon-vally">Silicon Vally</option>
                                                <option value="washington">Washington DC</option>
                                                <option value="neveda">Neveda</option>
                                            </select>
                                            <select className="selectpicker" id="search-category">
                                                <option value="" selected>Category</option>
                                                <option value="real-state">Real State</option>
                                                <option value="vehicales">Vehicales</option>
                                                <option value="electronics">Electronics</option>
                                                <option value="beauty">Beauty</option>
                                                <option value="furnitures">Furnitures</option>
                                            </select>
                                            <button className="button primary-bg"><i className="fas fa-search"></i>Search Consultant</button>
                                        </form>
                                        <div className="filter-categories">
                                            <h4>Consultant Category</h4>
                                            <ul>
                                                <li><a href="job-listing.html"><i data-feather="bar-chart-2"></i>Accounting / Finance </a></li>
                                                <li><a href="job-listing.html"><i data-feather="edit-3"></i>Education </a></li>
                                                <li><a href="job-listing.html"><i data-feather="feather"></i>Design & Creative </a></li>
                                                <li><a href="job-listing.html"><i data-feather="briefcase"></i>Health Care </a></li>
                                                <li><a href="job-listing.html"><i data-feather="package"></i>Engineer & Architects</a></li>
                                                <li><a href="job-listing.html"><i data-feather="pie-chart"></i>Marketing & Sales </a></li>
                                                <li><a href="job-listing.html"><i data-feather="command"></i>Garments / Textile </a></li>
                                                <li><a href="job-listing.html"><i data-feather="globe"></i>Customer Support</a></li>
                                                <li><a href="job-listing.html"><i data-feather="headphones"></i>Digital Media </a></li>
                                                <li><a href="job-listing.html"><i data-feather="radio"></i>Telecommunication </a></li>
                                            </ul>
                                        </div>
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

export default SearchListing;