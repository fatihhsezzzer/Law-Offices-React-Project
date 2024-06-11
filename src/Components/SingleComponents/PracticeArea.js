import React from 'react';
import { Link } from 'react-router-dom';

function PracticeArea() {
    return (
        <section className="practice-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span>HOW CAN WE HELP YOU</span>
                    <h2>Our Legal Practices Areas</h2>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-lg-4">
                        <div className="practice-item">
                            <div className="practice-icon">
                                <i className="flaticon-law"></i>
                            </div>
                            <h3>Civil Law</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quisquam, expedita excepturi adipisci</p>
                            <Link to="/practice-details/civil-law">Read More</Link>
                            <img className="practice-shape-one" src="assets/img/home-one/7.png" alt="Shape" />
                            <img className="practice-shape-two" src="assets/img/home-one/8.png" alt="Shape" />
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <div className="practice-item">
                            <div className="practice-icon">
                                <i className="flaticon-family"></i>
                            </div>
                            <h3>Family Law</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quisquam, expedita excepturi adipisci</p>
                            <Link to="/practice-details/:practiceName">Read More</Link>
                            <img className="practice-shape-one" src="assets/img/home-one/7.png" alt="Shape" />
                            <img className="practice-shape-two" src="assets/img/home-one/8.png" alt="Shape" />
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <div className="practice-item">
                            <div className="practice-icon">
                                <i className="flaticon-inheritance"></i>
                            </div>
                            <h3>Business Law</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quisquam, expedita excepturi adipisci</p>
                            <Link to="/practice-details/business-law">Read More</Link>
                            <img className="practice-shape-one" src="assets/img/home-one/7.png" alt="Shape" />
                            <img className="practice-shape-two" src="assets/img/home-one/8.png" alt="Shape" />
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <div className="practice-item">
                            <div className="practice-icon">
                                <i className="flaticon-mortarboard"></i>
                            </div>
                            <h3>Education Law</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quisquam, expedita excepturi adipisci</p>
                            <Link to="/practice-details/education-law">Read More</Link>
                            <img className="practice-shape-one" src="assets/img/home-one/7.png" alt="Shape" />
                            <img className="practice-shape-two" src="assets/img/home-one/8.png" alt="Shape" />
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <div className="practice-item">
                            <div className="practice-icon">
                                <i className="flaticon-auction"></i>
                            </div>
                            <h3>Criminal Law</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quisquam, expedita excepturi adipisci</p>
                            <Link to="/practice-details/criminal-law">Read More</Link>
                            <img className="practice-shape-one" src="assets/img/home-one/7.png" alt="Shape" />
                            <img className="practice-shape-two" src="assets/img/home-one/8.png" alt="Shape" />
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <div className="practice-item">
                            <div className="practice-icon">
                                <i className="flaticon-vulnerability"></i>
                            </div>
                            <h3>Cyber Law</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quisquam, expedita excepturi adipisci</p>
                            <Link to="/practice-details/cyber-law">Read More</Link>
                            <img className="practice-shape-one" src="assets/img/home-one/7.png" alt="Shape" />
                            <img className="practice-shape-two" src="assets/img/home-one/8.png" alt="Shape" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PracticeArea;
