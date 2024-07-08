import React, { useEffect, useRef } from 'react';
import FaqItem from './FaqItem';
import './FaqSection.css';
import faqdata from '../FaqData.js';

function FaqSection() {
  const faqRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const faqSection = faqRef.current;
      if (faqSection) {
        const rect = faqSection.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom >= 0;
        if (isInView) {
          // Trigger animation by adding the 'animate' class to h1
          faqSection.querySelector('h1').classList.add('animate');
        } else {
          // Remove 'animate' class if FAQ section is out of view
          faqSection.querySelector('h1').classList.remove('animate');
        }
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Check immediately in case FAQ section is already in view
    handleScroll();

    // Clean up by removing event listener when component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className="faq-section" ref={faqRef}>
      <h1>Frequently Asked Questions</h1>
      <div>
        {faqdata.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}

export default FaqSection;
