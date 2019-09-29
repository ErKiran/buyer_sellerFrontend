import React, { Component } from 'react';
import SearchListing from './SearchListing';
import Banner from './Banner';
import TopCompany from './TopCompany';
import UserTypes from './UserTypes';
import NewsLetter from './NewsLetter';
import Categories from './Categories/Categories';


class Landing extends Component {
    render() {
        return (
            <div>
                <Banner />
                <SearchListing />
                <Categories />
                <UserTypes />
                <TopCompany />
                <NewsLetter />
            </div>
        );
    }
}

export default Landing;