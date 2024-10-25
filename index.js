import React from 'react';
import ReactDOM from 'react-dom'; 
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import StoreContextProvidere from './context/StoreContext.jsx'
ReactDOM.createRoot(document.getElementById('root')). render(
  
    <BrowserRouter>
    <StoreContextProvidere>
      <App/>

    </StoreContextProvidere>
   
    </BrowserRouter>
 
);
