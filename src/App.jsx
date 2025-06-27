import React, { useState, useEffect } from "react";
import "./App.css";
import Filters from "./components/Filters";
import CountryCard from "./components/CountryCard";
import Loading from "./components/Loading";

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 12;

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,capital,region,flags,population"
        );
        const data = await response.json();
        setCountries(data);
        setFilteredCountries(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching countries:", error);
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const handleSearch = (searchTerm, regionFilter) => {
    let filtered = [...countries];

    if (searchTerm) {
      filtered = filtered.filter((country) =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (regionFilter && regionFilter !== "All") {
      filtered = filtered.filter((country) => country.region === regionFilter);
    }

    setFilteredCountries(filtered);
    setCurrentPage(1); 
  };

  const handleSort = (sortOrder) => {
    const sorted = [...filteredCountries].sort((a, b) => {
      return sortOrder === "asc"
        ? a.population - b.population
        : b.population - a.population;
    });
    setFilteredCountries(sorted);
  };

  // Logic for Pagination 
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = filteredCountries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );
  const totalPages = Math.ceil(filteredCountries.length / countriesPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <h1 className="font-bold text-3xl">Country Explorer</h1>

      <Filters
        onSearch={handleSearch}
        onSort={handleSort}
        totalCountries={filteredCountries.length}
      />

      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="countries-container">
            {currentCountries.length > 0 ? (
              currentCountries.map((country) => (
                <CountryCard key={country.name.common} country={country} />
              ))
            ) : (
              <p>No countries found matching your criteria.</p>
            )}
          </div>

          {filteredCountries.length > countriesPerPage && (
            <div className="pagination">
              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (number) => (
                  <button
                    key={number}
                    onClick={() => paginate(number)}
                    className={currentPage === number ? "active" : ""}
                  >
                    {number}
                  </button>
                )
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
