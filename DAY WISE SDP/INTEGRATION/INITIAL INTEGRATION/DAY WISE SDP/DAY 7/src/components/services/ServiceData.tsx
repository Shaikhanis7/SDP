// servicesData.ts
export interface Service {
    name: string;
    description: string;
    price: string;
    tag: string;
    link: string;
    image: string; // Path to the service image
  }
  
  export const servicesData: Service[] = [
    {
      name: 'Resume Display',
      description: 'Increase your Profile Visibility to recruiters up to 3 times.',
      price: '₹890 for 1 Month',
      tag: 'Most Popular',
      link: '/services/resume-display',
      image: 'path/to/resume-display.png',
    },
    {
      name: 'Priority Applicant',
      description: 'Increase your chance of getting a call.',
      price: '₹971 for 3 Months',
      tag: 'Recommended',
      link: '/services/priority-applicant',
      image: 'path/to/priority-applicant.png',
    },
    {
      name: 'AI Mock Interview',
      description: 'Personalized AI driven mock interviews for your profile.',
      price: '₹296 for 3 Months',
      tag: 'Free Trial',
      link: '/services/ai-mock-interview',
      image: 'path/to/ai-mock-interview.png',
    },
    // Add more services as needed
  ];
  