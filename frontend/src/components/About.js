import React, { useEffect, useRef, useState } from 'react';
import './About.css';

const About = () => {
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
    <section className="about" id="about" ref={sectionRef}>
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <h2 className={isVisible ? 'animate-on-scroll' : ''}>
              About
            </h2>
            
            <div className="about-text">
              <p className={isVisible ? 'animate-on-scroll stagger-1' : ''}>
                Η KLAVDIANOS DESIGN δραστηριοποιείται σε επιλεγμένα υλικά υψηλής αισθητικής και προδιαγραφών, 
                μέσω απευθείας συνεργασιών με κορυφαίους ευρωπαϊκούς οίκους.
              </p>
              
              <p className={isVisible ? 'animate-on-scroll stagger-2' : ''}>
                Η φιλοσοφία βασίζεται στην αρχή ότι τα υλικά αποτελούν αναπόσπαστο μέρος της αρχιτεκτονικής σύνθεσης, 
                ενισχύοντας την καθαρότητα, την ταυτότητα και την εμπειρία του χώρου.
              </p>
              
              <div className={`about-list ${isVisible ? 'animate-on-scroll stagger-3' : ''}`}>
                <p className="list-title">Η συνεργασία με διεθνείς παραγωγούς εξασφαλίζει:</p>
                <ul>
                  <li>σταθερότητα ποιότητας</li>
                  <li>τεχνική αξιοπιστία</li>
                  <li>άμεση διαθεσιμότητα</li>
                  <li>συνέπεια στην παράδοση</li>
                </ul>
              </div>
              
              <p className={isVisible ? 'animate-on-scroll stagger-4' : ''}>
                Η ομάδα υποστηρίζει έργα από ιδιωτικές κατοικίες έως ξενοδοχειακές και εμπορικές εφαρμογές μεγάλης κλίμακας.
              </p>
            </div>
          </div>
          
          <div className="about-visual">
            <div className={`visual-block ${isVisible ? 'animate-on-scroll stagger-2' : ''}`}>
              <img 
                src="https://images.unsplash.com/photo-1758055660837-6889c3cb3898?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjd8MHwxfHNlYXJjaHw0fHxsdXh1cnklMjBhcmNoaXRlY3R1cmFsJTIwbWF0ZXJpYWxzfGVufDB8fHx8MTc3NDIwMjM4N3ww&ixlib=rb-4.1.0&q=85" 
                alt="Premium architectural materials"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;