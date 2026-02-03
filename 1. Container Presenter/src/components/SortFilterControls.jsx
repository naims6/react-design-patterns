import React from "react";

const SortFilterControls = ({ onSortChange, onFilterChange }) => {
  return (
    <div className="flex gap-4">
      <select onChange={(e) => onSortChange(e.target.value)}>
        <option value="name">Sort by name</option>
        <option value="price">Sort by Price</option>
      </select>

      <input
        type="text"
        placeholder="Filter by name"
        onChange={(e) => onFilterChange(e.target.value)}
      />
    </div>
  );
};

export default SortFilterControls;
