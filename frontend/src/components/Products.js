import React, { useEffect, useRef, useState } from 'react';
import './Products.css';

const Products = () => {
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

  const products = [
    {
      title: 'Πλακίδια',
      description: 'Συλλογές πλακιδίων υψηλής αισθητικής από κορυφαίους ευρωπαϊκούς οίκους. Μεγάλη ποικιλία υφών, χρωμάτων και διαστάσεων.',
      image: 'https://images.pexels.com/photos/7195883/pexels-photo-7195883.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      title: 'Είδη Υγιεινής',
      description: 'Σύγχρονα είδη υγιεινής με καθαρές γραμμές και τελειότητα στις λεπτομέρειες. Νιπτήρες, μπανιέρες και λεκάνες.',
      image: 'https://images.pexels.com/photos/7031574/pexels-photo-7031574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      title: 'Μπαταρίες & Εξαρτήματα',
      description: 'Σχεδιαστική αριστοτεχνία και τεχνική υπεροχή. Μπαταρίες μπάνιου και κουζίνας υψηλής αισθητικής.',
      image: 'https://images.pexels.com/photos/36650049/pexels-photo-36650049.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      title: 'Μεγάλες Επιφάνειες',
      description: 'Slabs μεγάλων διαστάσεων για συνεχόμενες επιφάνειες. Ιδανικές για πάγκους, τοίχους και δάπεδα.',
      image: 'https://images.pexels.com/photos/4709408/pexels-photo-4709408.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
  ];

  return (
    <section className="products" id="products" ref={sectionRef}>
      <div className="container">
        <h2 className={isVisible ? 'animate-on-scroll' : ''}>Products</h2>
        
        <div className="products-grid">
          {products.map((product, index) => (
            <div 
              key={index}
              className={`product-card ${isVisible ? 'animate-on-scroll' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="product-image">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="product-content">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;