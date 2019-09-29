import React, { Component } from 'react';
import SelectListGroup from '../common/SelectListGroup';

class SearchListing extends Component {
    render() {
        const opts = ['Location', 'A', 'B']
        return (
            <div className="searchAndFilter-wrapper-2">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="searchAndFilter-block">
                                <div className="searchAndFilter searchAndFilter-2">
                                    <form action="#" className="search-form">
                                        <input type="text" placeholder="Enter Keywords" />
                                        <SelectListGroup
                                            placeholder="State*"
                                            name="state"
                                            type="text"
                                            info="Choose the state"
                                            className="selectpicker"
                                            id="search-location"
                                            options={opts}
                                        />

                                        <select className="selectpicker" id="search-location">
                                            <option value="" defaultValue>Location</option>
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
                                            <option value="" defaultValue>Category</option>
                                            <option value="real-state">Real State</option>
                                            <option value="vehicales">Vehicales</option>
                                            <option value="electronics">Electronics</option>
                                            <option value="beauty">Beauty</option>
                                            <option value="furnitures">Furnitures</option>
                                        </select>
                                        <button className="button"><i className="fas fa-search" />Search Consultant</button>
                                    </form>
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