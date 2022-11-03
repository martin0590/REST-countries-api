import { createContext, useState, useEffect } from "react";

import axios from "axios";

const mainPage = [
  "Ghana",
  "germany",
  "usa",
  "brazil",
  "iceland",
  "afghanistan",
  "new zealand",
  "albania",
  "algeria",
  "Belgium",
];

export const CountriesContext = createContext({
  countries: [],
  setCountries: () => {},
  handError: null,
  setHandError: () => {},
});

export const CountriesProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [initialState, setInitialState] = useState([]);
  const [handError, setHandError] = useState(null);
  useEffect(() => {
    async function getCountry() {
      let countriesArray = [];
      for (let i = 0; i < mainPage.length; i++) {
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${mainPage[i]}`
        );
        const { data } = response;
        const [country] = data;
        countriesArray.push(country);
      }
      setCountries(countriesArray);
      setInitialState(countriesArray);
    }
    getCountry();
  }, []);

  const value = {
    countries,
    setCountries,
    initialState,
    setInitialState,
    handError,
    setHandError,
  };

  return (
    <CountriesContext.Provider value={value}>
      {children}
    </CountriesContext.Provider>
  );
};
