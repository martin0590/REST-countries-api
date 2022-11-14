import { useContext } from "react";

import { CountriesContext } from "../../context/countries.context";
import { useNavigate } from "react-router-dom";

import "./countryitem.styles.scss";
import { ColorContext } from "../../context/color.context";

const CountryItem = () => {
  const { countries } = useContext(CountriesContext);
  const { isDark } = useContext(ColorContext);
  const navigate = useNavigate();
  const handleNavigate = (country) => {
    navigate(country);
  };
  return (
    <div className="countries-container">
      {countries.map((country, id) => (
        <div
          key={id}
          className={`country ${isDark ? "dark" : "light"}`}
          onClick={() => handleNavigate(country.name.common)}
        >
          <img
            src={country.flags.png}
            alt={country.name.common}
            className="img"
          />
          <div className={`text-container ${isDark ? "dark" : "light"}`}>
            <h3>{country.name.common}</h3>
            <p>
              <b>Population:</b> {country.population.toLocaleString("en-US")}{" "}
            </p>
            <p>
              <b>Region:</b> {country.region}
            </p>
            <p>
              <b>Capital:</b> {country.capital[0]}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountryItem;
