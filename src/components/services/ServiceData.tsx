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
    description: 'Increase your profile visibility to recruiters up to 3 times.',
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
    description: 'Personalized AI-driven mock interviews for your profile.',
    price: '₹296 for 3 Months',
    tag: 'Free Trial',
    link: '/services/ai-mock-interview',
    image: 'path/to/ai-mock-interview.png',
  },
  {
    name: 'Career Counseling',
    description: 'Professional guidance to help you navigate your career path.',
    price: '₹1,200 for 1 Session',
    tag: 'Expert Advice',
    link: '/services/career-counseling',
    image: 'path/to/career-counseling.png',
  },
  {
    name: 'LinkedIn Profile Optimization',
    description: 'Enhance your LinkedIn profile to attract more recruiters.',
    price: '₹750 for 1 Optimization',
    tag: 'Featured',
    link: '/services/linkedin-profile-optimization',
    image: 'path/to/linkedin-profile-optimization.png',
  },
  {
    name: 'Cover Letter Writing',
    description: 'Professionally written cover letters tailored to job applications.',
    price: '₹500 per Letter',
    tag: 'Recommended',
    link: '/services/cover-letter-writing',
    image: 'path/to/cover-letter-writing.png',
  },
  {
    name: 'Job Market Insights',
    description: 'In-depth analysis of current job market trends and opportunities.',
    price: '₹600 for 1 Report',
    tag: 'Latest Trends',
    link: '/services/job-market-insights',
    image: 'path/to/job-market-insights.png',
  },
  {
    name: 'Personal Branding Package',
    description: 'Build a strong personal brand with a comprehensive package.',
    price: '₹2,500 for Full Package',
    tag: 'Premium',
    link: '/services/personal-branding-package',
    image: 'path/to/personal-branding-package.png',
  },
];
