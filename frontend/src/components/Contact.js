import React, { useEffect, useRef, useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="contact" id="contact" ref={sectionRef}>
      <div className="container">
        <div className="contact-content">
          <div className={`contact-header ${isVisible ? 'animate-on-scroll' : ''}`}>
            <h2>Contact</h2>
          </div>
          
          <div className="contact-info">
            <div className={`contact-block ${isVisible ? 'animate-on-scroll stagger-1' : ''}`}>
              <h3>KLAVDIANOS DESIGN</h3>
              <p>K.B. DESIGN E.E</p>
              <p>ΚΛΑΥΔΙΑΝΟΣ Σ. ΚΑΙ ΣΙΑ Ε.Ε.</p>
            </div>
            
            <div className={`contact-block ${isVisible ? 'animate-on-scroll stagger-2' : ''}`}>
              <p className="contact-item">
                <span className="contact-label">Τηλέφωνο:</span>
                <a href="tel:2109616342">210 961 6342</a>
              </p>
              <p className="contact-item">
                <span className="contact-label">Email:</span>
                <a href="mailto:sales@klavdianos-design.gr">sales@klavdianos-design.gr</a>
              </p>
            </div>
            
            <div className={`contact-block ${isVisible ? 'animate-on-scroll stagger-3' : ''}`}>
              <p className="contact-person">Δημήτρης Χριστοδούλου</p>
              <p className="contact-role">Υπεύθυνος Πωλήσεων</p>
              <p className="contact-item">
                <span className="contact-label">Κιν.:</span>
                <a href="tel:6975629792">697 562 9792</a>
              </p>
            </div>
          </div>
        </div>
        
        <footer className={`site-footer ${isVisible ? 'animate-on-scroll stagger-4' : ''}`}>
          <p>&copy; 2025 KLAVDIANOS DESIGN. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;