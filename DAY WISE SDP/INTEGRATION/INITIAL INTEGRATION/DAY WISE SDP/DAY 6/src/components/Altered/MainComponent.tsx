import React, { useState } from "react";
import { FilterComponent } from "./FilterComponent";
import { FilteredCompaniesList } from "./FIlteredCompaniesList";
import { Companies, Company, FilterState } from "./typess";

// Sample companies data with additional details
const companies: Companies = {
  All: [
    {
      image: "/path-to/airtel-logo.png",
      companyName: "Airtel",
      rating: 4.0,
      reviews: "12.3K+ reviews",
      description: "Leading global telecom company.",
      tags: ["Telecom", "Global"],
      category: "Telecom"
    },
    {
      image: "/path-to/vxi-global-logo.png",
      companyName: "VXI Global Solutions LLC",
      rating: 3.3,
      reviews: "47 reviews",
      description: "No. 1 Customer Care Solutions Provider.",
      tags: ["Customer Care", "Solutions"],
      category: "BFSI"
    },
    {
      image: "/path-to/fis-logo.png",
      companyName: "FIS",
      rating: 3.9,
      reviews: "5.1K+ reviews",
      description: "FIS is hiring 3 to 10yrs exp. in C++ & Mumps developer.",
      tags: ["IT", "Developer"],
      category: "ITServices"
    },
    {
      image: "/path-to/amazon-logo.png",
      companyName: "Amazon",
      rating: 4.1,
      reviews: "21.9K+ reviews",
      description: "World's largest Internet company.",
      tags: ["E-commerce", "Global"],
      category: "E-commerce"
    },
    {
      image: "/path-to/datamatics-logo.png",
      companyName: "Datamatics",
      rating: 3.5,
      reviews: "1.8K+ reviews",
      description: "Global digital solutions & technology company.",
      tags: ["Technology", "Global"],
      category: "ITServices"
    },
    // Add more companies as needed
  ],
  ITServices: [
    {
      image: "/path-to/fis-logo.png",
      companyName: "FIS",
      rating: 3.9,
      reviews: "5.1K+ reviews",
      description: "FIS is hiring 3 to 10yrs exp. in C++ & Mumps developer.",
      tags: ["IT", "Developer"],
      category: "ITServices"
    },
    {
      image: "/path-to/datamatics-logo.png",
      companyName: "Datamatics",
      rating: 3.5,
      reviews: "1.8K+ reviews",
      description: "Global digital solutions & technology company.",
      tags: ["Technology", "Global"],
      category: "ITServices"
    }
  ],
  BFSI: [
    {
      image: "/path-to/vxi-global-logo.png",
      companyName: "VXI Global Solutions LLC",
      rating: 3.3,
      reviews: "47 reviews",
      description: "No. 1 Customer Care Solutions Provider.",
      tags: ["Customer Care", "Solutions"],
      category: "BFSI"
    }
  ]
};

export function MainComponent() {
  const [selectedFilters, setSelectedFilters] = useState<FilterState>({
    categories: new Set(),
    tags: new Set(),
    ratingRange: [0, 5],
  });

  // Helper function to handle filter changes
  const handleFilterChange = (type: string, value: any) => {
    setSelectedFilters((prevFilters) => {
      const newFilters = { ...prevFilters };
      if (type === "categories") {
        const updatedCategories = new Set(prevFilters.categories);
        if (updatedCategories.has(value)) {
          updatedCategories.delete(value);
        } else {
          updatedCategories.add(value);
        }
        newFilters.categories = updatedCategories;
      } else if (type === "tags") {
        const updatedTags = new Set(prevFilters.tags);
        if (updatedTags.has(value)) {
          updatedTags.delete(value);
        } else {
          updatedTags.add(value);
        }
        newFilters.tags = updatedTags;
      } else if (type === "ratingRange") {
        newFilters.ratingRange = value;
      }
      return newFilters;
    });
  };

  // Get unique categories and tags for filtering
  const categories = Array.from(new Set(Object.values(companies).flat().map((company) => company.category)));
  const tags = Array.from(new Set(Object.values(companies).flat().flatMap((company) => company.tags)));

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <FilterComponent
        categories={categories}
        tags={tags}
        selectedFilters={selectedFilters}
        onFilterChange={handleFilterChange}
      />
      <FilteredCompaniesList
        companies={companies}
        selectedFilters={selectedFilters}
      />
    </div>
  );
}
