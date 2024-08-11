interface Service {
    name: string;
    description: string;
    icon: string; // Assuming we use some SVG icons or icon classes
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
    // Add more services as needed
  ];
  