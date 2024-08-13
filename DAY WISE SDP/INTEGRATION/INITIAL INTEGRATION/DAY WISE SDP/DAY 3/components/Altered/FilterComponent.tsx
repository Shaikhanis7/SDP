import React from "react";
import { FilterState } from "./typess";

type FilterComponentProps = {
  categories: string[];
  tags: string[];
  selectedFilters: FilterState;
  onFilterChange: (type: string, value: any) => void;
};

export function FilterComponent({
  categories,
  tags,
  selectedFilters,
  onFilterChange,
}: FilterComponentProps) {
  return (
    <div className="w-1/6 p-6 bg-secondary flex flex-col gap-4">
      {/* Categories Filter */}
      <div className="flex flex-col">
        <h3 className="text-primary-foreground font-bold mb-2">Categories</h3>
        {categories.map((category) => (
          <label key={category} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={selectedFilters.categories.has(category)}
              onChange={() => onFilterChange("categories", category)}
              className="form-checkbox h-5 w-5 text-accent"
            />
            <span className="text-primary-foreground">{category}</span>
          </label>
        ))}
      </div>

      {/* Tags Filter */}
      <div className="flex flex-col">
        <h3 className="text-primary-foreground font-bold mb-2">Tags</h3>
        {tags.map((tag) => (
          <label key={tag} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={selectedFilters.tags.has(tag)}
              onChange={() => onFilterChange("tags", tag)}
              className="form-checkbox h-5 w-5 text-accent"
            />
            <span className="text-primary-foreground">{tag}</span>
          </label>
        ))}
      </div>

      {/* Rating Range Filter */}
      <div className="flex flex-col">
        <h3 className="text-primary-foreground font-bold mb-2">Rating Range</h3>
        <input
          type="range"
          min="0"
          max="5"
          step="0.1"
          value={selectedFilters.ratingRange[0]}
          onChange={(e) => onFilterChange("ratingRange", [Number(e.target.value), selectedFilters.ratingRange[1]])}
          className="w-full"
        />
        <input
          type="range"
          min="0"
          max="5"
          step="0.1"
          value={selectedFilters.ratingRange[1]}
          onChange={(e) => onFilterChange("ratingRange", [selectedFilters.ratingRange[0], Number(e.target.value)])}
          className="w-full"
        />
        <span className="text-primary-foreground">
          Rating: {selectedFilters.ratingRange[0]} - {selectedFilters.ratingRange[1]}
        </span>
      </div>
    </div>
  );
}
