import React from "react";
import { FeaturedCompanyCard } from "./FeaturedCompanyCard";
import { Companies, Company, FilterState } from "./typess";

type FilteredCompaniesListProps = {
  companies: Companies;
  selectedFilters: FilterState;
};

export function FilteredCompaniesList({
  companies,
  selectedFilters,
}: FilteredCompaniesListProps) {
  // Function to check if a company matches the filters
  const matchesFilters = (company: Company) => {
    const matchesCategory = selectedFilters.categories.size === 0 || selectedFilters.categories.has(company.category);
    const matchesTags = selectedFilters.tags.size === 0 || company.tags.some((tag) => selectedFilters.tags.has(tag));
    const matchesRating = company.rating >= selectedFilters.ratingRange[0] && company.rating <= selectedFilters.ratingRange[1];
    
    return matchesCategory && matchesTags && matchesRating;
  };

  // Filter companies based on selected filters
  const filteredCompanies = Object.values(companies).flatMap((companyList) =>
    companyList.filter(matchesFilters)
  );

  return (
    <div className="w-full p-6 bg-primary flex flex-wrap gap-4">
      {filteredCompanies.length > 0 ? (
        filteredCompanies.map((company, index) => (
          <FeaturedCompanyCard
            key={index}
            image={company.image}
            companyName={company.companyName}
            rating={company.rating}
            reviews={company.reviews}
            description={company.description}
          />
        ))
      ) : (
        <p className="text-center text-primary-foreground">No companies found</p>
      )}
    </div>
  );
}
