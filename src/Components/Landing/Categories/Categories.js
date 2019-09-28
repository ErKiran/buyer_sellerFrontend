import React from 'react';
import SingleItem from './SingleItem';

const Categories = () => {
    return (
        <div>
            <div className="padding-bottom-60">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="categories">
                                <SingleItem
                                    icon="fas fa-chart-bar"
                                    subject="Accounting / Finance"
                                    count="233"
                                />
                                <SingleItem
                                    icon="fas fa-graduation-cap"
                                    subject="Education"
                                    count="45"
                                />
                                <SingleItem
                                    icon="fas fa-heartbeat"
                                    subject="Health Care"
                                    count="87"
                                />
                                <SingleItem
                                    icon="fas fa-building"
                                    subject="Engineer & Architects"
                                    count="367"
                                />
                                <SingleItem
                                    icon="fas fa-feather-alt"
                                    subject="Design & Creative"
                                    count="147"
                                />
                                <SingleItem
                                    icon="fas fa-chart-pie"
                                    subject="Marketing & Sales"
                                    count="41"
                                />
                                <SingleItem
                                    icon="fa fa-black-tie"
                                    subject="Garments / Textile"
                                    count="126"
                                />
                                <SingleItem
                                    icon="fa fa-life-ring"
                                    subject="Customer Support"
                                    count="161"
                                />
                                <SingleItem
                                    icon="fa fa-headphones"
                                    subject="Digital Media"
                                    count="69"
                                />
                                <SingleItem
                                    icon="fa fa-wifi"
                                    subject="Telecommunication"
                                    count="92"
                                />
                                <span className="vr vr-1"></span>
                                <span className="vr vr-2"></span>
                                <span className="vr vr-3"></span>
                                <span className="vr vr-4"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Categories;