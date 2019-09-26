import React from 'react';
import DashboardMenu from './DashboardMenu';

const DashboardWrapper = (props) => {
    return (
        <div className="alice-bg section-padding-bottom">
            <div className="container no-gliters">
                <div className="row no-gliters">
                    <div className="col">
                        <div className="dashboard-container">
                            <DashboardMenu />
                            <div className="dashboard-content-wrapper">
                                {props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardWrapper;