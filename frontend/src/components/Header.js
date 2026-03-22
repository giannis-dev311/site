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
            src="https://customer-assets.emergentagent.com/job_design-studio-gr/artifacts/poutj85i_image001-removebg-preview.png"
            alt="Klavdianos Design"
            className="logo-image !py-[1px] !shadow-2xl" />

        </div>
        
        <nav className="header-nav">
          <button onClick={() => scrollToSection('about')} className="nav-link !text-[#C24451]">About</button>
          <button onClick={() => scrollToSection('brands')} className="nav-link !text-[#C24451]">Brands</button>
          <button onClick={() => scrollToSection('products')} className="nav-link !text-[#C24451]">Products</button>
          <button onClick={() => scrollToSection('custom')} className="nav-link !text-[#C24451]">Custom</button>
          <button onClick={() => scrollToSection('showroom')} className="nav-link !text-[#C24451]">Showroom</button>
          <button onClick={() => scrollToSection('contact')} className="nav-link !text-[#C24451]">Contact</button>
        </nav>
      </div>
    </header>);

};

export default Header;