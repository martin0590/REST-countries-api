import { useContext, useState } from "react";
import { CountriesContext } from "../../context/countries.context";
import Select from "react-select";
import InputSearch from "../inputsearch/inputsearch.component";
import "./filteritem.styles.scss";
import { ColorContext } from "../../context/color.context";

const options = [
  { value: "Africa", label: "Africa" },
  { value: "Americas", label: "Americas" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "Oceania", label: "Oceania" },
  { value: "Reset", label: "Reset" },
];

const FilterItem = () => {
  const { setCountries, initialState, setHandError } =
    useContext(CountriesContext);
  const { isDark } = useContext(ColorContext);
  let filteredCountries = [];

  const handleChange = ({ value }) => {
    if (value === "Reset") setCountries(initialState);
    filteredCountries = initialState.filter(
      (country) => country.region === value
    );
    if (filteredCountries.length === 0) return;
    setCountries(filteredCountries);
  };

  const stylesDark = {
    option: (provided, state) => ({
      ...provided,
      fontWeight: "700",
      color: state.isSelected ? "red" : "white",
      backgroundColor: "#2b3945",
      fontSize: "14px",
      padding: 10,
      ":hover": { backgroundColor: "#202c37" },
    }),

    control: (provided, state) => ({
      ...provided,
      width: "13rem",
      height: "3.5rem",
      color: state.isSelected ? "white" : "#202c37",
      border: state.isActive ? "1px solid #202c37" : "1px solid #202c37",
      border: state.isFocused ? "1px solid #202c37" : "1px solid #202c37",
      borderColor: "gray",
      backgroundColor: "#2b3945",
      ":hover": { borderColor: "#959595" },
    }),

    menu: (provided, state) => ({
      ...provided,
      width: "13em",
      padding: 15,
      color: "white",
      border: "0.5px solid #202c37",
      backgroundColor: "#2b3945",
    }),

    placeholder: (defaultStyles) => {
      return {
        ...defaultStyles,
        color: "#c8c8c8",
      };
    },

    singleValue: (provided, state) => ({
      ...provided,
      color: "white",
    }),
  };

  const stylesLight = {
    option: (provided, state) => ({
      ...provided,
      fontWeight: "700",
      color: state.isSelected ? "red" : "#111517",
      backgroundColor: "white",
      fontSize: "14px",
      padding: 10,
      ":hover": { backgroundColor: "#bbb" },
    }),

    control: (provided, state) => ({
      ...provided,
      width: "13rem",
      height: "3.5rem",
      border: state.isActive ? "1px solid lightgray" : "1px solid lightgray",
      border: state.isFocused ? "1px solid lightgray" : "1px solid lightgray",
      borderColor: "white",
      ":hover": { borderColor: "#959595" },
    }),

    menu: (provided, state) => ({
      ...provided,
      width: "13em",
      padding: 15,
      border: "0.5px solid lightgray",
    }),
  };

  return (
    <div className="filter-items">
      <InputSearch />
      <Select
        name="region"
        id="filter-region"
        styles={isDark ? stylesDark : stylesLight}
        options={options}
        placeholder="Filter by Region"
        onChange={handleChange}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary25: "neutral130",
            primary: "neutral130",
          },
        })}
      />
    </div>
  );
};

export default FilterItem;
