import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const translations = {
  el: {
    // Navigation
    about: 'About',
    brands: 'Brands',
    products: 'Products',
    custom: 'Custom',
    showroom: 'Showroom',
    contact: 'Contact',
    
    // Hero
    heroTitle: 'KLAVDIANOS DESIGN',
    heroSubtitle: 'Selected architectural materials of refined aesthetics',
    heroDescription: 'Tiles, sanitary ware and contemporary surfaces from leading European manufacturers',
    
    // About
    aboutTitle: 'About',
    aboutP1: 'Η KLAVDIANOS DESIGN δραστηριοποιείται σε επιλεγμένα υλικά υψηλής αισθητικής και προδιαγραφών, μέσω απευθείας συνεργασιών με κορυφαίους ευρωπαϊκούς οίκους.',
    aboutP2: 'Η φιλοσοφία βασίζεται στην αρχή ότι τα υλικά αποτελούν αναπόσπαστο μέρος της αρχιτεκτονικής σύνθεσης, ενισχύοντας την καθαρότητα, την ταυτότητα και την εμπειρία του χώρου.',
    aboutListTitle: 'Η συνεργασία με διεθνείς παραγωγούς εξασφαλίζει:',
    aboutList1: 'σταθερότητα ποιότητας',
    aboutList2: 'τεχνική αξιοπιστία',
    aboutList3: 'άμεση διαθεσιμότητα',
    aboutList4: 'συνέπεια στην παράδοση',
    aboutP3: 'Η ομάδα υποστηρίζει έργα από ιδιωτικές κατοικίες έως ξενοδοχειακές και εμπορικές εφαρμογές μεγάλης κλίμακας.',
    
    // Products
    productsTitle: 'Products',
    product1Title: 'Πλακίδια',
    product1Desc: 'Συλλογές πλακιδίων υψηλής αισθητικής από κορυφαίους ευρωπαϊκούς οίκους. Μεγάλη ποικιλία υφών, χρωμάτων και διαστάσεων.',
    product2Title: 'Είδη Υγιεινής',
    product2Desc: 'Σύγχρονα είδη υγιεινής με καθαρές γραμμές και τελειότητα στις λεπτομέρειες. Νιπτήρες, μπανιέρες και λεκάνες.',
    product3Title: 'Μπαταρίες & Εξαρτήματα',
    product3Desc: 'Σχεδιαστική αριστοτεχνία και τεχνική υπεροχή. Μπαταρίες μπάνιου και κουζίνας υψηλής αισθητικής.',
    product4Title: 'Μεγάλες Επιφάνειες',
    product4Desc: 'Slabs μεγάλων διαστάσεων για συνεχόμενες επιφάνειες. Ιδανικές για πάγκους, τοίχους και δάπεδα.',
    
    // Custom
    customTitle: 'Custom Solutions',
    customP1: 'Custom κατασκευές επίπλων μπάνιου:',
    customList1: 'προσαρμογή διαστάσεων',
    customList2: 'επιλογή υλικών και φινιρισμάτων',
    customList3: 'χρωματικές επιλογές',
    customList4: 'δυνατότητα μεγάλων παραγωγών',
    customP2: 'Σχεδιασμός προσαρμοσμένος στις ανάγκες κάθε έργου, τόσο λειτουργικά όσο και αισθητικά.',
    
    // Showroom
    showroomTitle: 'Showroom',
    
    // Contact
    contactTitle: 'Contact',
    phone: 'Τηλέφωνο',
    mobile: 'Κιν.',
    salesManager: 'Υπεύθυνος Πωλήσεων',
    footer: '© 2025 KLAVDIANOS DESIGN. All rights reserved.'
  },
  en: {
    // Navigation
    about: 'About',
    brands: 'Brands',
    products: 'Products',
    custom: 'Custom',
    showroom: 'Showroom',
    contact: 'Contact',
    
    // Hero
    heroTitle: 'KLAVDIANOS DESIGN',
    heroSubtitle: 'Selected architectural materials of refined aesthetics',
    heroDescription: 'Tiles, sanitary ware and contemporary surfaces from leading European manufacturers',
    
    // About
    aboutTitle: 'About',
    aboutP1: 'KLAVDIANOS DESIGN specializes in selected materials of high aesthetics and specifications, through direct partnerships with leading European manufacturers.',
    aboutP2: 'Our philosophy is based on the principle that materials are an integral part of architectural composition, enhancing clarity, identity and spatial experience.',
    aboutListTitle: 'Collaboration with international manufacturers ensures:',
    aboutList1: 'quality consistency',
    aboutList2: 'technical reliability',
    aboutList3: 'immediate availability',
    aboutList4: 'delivery consistency',
    aboutP3: 'Our team supports projects from private residences to large-scale hospitality and commercial applications.',
    
    // Products
    productsTitle: 'Products',
    product1Title: 'Tiles',
    product1Desc: 'High-aesthetic tile collections from leading European manufacturers. Wide variety of textures, colors and dimensions.',
    product2Title: 'Sanitary Ware',
    product2Desc: 'Contemporary sanitary ware with clean lines and perfection in detail. Washbasins, bathtubs and toilets.',
    product3Title: 'Faucets & Fittings',
    product3Desc: 'Design excellence and technical superiority. High-aesthetic bathroom and kitchen faucets.',
    product4Title: 'Large Format Surfaces',
    product4Desc: 'Large-format slabs for continuous surfaces. Ideal for countertops, walls and floors.',
    
    // Custom
    customTitle: 'Custom Solutions',
    customP1: 'Custom bathroom furniture construction:',
    customList1: 'dimension customization',
    customList2: 'material and finish selection',
    customList3: 'color options',
    customList4: 'large production capacity',
    customP2: 'Design tailored to the needs of each project, both functionally and aesthetically.',
    
    // Showroom
    showroomTitle: 'Showroom',
    
    // Contact
    contactTitle: 'Contact',
    phone: 'Phone',
    mobile: 'Mobile',
    salesManager: 'Sales Manager',
    footer: '© 2025 KLAVDIANOS DESIGN. All rights reserved.'
  }
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('el');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'el' ? 'en' : 'el');
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};