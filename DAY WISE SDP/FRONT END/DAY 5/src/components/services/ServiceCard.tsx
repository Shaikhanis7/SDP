// ServiceCard.tsx
import React from 'react';
import { Service } from './ServiceData';
// import { Service } from './servicesData';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-primary rounded-lg shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
      <div className="mb-4">
        <img src={service.image} alt={service.name} className="w-full h-32 object-cover rounded-t-lg" />
        <span className="bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-full absolute top-2 right-2">
          {service.tag}
        </span>
      </div>
      <h3 className="text-xl font-semibold text-primary-foreground mb-2">{service.name}</h3>
      <p className="text-primary-foreground mb-4">{service.description}</p>
      <p className="text-lg font-semibold text-primary-foreground">{service.price}</p>
      <a href={service.link} className="text-blue-500 hover:underline mt-4">KNOW MORE</a>
    </div>
  );
};

export default ServiceCard;
