import React from 'react';
import { Link } from 'react-router-dom';

function Banner() {
    return (
        <div className="banner-area banner-img-one">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="banner-item">
                                    <div className="banner-left">
                                        <h1>Attorneys Fight For Your Justice</h1>
                                        <p>
                                            Our Squad of Professional Attorneys is devoted to your
                                            Progress & to achieve your Goal. Our Law Firm supports our
                                            clients for various versatile cases and to get justice.
                                        </p>
                                        <Link to="#" className="banner-link">
                                            FREE CONSULTATION
                                            <i className="icofont-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="banner-item">
                                    <div className="banner-right">
                                        <img
                                            className="banner-animation"
                                            src="assets/img/home-one/3.png"
                                            alt="Banner"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="banner-bottom">
                    <ul>
                        <li>
                            <i className="flaticon-leader"></i>
                        </li>
                        <li>
                            <span>100% Legal</span>
                            <p>Govt Approved</p>
                            <img src="assets/img/home-one/9.png" alt="Shape" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Banner;
