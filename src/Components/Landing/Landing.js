import React, { Component } from 'react';
import Header from './Header';
import SearchListing from './SearchListing';
import Banner from './Banner';
import TopCompany from './TopCompany';
import UserTypes from './UserTypes';
import NewsLetter from './NewsLetter';
import Footer from '../common/Footer';
import Categories from './Categories/Categories';

class Landing extends Component {
    render() {
        return (
            <div>
                <Header />
                <Banner />
                <SearchListing />
                <Categories />
                <UserTypes />
                <TopCompany />
                <NewsLetter />
                <Footer />
            </div>
        );
    }
}

export default Landing;