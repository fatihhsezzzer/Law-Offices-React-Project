import React, { useState } from 'react';

function AppointmentForm() {
    // Form verileri için local state tanımlaması
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        msgSubject: '',
        message: ''
    });

    // Input alanlarındaki değişiklikleri işleyen handler fonksiyonu
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Form gönderildiğinde çalışacak fonksiyon
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted: ", formData);
        // Burada form verilerini bir API'ye göndermek için ajax isteği yapabilirsiniz
    };

    return (
        <div className="contact-form contact-form-two contact-form-three">
            <div className="container">
                <div className="contact-wrap">
                    <form id="contactForm" onSubmit={handleSubmit}>
                        <h2>Get An Appointment</h2>
                        <div className="row">
                            {Object.keys(formData).map((key) => (
                                key !== 'message' ? (
                                    <div key={key} className="col-sm-6 col-lg-6">
                                        <div className="form-group">
                                            <input
                                                type={key === 'email' ? 'email' : 'text'}
                                                name={key}
                                                id={key}
                                                className="form-control"
                                                required
                                                data-error={`Please enter your ${key.replace('_', ' ')}`}
                                                placeholder={`Your ${key.charAt(0).toUpperCase() + key.slice(1).replace('_', ' ')}`}
                                                value={formData[key]}
                                                onChange={handleChange}
                                            />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                ) : (
                                    <div key={key} className="col-md-12 col-lg-12">
                                        <div className="form-group">
                                            <textarea
                                                name={key}
                                                className="form-control"
                                                id={key}
                                                cols="30"
                                                rows="8"
                                                required
                                                data-error="Write your message"
                                                placeholder="Case Description"
                                                value={formData[key]}
                                                onChange={handleChange}
                                            ></textarea>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                )
                            ))}
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
        </div>
    );
}

export default AppointmentForm;
