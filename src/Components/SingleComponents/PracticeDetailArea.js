import React from 'react';

const PracticeDetails = () => {
    return (
        <div className="practice-details-area pt-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="practice-details-item">
                            <div className="practice-details-content">
                                <div className="section-title text-left">
                                    <h2>Criminal Law</h2>
                                </div>
                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                <p>Risus commodo viverra maecenas accumsan lacus vel facilisis. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                <ul>
                                    <li><span>Retribution –</span> Criminals ought to Be Punished in some way.</li>
                                    <li><span>Deterrence –</span> Individual deterrence is aimed toward the specific offender.</li>
                                    <li><span>Incapacitation –</span> Designed simply to keep criminals away from society.</li>
                                    <li><span>Rehabilitation –</span> Aims at transforming an offender into a valuable member of society.</li>
                                </ul>
                                <p>Risus commodo viverra maecenas accumsan lacus vel facilisis. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                            </div>
                        </div>
                        <div className="practice-details-case">
                            <div className="row">
                                {/* Example for one portfolio item, repeat similarly for others */}
                                <div className="col-sm-6 col-lg-6">
                                    <div className="portfolio-item wow fadeInUp" data-wow-delay=".3s">
                                        <img src="assets/img/home-one/portfolio/1.jpg" alt="Portfolio" />
                                        <div className="portfolio-inner">
                                            <span>Crime</span>
                                            <h3><a href="case-study-details.html">Critical Murder Case</a></h3>
                                            <p>15 Feb 2021</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="practice-details-item">
                            <div className="blog-details-category">
                                <ul>
                                    <li><a href="practice-details.html">Criminal Law<i className="icofont-arrow-right"></i></a></li>
                                    {/* More items */}
                                </ul>
                            </div>
                            <div className="practice-details-contact">
                                <h3>Contact Info</h3>
                                <ul>
                                    <li><i className="flaticon-call"></i><a href="tel:+07554332322">Call : +07 554 332 322</a></li>
                                    <li><i className="flaticon-email"></i><a href="mailto:[email protected]">[email protected]</a></li>
                                    <li><i className="flaticon-pin"></i>4th Floor, 408 No Chamber</li>
                                </ul>
                            </div>
                            <div className="practice-details-brochures">
                                <h3>Brochures</h3>
                                <p>Risus is commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                <a className="cmn-btn" href="#"><i className="flaticon-download"></i>Download</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="help-shape">
                <img src="assets/img/home-one/6.png" alt="Shape" />
            </div>
        </div>
    );
}

export default PracticeDetails;
