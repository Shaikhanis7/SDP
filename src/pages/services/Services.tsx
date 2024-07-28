import React from 'react';

interface Service {
  name: string;
  description: string;
  icon: string;
}

const servicesData: Service[] = [
  {
    name: 'Web Development',
    description: 'Building responsive and modern web applications.',
    icon: 'path/to/web-dev-icon.svg',
  },
  {
    name: 'Mobile Development',
    description: 'Creating mobile applications for Android and iOS platforms.',
    icon: 'path/to/mobile-dev-icon.svg',
  },
  {
    name: 'UI/UX Design',
    description: 'Designing user-friendly and aesthetic interfaces.',
    icon: 'path/to/ui-ux-icon.svg',
  },
  // More services can be added here
];

const ServiceCard: React.FC<Service> = ({ name, description, icon }) => {
  return (
    <div className="bg-primary rounded-lg shadow-md p-6 text-center">
      <img src={icon} alt={`${name} icon`} className="h-16 w-16 mx-auto mb-4" />
      <h3 className="text-xl font-semibold primary-foreground">{name}</h3>
      <p className="primary-foreground">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-semibold text-center primary-foreground mb-8">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            name={service.name}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
