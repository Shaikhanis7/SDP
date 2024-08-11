// ServicesPage.tsx
import React from 'react';
import Header from './Header';
import Services from './Services';
import Footer from '../shared/Footer';

const ServicesPage: React.FC = () => {
  return (
    <div>
      <Header />
      <Services />
      <Footer/>
    </div>
  );
};

export default ServicesPage;
