import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

function ExpertiseArea() {
    return (
        <section className="expertise-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="section-title text-left">
                            <span>OUR EXPERTISE</span>
                            <h2>Law Firm Devoted To Our Clients</h2>
                        </div>
                        <div className="expertise-item">
                            <ul>
                                <AnimationOnScroll animateIn="animate__fadeInUp" delay={300} animateOnce={true}>
                                    <li>
                                        <div className="expertise-icon">
                                            <i className="flaticon-experience"></i>
                                            <img src="assets/img/home-one/11.png" alt="Shape" />
                                        </div>
                                        <h3>Experience</h3>
                                        <p>
                                            Squads of Lyzo are incredibly professional and understand
                                            the situation of their clients and encourage them until
                                            obtaining victory
                                        </p>
                                    </li>
                                </AnimationOnScroll>
                                <AnimationOnScroll animateIn="animate__fadeInUp" delay={400} animateOnce={true}>
                                    <li>
                                        <div className="expertise-icon">
                                            <i className="flaticon-lawyer"></i>
                                            <img src="assets/img/home-one/11.png" alt="Shape" />
                                        </div>
                                        <h3>Skilled Attorney</h3>
                                        <p>
                                            Our Attorneys are creative and skilled and it helps them to
                                            find a huge variety of solution to win
                                        </p>
                                    </li>
                                </AnimationOnScroll>
                                <AnimationOnScroll animateIn="animate__fadeInUp" delay={500} animateOnce={true}>
                                    <li>
                                        <div className="expertise-icon">
                                            <i className="flaticon-balance"></i>
                                            <img src="assets/img/home-one/11.png" alt="Shape" />
                                        </div>
                                        <h3>Legal Proces</h3>
                                        <p>
                                            We maintain all the legal documents and papers and start to
                                            reach our destination in a legal way
                                        </p>
                                    </li>
                                </AnimationOnScroll>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="expertise-image">
                            <img src="assets/img/home-one/10.png" alt="Expertise" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ExpertiseArea;
