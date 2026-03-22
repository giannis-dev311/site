import React, { useEffect, useRef, useState } from 'react';
import './Brands.css';

const Brands = () => {
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

  const brandsColumn1 = [
    { name: 'Marazzi', url: 'https://www.marazzigroup.com/' },
    { name: 'Marca Corona', url: 'https://www.marcacorona.it/en/' },
    { name: 'EnergieKer', url: 'http://www.energieker.it/' },
    { name: 'Grespania', url: 'https://www.grespania.com/' },
    { name: 'Ragnoworld', url: 'https://www.ragnoworld.com/' },
    { name: 'Equipe Ceramicas', url: 'https://www.equipeceramicas.com/en/collections/' },
    { name: 'Ceramica Rondine', url: 'https://www.ceramicarondine.it/en/' },
    { name: 'Infinity Surfaces', url: 'https://www.infinitysurfaces.it/infinity-technology/' },
    { name: 'Imola Ceramica', url: 'https://imolaceramica.com/en/' },
    { name: 'Flaviker', url: 'https://www.flavikerpisa.it/en/' },
    { name: 'La Faenza', url: 'https://lafaenzaceramica.com/en/' },
    { name: 'Versace Ceramics', url: 'https://www.versace-ceramics.com/en/' },
  ];

  const brandsColumn2 = [
    { name: 'Gardenia', url: 'https://www.gardenia.it/en/' },
    { name: 'Leonardo Ceramica', url: 'https://leonardoceramica.com/en/' },
    { name: 'Materias Lab', url: 'https://www.materiaslab.com/en/' },
    { name: 'Century Ceramica', url: 'https://www.century-ceramica.it/en/' },
    { name: 'Monocibec', url: 'https://www.monocibec.it/en/' },
    { name: 'Naxos Ceramica', url: 'https://www.naxos-ceramica.it/' },
    { name: 'Palazzani', url: 'http://www.palazzani.eu/en/' },
    { name: 'Pamesa', url: 'https://www.pamesa.com/index.html' },
    { name: 'Prissmacer', url: 'https://www.prissmacer.es/index.html' },
  ];

  const brandsColumn3 = [
    { name: 'Roca', url: 'http://www.roca.com/' },
    { name: 'Geberit', url: 'https://www.geberit.com/en/' },
    { name: 'Grohe', url: 'https://www.grohe.com/' },
    { name: 'Ideal Standard', url: 'https://www.idealstandard.gr/' },
    { name: 'Hansgrohe', url: 'https://www.hansgrohe.com/' },
    { name: 'Zucchetti', url: 'https://www.zucchettidesign.it/en' },
    { name: 'Hansa', url: 'https://www.hansa.com/en/home' },
    { name: 'Laufen', url: 'https://www.laufen.com/' },
    { name: 'Rubinetteria Latorre', url: 'https://www.rubinetteria-latorre.it/en/' },
    { name: 'Jacuzzi', url: 'https://www.jacuzzi.com/it-it/#' },
  ];

  return (
    <section className="brands" id="brands" ref={sectionRef}>
      <div className="container">
        <h2 className={isVisible ? 'animate-on-scroll' : ''}>Brands</h2>
        
        <div className="brands-grid">
          <div className="brands-column">
            {brandsColumn1.map((brand, index) => (
              <a 
                key={index}
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`brand-item ${isVisible ? 'animate-on-scroll' : ''}`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {brand.name}
              </a>
            ))}
          </div>
          
          <div className="brands-column">
            {brandsColumn2.map((brand, index) => (
              <a 
                key={index}
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`brand-item ${isVisible ? 'animate-on-scroll' : ''}`}
                style={{ animationDelay: `${(index + brandsColumn1.length) * 0.05}s` }}
              >
                {brand.name}
              </a>
            ))}
          </div>
          
          <div className="brands-column">
            {brandsColumn3.map((brand, index) => (
              <a 
                key={index}
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`brand-item ${isVisible ? 'animate-on-scroll' : ''}`}
                style={{ animationDelay: `${(index + brandsColumn1.length + brandsColumn2.length) * 0.05}s` }}
              >
                {brand.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;