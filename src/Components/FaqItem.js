import React, { useState } from 'react';
import './FaqItem.css';

function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={toggleOpen}>
        {question}
        <span className="sign">{isOpen ? '-' : '+'}</span>
      </div>
      <div
        className={`faq-answer ${isOpen ? 'show' : ''}`}>
        {answer}
      </div>
    </div>
  );
}

export default FaqItem;
