import React, { useState } from 'react';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        msgSubject: '',
        message: ''
    });

    const handleChange = event => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log('Form data submitted: ', formData);
        // Form verilerini burada işleyebilirsiniz, örneğin bir API'ye göndermek gibi
    };

    return (
        <div className="contact-form pb-100">
            <div className="location-area">
                <div className="container">
                    <div className="row location-bg">
                        <LocationItem
                            icon="flaticon-pin"
                            title="Location"
                            details={["2108-267 Road Quadra,Toronto, Victoria Canada"]}
                            linkText="View on Google map"
                        />
                        <LocationItem
                            icon="flaticon-email"
                            title="Email"
                            details={["info@example.com", "contact@example.com"]} // E-posta adreslerinizi doğrudan buraya yazın
                        />
                        <LocationItem
                            icon="flaticon-call"
                            title="Phone"
                            details={["+07 5554 3332 322", "+05 5596 2435 736"]}
                        />
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <form id="contactForm" onSubmit={handleSubmit}>
                    <div className="row contact-wrap">
                        <TextInput
                            name="name"
                            placeholder="Your Full Name"
                            required={true}
                            value={formData.name}
                            handleChange={handleChange}
                        />
                        <TextInput
                            name="email"
                            type="email"
                            placeholder="Your Email"
                            required={true}
                            value={formData.email}
                            handleChange={handleChange}
                        />
                        <TextInput
                            name="phone_number"
                            placeholder="Your Phone"
                            required={true}
                            value={formData.phoneNumber}
                            handleChange={handleChange}
                        />
                        <TextInput
                            name="msg_subject"
                            placeholder="Subject"
                            required={true}
                            value={formData.msgSubject}
                            handleChange={handleChange}
                        />
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

function LocationItem({ icon, title, details, linkText }) {
    return (
        <div className="col-sm-6 col-lg-4">
            <div className="location-item">
                <div className="location-icon">
                    <i className={icon}></i>
                    <img src="assets/img/home-one/12.png" alt="Shape" />
                </div>
                <h3>{title}</h3>
                <ul>
                    {details.map(detail => (
                        <li key={detail}>{detail}</li>
                    ))}
                </ul>
                <a className="location-link" href="#">{linkText}</a>
            </div>
        </div>
    );
}

function TextInput({ name, type = "text", placeholder, required, value, handleChange }) {
    return (
        <div className="col-sm-6 col-lg-6">
            <div className="form-group">
                <input
                    type={type}
                    name={name}
                    id={name}
                    className="form-control"
                    required={required}
                    data-error="Please enter your information"
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                />
                <div className="help-block with-errors"></div>
            </div>
        </div>
    );
}

export default ContactForm;
