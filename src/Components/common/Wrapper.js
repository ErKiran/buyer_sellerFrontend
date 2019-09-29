import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authAction';
import Footer from '../common/Footer';
import MainHeading from './MainHeading';
import StateLessHeader from './StateLessHeader';

class Wrapper extends Component {
    render() {
        if (this.props.auth.isAuthenticated) {
            return (
                <div>
                    <MainHeading />
                    {this.props.children}
                    <Footer />
                </div>
            );
        } else {
            return (
                <div>
                    <StateLessHeader />
                    {this.props.children}
                    <Footer />
                </div>
            )
        }
    }
}


const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Wrapper);
