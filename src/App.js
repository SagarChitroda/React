import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Product from './Product';
import Header from './Co-Compo/Header';

function Project() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />} >
            <Route path='home' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='product' element={<Product />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Project;
