import React from 'react';

const SponsoredCompanies = () => {
  const companies = [
    { category: 'MNCs', count: 185 },
    { category: 'Fintech', count: 8 },
    { category: 'FMCG & Retail', count: 7 },
    { category: 'Startups', count: 12 },
    { category: 'Edtech', count: 3 },
    { category: 'Healthcare', count: 15 },
    { category: 'Consulting', count: 10 },
    { category: 'Manufacturing', count: 20 },
    { category: 'Energy', count: 5 },
    { category: 'Telecom', count: 9 },
    { category: 'Logistics', count: 6 },
    { category: 'Government', count: 4 },
    { category: 'Non-profit', count: 7 },
    { category: 'Automotive', count: 11 },
  ];

  return (
    <div className="bg-primary py-8">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-6 text-primary-foreground">Sponsored Companies</h2>
        <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
          {companies.map((company, index) => (
            <div 
              key={index} 
              className="bg-primary-foreground rounded-lg shadow-md p-6 min-w-[150px] flex flex-col items-center justify-center"
            >
              <h3 className="text-xl font-semibold text-primary mb-2">{company.category}</h3>
              <p className="text-primary">{company.count} Companies </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsoredCompanies;
