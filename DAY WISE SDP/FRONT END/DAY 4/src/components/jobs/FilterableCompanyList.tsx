import React, { useState } from 'react';

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
  { name: 'Infosys', category: 'IT Services', industry: 'Technology', reviews: 34000, rating: 3.8, logo: 'path/to/logo1.png', type: 'Indian MNC' },
  { name: 'Tech Mahindra', category: 'IT Services & Consulting', industry: 'Technology', reviews: 28800, rating: 3.7, logo: 'path/to/logo2.png', type: 'Indian MNC' },
  { name: 'Vitech Systems', category: 'B2B', industry: 'Finance', reviews: 112, rating: 3.7, logo: 'path/to/logo3.png', type: 'Private' },
  { name: 'Saama Technologies', category: 'IT Services & Consulting', industry: 'Technology', reviews: 289, rating: 3.7, logo: 'path/to/logo4.png', type: 'Foreign MNC' },
  { name: 'Diebold', category: 'IT Services & Consulting', industry: 'Finance', reviews: 512, rating: 3.9, logo: 'path/to/logo5.png', type: 'Foreign MNC' },
  // Adding more dummy data
  { name: 'Google', category: 'IT Services', industry: 'Technology', reviews: 15000, rating: 4.5, logo: 'path/to/logo6.png', type: 'Foreign MNC' },
  { name: 'Microsoft', category: 'IT Services & Consulting', industry: 'Technology', reviews: 20000, rating: 4.4, logo: 'path/to/logo7.png', type: 'Foreign MNC' },
  { name: 'Apple', category: 'Technology', industry: 'Technology', reviews: 30000, rating: 4.6, logo: 'path/to/logo8.png', type: 'Foreign MNC' },
  { name: 'Amazon', category: 'Retail', industry: 'E-commerce', reviews: 25000, rating: 4.2, logo: 'path/to/logo9.png', type: 'Foreign MNC' },
  { name: 'Tata Consultancy Services', category: 'IT Services & Consulting', industry: 'Technology', reviews: 40000, rating: 3.9, logo: 'path/to/logo10.png', type: 'Indian MNC' },
  { name: 'Wipro', category: 'IT Services', industry: 'Technology', reviews: 32000, rating: 3.7, logo: 'path/to/logo11.png', type: 'Indian MNC' },
  { name: 'Reliance Industries', category: 'Manufacturing', industry: 'Energy', reviews: 5000, rating: 4.1, logo: 'path/to/logo12.png', type: 'Indian MNC' },
  { name: 'Cognizant', category: 'Consulting', industry: 'Technology', reviews: 35000, rating: 3.8, logo: 'path/to/logo13.png', type: 'Foreign MNC' },
  { name: 'Capgemini', category: 'Consulting', industry: 'Technology', reviews: 28000, rating: 3.9, logo: 'path/to/logo14.png', type: 'Foreign MNC' },
  { name: 'HCL Technologies', category: 'IT Services', industry: 'Technology', reviews: 29000, rating: 3.8, logo: 'path/to/logo15.png', type: 'Indian MNC' },
  { name: 'Accenture', category: 'Consulting', industry: 'Technology', reviews: 34000, rating: 4.0, logo: 'path/to/logo16.png', type: 'Foreign MNC' },
  { name: 'IBM', category: 'IT Services & Consulting', industry: 'Technology', reviews: 37000, rating: 3.9, logo: 'path/to/logo17.png', type: 'Foreign MNC' },
  { name: 'Facebook', category: 'Technology', industry: 'Social Media', reviews: 22000, rating: 4.5, logo: 'path/to/logo18.png', type: 'Foreign MNC' },
  { name: 'Twitter', category: 'Technology', industry: 'Social Media', reviews: 18000, rating: 4.2, logo: 'path/to/logo19.png', type: 'Foreign MNC' },
  { name: 'LinkedIn', category: 'Technology', industry: 'Social Media', reviews: 17000, rating: 4.3, logo: 'path/to/logo20.png', type: 'Foreign MNC' },
  { name: 'Snapchat', category: 'Technology', industry: 'Social Media', reviews: 15000, rating: 4.0, logo: 'path/to/logo21.png', type: 'Foreign MNC' },
  // Continue adding up to 50 companies or more...
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
    <div className="flex">
      <div className="w-1/4 bg-primary-foreground p-4 border-r">
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
            <label htmlFor={`category-${index}`} className="text-gray-800">{category}</label>
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
            <label htmlFor={`industry-${index}`} className="text-gray-800">{industry}</label>
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
            <label htmlFor={`type-${index}`} className="text-gray-800">{type}</label>
          </div>
        ))}
      </div>
      <div className="w-3/4 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 h-[10vh]">
        {filteredCompanies.map((company, index) => (
          <div key={index} className="bg-primary rounded-lg shadow-md p-4">
            <img src={company.logo} alt={`${company.name} logo`} className="h-12 w-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">{company.name}</h3>
            <p className="text-sm text-gray-500">{company.reviews} reviews</p>
            <p className="text-sm text-gray-500">{company.category}</p>
            <p className="text-sm text-gray-500">{company.industry}</p>
            <p className="text-sm text-gray-500">{company.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterableCompanyList;
