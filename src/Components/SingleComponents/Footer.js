import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <div className="newsletter-area">
                <div className="container">
                    <img src="assets/img/home-one/newsletter.png" alt="Shape" />
                    <h2>Subscribe Newsletter</h2>
                    <form className="newsletter-form" data-toggle="validator">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter Your Email"
                            name="EMAIL"
                            required
                            autoComplete="off"
                        />
                        <button className="btn contact-btn" type="submit">Subscribe</button>
                        <div id="validator-newsletter" className="form-result"></div>
                    </form>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4">
                        <div className="footer-item">
                            <div className="footer-logo">
                                <Link to="/">
                                    <img src="assets/img/logo.png" alt="Logo" />
                                </Link>
                                <p>
                                    Our Squad of Attorneys are always here to provide you the best
                                    and efficient service. Still, if you want to know more about
                                    us and our firm, you can connect with us.
                                </p>
                                <ul>
                                    <li><a href="https://www.youtube.com/" target="_blank"><i className="icofont-youtube-play"></i></a></li>
                                    <li><a href="https://www.facebook.com/" target="_blank"><i className="icofont-facebook"></i></a></li>
                                    <li><a href="https://www.instagram.com/" target="_blank"><i className="icofont-instagram"></i></a></li>
                                    <li><a href="https://www.twitter.com/" target="_blank"><i className="icofont-twitter"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="footer-item">
                            <div className="footer-service">
                                <h3>Services</h3>
                                <ul>
                                    <li><Link to="/practice-details/family-law">Family Law</Link></li>
                                    <li><Link to="/practice-details/education-law">Education Law</Link></li>
                                    <li><Link to="/practice-details/civil-law">Civil Law</Link></li>
                                    <li><Link to="/practice-details/criminal-law">Criminal Law</Link></li>
                                    <li><Link to="/practice-details/business-law">Business Law</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-2">
                        <div className="footer-item">
                            <div className="footer-service">
                                <h3>Quick Links</h3>
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about">About Us</Link></li>
                                    <li><Link to="/blog">Blogs</Link></li>
                                    <li><Link to="/team">Team</Link></li>
                                    <li><Link to="/testimonial">Testimonial</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="footer-item">
                            <div className="footer-find">
                                <h3>Find Us</h3>
                                <ul>
                                    <li><i className="icofont-location-pin"></i>28/A Street, New York City</li>
                                    <li><a href="tel:+880123456789"><i className="icofont-ui-call"></i>+88 0123 456 789</a></li>
                                    <li><a href="mailto:info@example.com"><i className="icofont-at"></i>[email&#160;protected]</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyright-area">
                <div className="row">
                    <div className="col-sm-7 col-lg-6">
                        <div className="copyright-item">
                            <p>
                                Copyright © {new Date().getFullYear()} Lyzo. Designed By
                                <a href="https://hibootstrap.com/" target="_blank"> HiBootstrap</a>
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-5 col-lg-6">
                        <div className="copyright-item copyright-right">
                            <Link to="/terms-conditions">Terms & Conditions</Link>
                            <span> - </span>
                            <Link to="/privacy-policy">Privacy Policy</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
