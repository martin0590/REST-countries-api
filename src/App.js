import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import NavBar from './components/navigation/navbar.component';
import Country from './routes/country/country.component';

import "./App.scss";

function App() {

  return (
        <Routes>
          <Route path='/REST-countries-api' element={<NavBar />}>
              <Route index element={<Home />}/>
              <Route path='/REST-countries-api/:country' element={<Country />}/>
          </Route>
        </Routes>
    )
}

export default App;
