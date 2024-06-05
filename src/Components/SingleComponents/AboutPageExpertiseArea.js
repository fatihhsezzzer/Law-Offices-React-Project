import React from 'react';

const expertiseData = [
    {
        icon: "flaticon-experience",
        title: "Experience",
        description: "Lyzo teams are exceptionally skilled, acknowledge their client’s condition & help them to achieve their target.",
        imgSrc: "assets/img/home-one/11.png",
        animationDelay: ".3s"
    },
    {
        icon: "flaticon-lawyer",
        title: "Skilled Attorney",
        description: "Our attorneys are innovative and knowledgeable and help clients pursue a vast number of solutions to succeed.",
        imgSrc: "assets/img/home-one/11.png",
        animationDelay: ".4s"
    },
    {
        icon: "flaticon-balance",
        title: "Legal Process",
        description: "We maintain all valid papers and paperwork and continue to meet our destination legally.",
        imgSrc: "assets/img/home-one/11.png",
        animationDelay: ".5s"
    },
    {
        icon: "flaticon-money-bag",
        title: "Low Cost",
        description: "Team of Lyzo are exceptionally skilled, realize their client’s condition, help them to achieve their motive.",
        imgSrc: "assets/img/home-one/11.png",
        animationDelay: ".3s"
    },
    {
        icon: "flaticon-time",
        title: "Good Performance",
        description: "Our attorneys are creative and knowledgeable and support clients by finding numerous solutions to win.",
        imgSrc: "assets/img/home-one/11.png",
        animationDelay: ".4s"
    },
    {
        icon: "flaticon-conversation",
        title: "Quick Service",
        description: "We manage all valid papers and paperwork and continue to enter our path lawfully.",
        imgSrc: "assets/img/home-one/11.png",
        animationDelay: ".5s"
    }
];

function ExpertiseArea() {
    return (
        <section className="expertise-area expertise-area-two pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span>OUR EXPERTISE</span>
                    <h2>Law Firm Devoted To Our Clients</h2>
                </div>
                <div className="row align-items-center">
                    {expertiseData.map((item, index) => (
                        <div key={index} className={`col-lg-6 ${index % 2 === 0 ? '' : 'offset-lg-6'}`}>
                            <div className="expertise-item">
                                <ul>
                                    <li className="wow fadeInUp" style={{ animationDelay: item.animationDelay }}>
                                        <div className="expertise-icon">
                                            <i className={item.icon}></i>
                                            <img src={item.imgSrc} alt="Shape" />
                                        </div>
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ExpertiseArea;
