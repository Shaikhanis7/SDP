import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface Company {
  name: string;
  category: string;
  industry: string;
  reviews: number;
  rating: number;
  logo: string;
  type: string;
}

const companiesData: Company[] = [
  { name: 'Cognizant', category: 'Consulting', industry: 'Technology', reviews: 35000, rating: 3.8, logo: 'path/to/logo13.png', type: 'Foreign MNC' },
  { name: 'Capgemini', category: 'Consulting', industry: 'Technology', reviews: 28000, rating: 3.9, logo: 'path/to/logo14.png', type: 'Foreign MNC' },
  { name: 'HCL Technologies', category: 'IT Services', industry: 'Technology', reviews: 29000, rating: 3.8, logo: 'path/to/logo15.png', type: 'Indian MNC' },
  { name: 'Accenture', category: 'Consulting', industry: 'Technology', reviews: 34000, rating: 4.0, logo: 'path/to/logo16.png', type: 'Foreign MNC' },
  { name: 'IBM', category: 'IT Services & Consulting', industry: 'Technology', reviews: 37000, rating: 3.9, logo: 'path/to/logo17.png', type: 'Foreign MNC' },
  { name: 'Facebook', category: 'Technology', industry: 'Social Media', reviews: 22000, rating: 4.5, logo: 'path/to/logo18.png', type: 'Foreign MNC' },
  { name: 'Twitter', category: 'Technology', industry: 'Social Media', reviews: 18000, rating: 4.2, logo: 'path/to/logo19.png', type: 'Foreign MNC' },
  { name: 'LinkedIn', category: 'Technology', industry: 'Social Media', reviews: 17000, rating: 4.3, logo: 'path/to/logo20.png', type: 'Foreign MNC' },
  { name: 'Snapchat', category: 'Technology', industry: 'Social Media', reviews: 15000, rating: 4.0, logo: 'path/to/logo21.png', type: 'Foreign MNC' },
];

const FilterableCompanyList: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const categories = ['IT Services', 'Technology', 'Manufacturing', 'BPO', 'Consulting'];
  const industries = ['Technology', 'Finance', 'Healthcare', 'Retail', 'Education', 'Energy', 'E-commerce', 'Social Media'];
  const types = ['Indian MNC', 'Foreign MNC', 'Private', 'Public'];

  const toggleFilter = (filter: string, setFilter: React.Dispatch<React.SetStateAction<string[]>>, filterList: string[]) => {
    setFilter(prevState =>
      prevState.includes(filter)
        ? prevState.filter(f => f !== filter)
        : [...prevState, filter]
    );
  };

  const filteredCompanies = companiesData.filter(company =>
    (selectedCategories.length === 0 || selectedCategories.includes(company.category)) &&
    (selectedIndustries.length === 0 || selectedIndustries.includes(company.industry)) &&
    (selectedTypes.length === 0 || selectedTypes.includes(company.type))
  );

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Sidebar Section */}
      <div className="w-full lg:w-1/4 bg-primary-foreground p-4 border-r lg:border-r-0 lg:border-b overflow-y-auto h-screen lg:h-auto">
        <h3 className="text-xl font-semibold mb-4">Filter by Category</h3>
        {categories.map((category, index) => (
          <div key={index} className="mb-2">
            <input
              type="checkbox"
              id={`category-${index}`}
              checked={selectedCategories.includes(category)}
              onChange={() => toggleFilter(category, setSelectedCategories, selectedCategories)}
              className="mr-2"
            />
            <label htmlFor={`category-${index}`} className="text-primary">{category}</label>
          </div>
        ))}

        <h3 className="text-xl font-semibold mt-6 mb-4">Filter by Industry</h3>
        {industries.map((industry, index) => (
          <div key={index} className="mb-2">
            <input
              type="checkbox"
              id={`industry-${index}`}
              checked={selectedIndustries.includes(industry)}
              onChange={() => toggleFilter(industry, setSelectedIndustries, selectedIndustries)}
              className="mr-2"
            />
            <label htmlFor={`industry-${index}`} className="text-primary">{industry}</label>
          </div>
        ))}

        <h3 className="text-xl font-semibold mt-6 mb-4">Filter by Company Type</h3>
        {types.map((type, index) => (
          <div key={index} className="mb-2">
            <input
              type="checkbox"
              id={`type-${index}`}
              checked={selectedTypes.includes(type)}
              onChange={() => toggleFilter(type, setSelectedTypes, selectedTypes)}
              className="mr-2"
            />
            <label htmlFor={`type-${index}`} className="text-primary">{type}</label>
          </div>
        ))}
      </div>

      {/* Company List Section */}
      <div className="w-full lg:w-3/4 p-4 overflow-y-auto h-screen lg:h-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredCompanies.map((company, index) => (
            <motion.div
              key={index}
              className="bg-primary rounded-lg shadow-lg p-4 transform transition-transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={company.logo} alt={`${company.name} logo`} className="h-12 w-auto mb-4 mx-auto" />
              <div className="text-center">
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-xl font-semibold mb-2 text-primary-foreground"
                >
                  {company.name}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
                  className="text-sm text-primary-foreground"
                >
                  {company.reviews} reviews
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  className="text-sm text-primary-foreground"
                >
                  {company.category}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  className="text-sm text-primary-foreground"
                >
                  {company.industry}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                  className="text-sm text-primary-foreground"
                >
                  {company.type}
                </motion.p>
                <Link to={`/company/${company.name}`} className="mt-4 inline-block bg-primary text-white py-2 px-4 rounded-lg text-center hover:bg-primary-dark">
                  View More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterableCompanyList;
