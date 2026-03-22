import React, { useEffect, useRef, useState } from 'react';
import './CustomSolutions.css';

const CustomSolutions = () => {
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
    <section className="custom-solutions" id="custom" ref={sectionRef}>
      <div className="container">
        <div className="custom-content">
          <h2 className={isVisible ? 'animate-on-scroll' : ''}>
            Custom Solutions
          </h2>
          
          <div className="custom-text">
            <p className={isVisible ? 'animate-on-scroll stagger-1' : ''}>
              Custom κατασκευές επίπλων μπάνιου:
            </p>
            
            <ul className={isVisible ? 'animate-on-scroll stagger-2' : ''}>
              <li>προσαρμογή διαστάσεων</li>
              <li>επιλογή υλικών και φινιρισμάτων</li>
              <li>χρωματικές επιλογές</li>
              <li>δυνατότητα μεγάλων παραγωγών</li>
            </ul>
            
            <p className={isVisible ? 'animate-on-scroll stagger-3' : ''}>
              Σχεδιασμός προσαρμοσμένος στις ανάγκες κάθε έργου, τόσο λειτουργικά όσο και αισθητικά.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomSolutions;