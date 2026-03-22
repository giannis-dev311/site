import React, { useEffect, useRef, useState } from 'react';
import './Showroom.css';

const Showroom = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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
    <section className="showroom" id="showroom" ref={sectionRef}>
      <div className="container">
        <h2 className={isVisible ? 'animate-on-scroll' : ''}>Showroom</h2>
        
        <div className="showroom-content">
          <div className={`showroom-info ${isVisible ? 'animate-on-scroll stagger-1' : ''}`}>
            <p className="address-line">Λεωφόρος Βουλιαγμένης 25 & Τζαβέλλα 8</p>
            <p className="address-line">Γλυφάδα 16675</p>
          </div>
          
          <div className={`showroom-map ${isVisible ? 'animate-on-scroll stagger-2' : ''}`}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3147.0823567890876!2d23.760899315318!3d37.86741597973992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd3c6c5e7e7d%3A0x1c8e5e5e5e5e5e5e!2sLeoforos%20Vouliagmenis%2025%2C%20Glifada%20166%2075!5e0!3m2!1sen!2sgr!4v1234567890123!5m2!1sen!2sgr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="KLAVDIANOS DESIGN Showroom Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showroom;