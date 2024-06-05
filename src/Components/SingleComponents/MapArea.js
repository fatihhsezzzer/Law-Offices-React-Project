import React from 'react';

function MapArea() {
    return (
        <div className="map-area">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1587550284019!5m2!1sen!2sbd"
                frameBorder="0"
                style={{ border: 0, width: '100%', height: '450px' }} // Stil burada doğrudan tanımlanabilir veya CSS dosyasından çekilebilir
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
            ></iframe>
        </div>
    );
}

export default MapArea;
