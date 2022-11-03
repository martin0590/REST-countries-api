import { useEffect, useState, useContext } from "react";


import Select from 'react-select';

import axios from "axios";

import './home.style.scss';
import { ColorContext } from "../../context/color.context";
import NavBar from "../../components/navigation/navbar.component";
import CountryItem from "../../components/countryItem/countryitem.component";



const mainPage = ['germany','usa', 'brazil','iceland','afghanistan','new zealand','albania','algeria']
const options = [
  {value: 'Africa', label:'Africa' },
  {value: 'Americas', label:'Americas' },
  {value: 'Asia', label:'Asia' },
  {value: 'Europe', label:'Europe' },
  {value: 'Oceania', label:'Oceania' },
]

function Home() {
  const [countries, setCountries] = useState([]);
  const [inputsearch, setInputsearch] = useState('');
  const [initialState, setInitialState] = useState([]);
  useEffect(()=>{
      async function getCountry() {
          let countriesArray = [];
          for(let i = 0; i < mainPage.length;i++){
              const response = await axios.get(`https://restcountries.com/v3.1/name/${mainPage[i]}`);
              const {data} = response;
              const [country] =  data;
              countriesArray.push(country);
          }
          setCountries(countriesArray)
          setInitialState(countriesArray);
      }
      getCountry();
  },[]);

//filter by region
let filteredCountries = [];
  const handleChange = ({value}) => {
      if(value === 'Default'){
        setCountries(initialState);
        return;
      }
      filteredCountries = countries.filter(country => country.region === value);
      if(filteredCountries.length === 0) return;
      setCountries(filteredCountries);
  }
  

//input search
const handleInput = ({target}) => {
  setInputsearch(target.value);
}

//search for a country
const searchCountry = async(e) => {
  e.preventDefault();
  const response = await axios.get(`https://restcountries.com/v3.1/name/${inputsearch}`);
  const {data} = response;
  setCountries(data);
  setInputsearch('');
}
////////////////////////////////////
//light/dark theme switch
const {isDark} = useContext(ColorContext);
///////////////////////////////////

  return (
    <>
      <div className={!isDark ? 'light' : 'dark'}>
      <form onSubmit={searchCountry}>
        <input type="text" placeholder="Search for a country" onChange={handleInput} value={inputsearch}/>
      </form>
        <Select name="region" id="filter-region" options={options} placeholder='Filter by Region' onChange={handleChange}/>
        <CountryItem countries = { countries }/>
      </div>
    </>
  );
}

// export default Home;
