import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="header-logo">
          <img 
            src="https://customer-assets.emergentagent.com/job_design-studio-gr/artifacts/2p8bk14t_image.png" 
            alt="Klavdianos Design"
            className="logo-image"
          />
        </div>
        
        <nav className="header-nav">
          <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
          <button onClick={() => scrollToSection('brands')} className="nav-link">Brands</button>
          <button onClick={() => scrollToSection('products')} className="nav-link">Products</button>
          <button onClick={() => scrollToSection('custom')} className="nav-link">Custom</button>
          <button onClick={() => scrollToSection('showroom')} className="nav-link">Showroom</button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;