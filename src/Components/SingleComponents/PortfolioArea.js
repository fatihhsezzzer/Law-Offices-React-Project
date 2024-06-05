import React from 'react';
import { Link } from 'react-router-dom';

function PortfolioArea() {
    return (
        <section className="portfolio-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <span>PORTFOLIO</span>
                    <h2>Check Out Our Popular Case Studies.</h2>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-lg-4">
                        <div className="portfolio-item">
                            <img src="assets/img/home-one/portfolio/1.jpg" alt="Portfolio" />
                            <div className="portfolio-inner">
                                <span>Crime</span>
                                <h3>
                                    <Link to="/case-study-details/murder-case">Critical Murder Case</Link>
                                </h3>
                                <p>15 Feb 2021</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <div className="portfolio-item">
                            <img src="assets/img/home-one/portfolio/2.jpg" alt="Portfolio" />
                            <div className="portfolio-inner">
                                <span>Rights</span>
                                <h3>
                                    <Link to="/case-study-details/children-rights">Children Rights</Link>
                                </h3>
                                <p>16 Feb 2021</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 offset-sm-3 offset-lg-0 col-lg-4">
                        <div className="portfolio-item">
                            <img src="assets/img/home-one/portfolio/3.jpg" alt="Portfolio" />
                            <div className="portfolio-inner">
                                <span>Finance</span>
                                <h3>
                                    <Link to="/case-study-details/money-laundering">Money Laundering</Link>
                                </h3>
                                <p>17 Feb 2021</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <Link to="/case-study" className="cmn-btn">See More</Link>
                </div>
            </div>
        </section>
    );
}

export default PortfolioArea;
