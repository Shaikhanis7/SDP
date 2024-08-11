// FeaturedCompanyCard.tsx
import React from "react";

interface FeaturedCompanyCardProps {
  image: string;
  companyName: string;
  rating: number;
  reviews: string;
  description: string;
}

export const FeaturedCompanyCard: React.FC<FeaturedCompanyCardProps> = ({
  image,
  companyName,
  rating,
  reviews,
  description,
}) => {
  return (
    <div className="bg-primary-foreground shadow-lg rounded-lg p-4 w-80">
      <div className="flex items-center mb-4">
        <img src={image} alt={companyName} className="h-12 w-auto mr-4" />
        <div>
          <h2 className="text-xl font-semibold text-primary">{companyName}</h2>
          <div className="flex items-center">
            <span className="text-yellow-500">{rating} ★</span>
          </div>
          <p className="text-gray-500">{reviews}</p>
        </div>
      </div>
      <p className="text-primary/70 mb-4">{description}</p>
      <button className="bg-accent hover:bg-accent/90 text-primary-foreground font-bold py-2 px-4 rounded-lg w-full">
        View Jobs
      </button>
    </div>
  );
};
