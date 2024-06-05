import React from 'react';
import { Link } from 'react-router-dom';

function HelpArea() {
    return (
        <div className="help-area pb-70">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="help-item help-left">
                            <img src="assets/img/home-one/5.jpg" alt="Help" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="help-item">
                            <div className="help-right">
                                <h2>We Provide Qualified Attorneys For Your Assistance</h2>
                                <p>
                                    The Whole Team of Lyzo Law Firm brings a strong and fearless
                                    attitude to all the clients they assist. And, to make sure
                                    that you win, our team will provide you with High-quality
                                    service.
                                </p>
                                <div className="help-inner-left">
                                    <ul>
                                        <li>
                                            <i className="flaticon-checkmark"></i>
                                            Browse Our Website
                                        </li>
                                        <li>
                                            <i className="flaticon-checkmark"></i>
                                            Choose Services
                                        </li>
                                    </ul>
                                </div>
                                <div className="help-inner-right">
                                    <ul>
                                        <li>
                                            <i className="flaticon-checkmark"></i>
                                            Quick Reply
                                        </li>
                                        <li>
                                            <i className="flaticon-checkmark"></i>
                                            Best Performances
                                        </li>
                                    </ul>
                                </div>
                                <div className="help-signature">
                                    <img src="assets/img/home-one/4.png" alt="Signature" />
                                </div>
                                <Link to="/practice" className="cmn-btn">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="help-shape">
                    <img src="assets/img/home-one/6.png" alt="Shape" />
                </div>
            </div>
        </div>
    );
}

export default HelpArea;
