// src/components/FAQs.jsx
import React, { useState, useEffect, useRef } from "react";
import "./FAQs.css";

const faqsData = [
  {
    id: 1,
    question: "How many AI models can I access with your platform?",
    answer: "You get access to 15+ premium AI models including ChatGPT, Claude, Gemini, Grok, Perplexity, and many more. All in one unified interface."
  },
  {
    id: 2,
    question: "Can I compare responses from different AI models?",
    answer: "Absolutely! Our platform allows you to query multiple AI models simultaneously and compare their responses side-by-side to get the best answers."
  },
  {
    id: 3,
    question: "Do I need separate accounts for each AI service?",
    answer: "No! With our platform, you only need one account to access all AI models. We handle all the integrations for you."
  },
  {
    id: 4,
    question: "Is there a free trial available?",
    answer: "Yes, we offer a free trial with no credit card required. You can test all features and see which AI models work best for your needs."
  },
  {
    id: 5,
    question: "Can I switch between AI models mid-conversation?",
    answer: "Yes! You can seamlessly switch between different AI models without losing context or starting your conversation over."
  },
  {
    id: 6,
    question: "How secure is my data?",
    answer: "Your data security is our top priority. We use enterprise-grade encryption and never store your conversations longer than necessary."
  }
];

const FAQs = () => {
  const [openFAQs, setOpenFAQs] = useState(new Set());
  const [isVisible, setIsVisible] = useState(false);
  const faqsRef = useRef(null);

  // Simple intersection observer for fade-in effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (faqsRef.current) {
      observer.observe(faqsRef.current);
    }

    return () => {
      if (faqsRef.current) {
        observer.unobserve(faqsRef.current);
      }
    };
  }, [isVisible]);

  const toggleFAQ = (index) => {
    const newOpenFAQs = new Set(openFAQs);
    
    if (newOpenFAQs.has(index)) {
      newOpenFAQs.delete(index);
    } else {
      newOpenFAQs.add(index);
    }
    
    setOpenFAQs(newOpenFAQs);
  };

  return (
    <div className={`faqs-section ${isVisible ? 'fade-in' : ''}`} ref={faqsRef}>
      <div className="faqs-content">
        <div className="faqs-header">
          <h1 className="faqs-title">
            Frequently Asked Questions
          </h1>
          <p className="faqs-subtitle">
            Everything you need to know about our AI platform
          </p>
        </div>

        <div className="faqs-container">
          {faqsData.map((faq, index) => (
            <div
              key={faq.id}
              className={`faq-item ${openFAQs.has(index) ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <div className={`faq-icon ${openFAQs.has(index) ? 'rotated' : ''}`}>
                  <span>+</span>
                </div>
              </div>
              <div className="faq-answer">
                <div className="faq-answer-content">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
