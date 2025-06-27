import React from "react";

const CountryCard = ({ country }) => {
  return (
    <div className="country-card">
      <div className="flag-container">
        <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
      </div>
      <div className="country-info">
        <h2>{country.name.common}</h2>
        <p>
          <strong>Capital:</strong>{" "}
          {country.capital ? country.capital.join(", ") : "N/A"}
        </p>
        <p>
          <strong>Region:</strong> {country.region}
        </p>
        <p>
          <strong>Population:</strong> {country.population.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
