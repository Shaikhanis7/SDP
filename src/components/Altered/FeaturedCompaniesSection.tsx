// FeaturedCompaniesSection.tsx
import * as React from "react";
import { FeaturedCompanyCard } from "./FeaturedCompanyCard";
import { Companies, Category } from "./types"; // Import the types

// Initialize companies with appropriate typing
const companies: Companies = {
  All: [
    {
      image: "/path-to/airtel-logo.png",
      companyName: "Airtel",
      rating: 4.0,
      reviews: "12.3K+ reviews",
      description: "Leading global telecom company."
    },
    {
      image: "/path-to/vxi-global-logo.png",
      companyName: "VXI Global Solutions LLC",
      rating: 3.3,
      reviews: "47 reviews",
      description: "No. 1 Customer Care Solutions Provider."
    },
    {
      image: "/path-to/fis-logo.png",
      companyName: "FIS",
      rating: 3.9,
      reviews: "5.1K+ reviews",
      description: "FIS is hiring 3 to 10yrs exp. in C++ & Mumps developer."
    },
    {
      image: "/path-to/amazon-logo.png",
      companyName: "Amazon",
      rating: 4.1,
      reviews: "21.9K+ reviews",
      description: "World's largest Internet company."
    },
    {
      image: "/path-to/datamatics-logo.png",
      companyName: "Datamatics",
      rating: 3.5,
      reviews: "1.8K+ reviews",
      description: "Global digital solutions & technology company."
    }
  ],
  ITServices: [
    {
      image: "/path-to/fis-logo.png",
      companyName: "FIS",
      rating: 3.9,
      reviews: "5.1K+ reviews",
      description: "FIS is hiring 3 to 10yrs exp. in C++ & Mumps developer."
    },
    {
      image: "/path-to/datamatics-logo.png",
      companyName: "Datamatics",
      rating: 3.5,
      reviews: "1.8K+ reviews",
      description: "Global digital solutions & technology company."
    }
  ],
  BFSI: [
    {
      image: "/path-to/vxi-global-logo.png",
      companyName: "VXI Global Solutions LLC",
      rating: 3.3,
      reviews: "47 reviews",
      description: "No. 1 Customer Care Solutions Provider."
    }
  ]
};

export function FeaturedCompaniesSection() {
  const [selectedFilter, setSelectedFilter] = React.useState<Category>("All");

  return (
    <div className="p-6 bg-primary ">
      <div className="mb-6 flex gap-4rounded">
        <button
          onClick={() => setSelectedFilter("All")}
          className={`px-4 py-2 rounded-lg ${selectedFilter === "All" ? "bg-primary-foreground text-primary" : "bg-primary text-primary-foreground"}`}
        >
          All
        </button>
        <button
          onClick={() => setSelectedFilter("ITServices")}
          className={`px-4 py-2 rounded-lg ${selectedFilter === "ITServices" ? "bg-accent text-primary-foreground" : "bg-primary text-primary-foreground"}`}
        >
          IT Services
        </button>
        <button
          onClick={() => setSelectedFilter("BFSI")}
          className={`px-4 py-2 rounded-lg ${selectedFilter === "BFSI" ? "bg-accent text-primary-foreground" : "bg-primary text-primary-foreground"}`}
        >
          BFSI
        </button>
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {companies[selectedFilter].map((company, index) => (
          <FeaturedCompanyCard
            key={index}
            image={company.image}
            companyName={company.companyName}
            rating={company.rating}
            reviews={company.reviews}
            description={company.description}
          />
        ))}
      </div>
    </div>
  );
}
