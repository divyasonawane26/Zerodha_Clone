import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import HomePage from './landing_page/home/HomePage';
import Pricing_page from './landing_page/pricing/Pricing_page';
import AboutPage from './landing_page/about/AboutPage';
import Signup from './landing_page/signup/Signup';
import ProductPage from './landing_page/product/ProductPage';
import SupportPage from './landing_page/support/SupportPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/pricing' element={<Pricing_page/>}/>
    <Route path='/about' element={<AboutPage/>}/>
    <Route path='/product' element={<ProductPage/>}/>
    <Route path='/support' element={<SupportPage/>}/>


  </Routes>
  </BrowserRouter>
);


