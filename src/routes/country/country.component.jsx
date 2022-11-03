import { useContext } from "react";
import { CountriesContext } from "../../context/countries.context";
import { ColorContext } from "../../context/color.context";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

import "./country.styles.scss";
import Borders from "../../components/borders/borders.component";

const Country = () => {
  const { isDark } = useContext(ColorContext);
  const { country } = useParams();
  let { countries } = useContext(CountriesContext);
  if (countries.length > 1) {
    countries = countries.filter((countri) => countri.name.common == country);
  }
  const getInfo = (obj) => {
    let data = Object.keys(obj);
    if (data.length > 1) {
      if (obj[data[0]].hasOwnProperty("common")) {
        return data.map((el) => obj[el].common).join(", ");
      }
      return data.map((el) => obj[el]).join(", ");
    }
    if (obj[data].hasOwnProperty("name")) return obj[data].name; //Currencies
    if (obj[data].hasOwnProperty("common")) return obj[data].common; //Native Name

    return obj[data];
  };

  return (
    <div className={`full-country-container ${!isDark ? "light" : "dark"}`}>
      <div className={`country-container ${!isDark ? "light" : "dark"}`}>
        <Link to="/">
          <FaLongArrowAltLeft className="arrow-icon" /> Back
        </Link>
        {countries.map(
          (
            {
              flags: { png },
              population,
              region,
              subregion,
              capital: [capital],
              tld: [tld],
              name: { common: name },
              currencies,
              languages,
              name: { nativeName },
              borders,
            },
            id
          ) => (
            <div className="country-info-container" key={id}>
              <div className="img-country-container">
                <img src={png} alt="" className="img-info" />
              </div>
              <div className={`info-1 ${!isDark ? "light" : "dark"}`}>
                <h2>{name}</h2>
                <p>
                  <b>Native Name:</b> {getInfo(nativeName)}
                </p>
                <p>
                  <b>Population:</b> {population.toLocaleString("en-US")}
                </p>
                <p>
                  <b>Region:</b> {region}
                </p>
                <p>
                  <b>Sub Region:</b> {subregion}
                </p>
                <p>
                  <b>Capital:</b> {capital}
                </p>
              </div>
              <div className={`info-2 ${!isDark ? "light" : "dark"}`}>
                <p>
                  <b>Top Level Domain:</b> {tld}
                </p>
                <p>
                  <b>Currencies:</b> {getInfo(currencies)}
                </p>
                <p>
                  <b>Languages:</b> {getInfo(languages)}
                </p>
              </div>
              <div className={`info-3 ${!isDark ? "light" : "dark"}`}>
                <h3>
                  Border Countries:{" "}
                  {!borders && `${name} does not have borders`}
                </h3>
                <div className="borders-container">
                  {borders && <Borders borders={borders} />}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Country;
