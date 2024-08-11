// types.ts
export type Company = {
  image: string;
  companyName: string;
  rating: number;
  reviews: string;
  description: string;
};

export type Category = "All" | "ITServices" | "BFSI";

export type Companies = {
  [key in Category]: Company[];
};
