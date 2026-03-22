import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Brands from './components/Brands';
import Products from './components/Products';
import CustomSolutions from './components/CustomSolutions';
import Showroom from './components/Showroom';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Brands />
      <Products />
      <CustomSolutions />
      <Showroom />
      <Contact />
    </div>
  );
}

export default App;