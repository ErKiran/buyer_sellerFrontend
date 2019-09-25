import React, { Component } from 'react';
import Header from './Header';
import SearchListing from './SearchListing';
import TopCompany from './TopCompany';
import UserTypes from './UserTypes';
import NewsLetter from './NewsLetter';
import Footer from '../common/Footer';

class Landing extends Component {
    render() {
        return (
            <div>
                <Header />
                <SearchListing />
                <TopCompany />
                <UserTypes />
                <NewsLetter />
                <Footer />
            </div>
        );
    }
}

export default Landing;