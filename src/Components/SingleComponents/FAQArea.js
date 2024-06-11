import React, { useState } from 'react';

function FaqItem({ question, answer, delay }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <li className={`wow fadeInUp ${isOpen ? 'open' : ''}`} data-wow-delay={`${delay}s`} onClick={toggle}>
            <a>{question}</a>
            <p style={{ display: isOpen ? 'block' : 'none' }}>{answer}</p>
        </li>
    );
}

function FaqSection({ title, faqs }) {
    return (
        <div className="faq-area pt-100">
            <div className="container">
                <div className="row faq-wrap">
                    <div className="col-lg-12">
                        <div className="faq-head">
                            <h2>{title}</h2>
                        </div>
                        <div className="faq-item">
                            <ul className="accordion">
                                {faqs.map((faq, index) => (
                                    <FaqItem key={index} question={faq.question} answer={faq.answer} delay={0.3 + index * 0.1} />
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Örnek kullanım:
const criminalLawFaqs = [
    { question: "What is criminal law?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit..." },
    { question: "What is the purpose of a search warrant?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit..." },
    // Diğer sorular...
];
const deneme = [
    { question: "What is criminal law?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit..." },
    { question: "What is the purpose of a search warrant?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit..." },
    // Diğer sorular...
];
function App() {
    return <FaqSection title="Criminal Law" faqs={criminalLawFaqs} />;
}

export default App;
