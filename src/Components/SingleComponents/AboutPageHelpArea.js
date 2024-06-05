import React from 'react';

// Veri yapısını tanımlayın
const helpSections = [
    {
        id: 1,
        title: "We Provide Professional Attorneys to Assist You",
        content: [
            "We are qualified for the success of our client & as a professional law firm. So these professional attorneys are still here at your side with kindness, integrity, and loyalty to help with the worst moments of your life.",
            "We are qualified for the success of our client & as a professional law firm. So these professional attorneys are still here at your side with kindness."
        ],
        actions: [
            { icon: "flaticon-checkmark", text: "Browse Our Website" },
            { icon: "flaticon-checkmark", text: "Choose Services" },
            { icon: "flaticon-checkmark", text: "Quick Reply" },
            { icon: "flaticon-checkmark", text: "Best Performances" }
        ],
        signatureImg: "assets/img/home-one/4.png",
        founder: "Barrister Babatunde Smithi",
        role: "Founder and CEO",
        imageSrc: "assets/img/home-two/5.jpg"
    },
    {
        id: 2,
        title: "Our Attorneys Always Provide The Excellent Service",
        content: [
            "Teams of Intelligent & Professional Attorneys of Lyzo are always prepared to make you triumph. We always try our best to make our clients happy."
        ],
        actions: [
            { icon: "flaticon-checkmark", text: "On Time Response" },
            { icon: "flaticon-checkmark", text: "Legal Way" },
            { icon: "flaticon-checkmark", text: "Legal Services" },
            { icon: "flaticon-checkmark", text: "Honest Work" }
        ],
        learnMoreLink: "practice.html",
        imageSrc: "assets/img/home-two/6.jpg"
    }
];

function HelpArea() {
    return (
        <div className="help-area help-area-two help-area-four pb-70">
            <div className="container-fluid">
                {helpSections.map(section => (
                    <HelpSection key={section.id} section={section} />
                ))}
                <div className="help-shape">
                    <img src="assets/img/home-one/6.png" alt="Shape" />
                </div>
            </div>
        </div>
    );
}

function HelpSection({ section }) {
    return (
        <div className="row align-items-center help-wrap">
            <div className="col-lg-6">
                <div className="help-item help-left">
                    <img src={section.imageSrc} alt="Help" />
                </div>
            </div>
            <div className="col-lg-6">
                <div className="help-item">
                    <div className="help-right">
                        <h2>{section.title}</h2>
                        {section.content.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                        <div className="help-inner-left">
                            <ul>
                                {section.actions.map((action, index) => (
                                    <li key={index}><i className={action.icon}></i>{action.text}</li>
                                ))}
                            </ul>
                        </div>
                        {section.signatureImg && (
                            <div className="help-signature">
                                <img src={section.signatureImg} alt="Signature" />
                                <h3>{section.founder}</h3>
                                <span>{section.role}</span>
                            </div>
                        )}
                        {section.learnMoreLink && (
                            <a className="cmn-btn" href={section.learnMoreLink}>Learn More</a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HelpArea;
