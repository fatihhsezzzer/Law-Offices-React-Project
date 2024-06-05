import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar-area fixed-top">
            <div className="mobile-nav">
                <Link to="/" className="logo">
                    <img src="assets/img/logo.png" alt="Logo" />
                </Link>
            </div>

            <div className="main-nav">
                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <Link className="navbar-brand" to="/">
                            <img src="assets/img/logo.png" alt="Logo" />
                        </Link>
                        <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Home</Link>

                                </li>
                                <li className="nav-item">
                                    <Link to="/about" className="nav-link">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact" className="nav-link">Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/faq" className="nav-link">FAQ</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/testimonial" className="nav-link">Testimonial</Link>
                                </li>
                            </ul>
                            <div className="side-nav">
                                <Link to="/appointment">Get Appointment</Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
