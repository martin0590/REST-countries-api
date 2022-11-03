import { useEffect, useState } from "react";

import axios from "axios";
import "./borders.styles.scss";

const Borders = ({ borders }) => {
  const bordersArray = [];
  const [bordersCountry, setBordersCountry] = useState([]);

  useEffect(() => {
    const getBorders = async () => {
      for (let i = 0; i < borders.length; i++) {
        const resp = await axios.get(
          `https://restcountries.com/v3.1/alpha/${borders[i]}`
        );
        const { nani } = resp;
        const {
          data: [
            {
              name: { common },
            },
          ],
        } = resp;
        bordersArray.push(common);
      }
      setBordersCountry(bordersArray);
    };
    getBorders();
  }, []);

  return bordersCountry.map((border, id) => (
    <ul key={id}>
      {" "}
      <li>{border} </li>
    </ul>
  ));
};

export default Borders;
