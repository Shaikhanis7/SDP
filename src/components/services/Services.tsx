// Services.tsx
import React from 'react';
// import { servicesData } from './servicesData';
import ServiceCard from './ServiceCard';
import { servicesData } from './ServiceData';

const Services: React.FC = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-primary">Move ahead in career, faster</h2>
        <p className="text-lg text-primary">with our paid services</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
