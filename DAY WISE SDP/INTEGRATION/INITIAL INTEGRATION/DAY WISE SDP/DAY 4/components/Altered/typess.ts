// types.ts
export type Company = {
    image: string;
    companyName: string;
    rating: number;
    reviews: string;
    description: string;
    tags: string[]; // Additional tags or criteria
    category: string; // The category of the company
  };
  
  export type Companies = {
    [key: string]: Company[];
  };
  
  export type FilterState = {
    categories: Set<string>;
    tags: Set<string>;
    ratingRange: [number, number];
  };
  