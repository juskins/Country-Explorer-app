import React, { useState } from "react";

const Filters = ({ onSearch, onSort, totalCountries }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [regionFilter, setRegionFilter] = useState("All");

  const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value, regionFilter);
  };

  const handleRegionChange = (e) => {
    setRegionFilter(e.target.value);
    onSearch(searchTerm, e.target.value);
  };

  const handleSortChange = (e) => {
    onSort(e.target.value);
  };

  return (
    <div className="filters">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by country name..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <div className="filter-group">
        <select
          value={regionFilter}
          onChange={handleRegionChange}
          className="border p-1 px-2 border-purple-600"
        >
          {regions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>

        <select
          onChange={handleSortChange}
          defaultValue=""
          className="border p-1 px-2 border-purple-600"
        >
          <option value="" disabled>
            Sort by population
          </option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>

      <div className="results-count">{totalCountries} countries found</div>
    </div>
  );
};

export default Filters;
