import { useContext } from "react";

import { ColorContext } from "../../context/color.context";
import { CountriesContext } from "../../context/countries.context";
import FilterItem from "../../components/filteritem/filteritem.component";
import CountryItem from "../../components/countryItem/countryitem.component";

import "./home.style.scss";

function Home() {
  const { isDark } = useContext(ColorContext);
  const { handError } = useContext(CountriesContext);
  return (
    <div className={`full-container ${!isDark ? "light" : "dark"}`}>
      <div className={`full-content-container ${!isDark ? "light" : "dark"}`}>
        <FilterItem />
        {handError && (
          <div className="wrapper-error">
            <h1 className="error-handling">No country with than name</h1>
          </div>
        )}
        {!handError && <CountryItem />}
      </div>
    </div>
  );
}

export default Home;
