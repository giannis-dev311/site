import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setOffsetY(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero" id="hero">
      <div 
        className="hero-background"
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      >
        <img 
          src="https://images.pexels.com/photos/6538939/pexels-photo-6538939.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
          alt="Luxury architectural materials"
        />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <h1 className={`hero-title ${isVisible ? 'animate-in' : ''}`}>
          KLAVDIANOS DESIGN
        </h1>
        <p className={`hero-subtitle ${isVisible ? 'animate-in delay-1' : ''}`}>
          Selected architectural materials of refined aesthetics
        </p>
        <p className={`hero-description ${isVisible ? 'animate-in delay-2' : ''}`}>
          Tiles, sanitary ware and contemporary surfaces from leading European manufacturers
        </p>
      </div>
    </section>
  );
};

export default Hero;