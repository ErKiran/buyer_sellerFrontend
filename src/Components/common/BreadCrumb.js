import React from 'react';
import { Link } from 'react-router-dom';

const BreadCrumb = (props) => {
    return (
        <div className="alice-bg-terms padding-top-70 padding-bottom-70">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="breadcrumb-area">
                            <h1>{props.title}</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">{props.title}</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="breadcrumb-form">
                            <form action="#">
                                <input type="text" placeholder="Enter Keywords" />
                                <button><i className="fa-search"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BreadCrumb;