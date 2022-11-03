import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import { ColorProvider } from './context/color.context';
import { CountriesProvider } from './context/countries.context';
import App from './App';

import './index.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ColorProvider>
        <CountriesProvider>
          <App />
        </CountriesProvider>
      </ColorProvider>
    </BrowserRouter>  
  </React.StrictMode>
);

reportWebVitals();
