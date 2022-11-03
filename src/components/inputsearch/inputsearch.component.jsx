import { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";

import { CountriesContext } from "../../context/countries.context";

import "./inputsearch.style.scss";
import { ColorContext } from "../../context/color.context";

const InputSearch = () => {
  const { setCountries, setHandError } = useContext(CountriesContext);
  const [inputSearch, setinputSearch] = useState("");
  const { isDark } = useContext(ColorContext);

  //input search
  const handleInput = ({ target }) => {
    setinputSearch(target.value);
  };

  //search for a country
  const searchCountry = async (e) => {
    e.preventDefault();
    if (inputSearch.length > 3) {
      const response = await axios
        .get(`https://restcountries.com/v3.1/name/${inputSearch}`)
        .catch(setHandError("error"));
      const { data } = response;
      setHandError(null);
      setCountries(data);
      setinputSearch("");
    } else {
      const response = await axios
        .get(`https://restcountries.com/v3.1/alpha/${inputSearch}`)
        .catch(setHandError("error"));
      const { data } = response;
      setHandError(null);
      setCountries(data);
      setinputSearch("");
    }
  };

  return (
    <>
      <form onSubmit={searchCountry} className="form">
        {inputSearch.length < 1 && <FaSearch className="search-icon" />}
        <input
          type="text"
          placeholder="Search for a country..."
          className={`input-search ${isDark ? "dark" : "light"}`}
          onChange={handleInput}
          value={inputSearch}
        />
      </form>
    </>
  );
};

export default InputSearch;
