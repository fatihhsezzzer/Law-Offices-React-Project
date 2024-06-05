import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ContactPageForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        msgSubject: '',
        message: '',
        agreeToTerms: false
    });

    const handleChange = (e) => {
        const { name, type, checked, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle the submission of the form data to an API, etc.
        console.log(formData);
    };

    return (
        <div className="contact-form contact-form-four pb-100">
            <div className="loaction-area">
                <div className="container">
                    <div className="row location-bg">
                        <LocationItem title="Location" icon="flaticon-pin" details={["2108-267 Road Quadra, Toronto, Victoria Canada"]} />
                        <LocationItem title="Phone" icon="flaticon-call" details={["+07 5554 3332 322", "+05 5596 2435 736"]} />
                        <LocationItem title="Email" icon="flaticon-email" details={["info@example.com", "contact@example.com"]} />
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <form id="contactForm" onSubmit={handleSubmit}>
                    <div className="row contact-wrap">
                        {["name", "email", "phone_number", "msg_subject"].map(field => (
                            <div key={field} className="col-sm-6 col-lg-6">
                                <div className="form-group">
                                    <input
                                        type={field === "email" ? "email" : "text"}
                                        name={field}
                                        id={field}
                                        className="form-control"
                                        required
                                        placeholder={`Your ${field.replace('_', ' ').toUpperCase()}`}
                                        value={formData[field]}
                                        onChange={handleChange}
                                    />
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                        ))}
                        <div className="col-md-12 col-lg-12">
                            <div className="form-group">
                                <textarea
                                    name="message"
                                    className="form-control"
                                    id="message"
                                    cols="30"
                                    rows="8"
                                    required
                                    placeholder="Case Description"
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-12">
                            <div className="form-group form-check agree-label">
                                <input
                                    name="agreeToTerms"
                                    className="form-check-input"
                                    type="checkbox"
                                    id="gridCheck"
                                    required
                                    checked={formData.agreeToTerms}
                                    onChange={handleChange}
                                />
                                <label className="form-check-label" htmlFor="gridCheck">
                                    Accept <Link to="/terms-condition">Terms & Conditions</Link> and <Link to="/privacy-policy">Privacy Policy.</Link>
                                </label>
                                <div className="help-block with-errors gridCheck-error"></div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-12">
                            <div className="text-center">
                                <button type="submit" className="contact-btn">Submit Case</button>
                            </div>
                            <div id="msgSubmit" className="h3 text-center hidden"></div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

function LocationItem({ title, icon, details }) {
    return (
        <div className="col-sm-6 col-lg-4">
            <div className="location-item">
                <div className="location-icon">
                    <i className={icon}></i>
                </div>
                <h3>{title}</h3>
                <ul>
                    {details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ContactPageForm;
