// ServiceCard.tsx
import React from 'react';
import { Service } from './ServiceData';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tag, Link as LinkIcon } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 bg-primary text-primary-foreground">
      <CardHeader className="relative">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-32 object-cover rounded-t-lg"
        />
        <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
          {service.tag}
        </span>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="text-xl font-semibold mb-2">
          {service.name}
        </h3>
        <p className="mb-4">{service.description}</p>
        <p className="text-lg font-semibold mb-4">
          {service.price}
        </p>
        <div className="flex items-center justify-between">
          <a href={service.link} className="flex items-center text-blue-500 hover:underline">
            <LinkIcon size={16} className="mr-2" />
            Know More
          </a>
          <Button
            variant="outline"
            className="text-blue-500 hover:bg-blue-100"
            onClick={() => window.open(service.link, '_blank')}
          >
            <LinkIcon size={16} className="mr-2" />
            Learn More
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
