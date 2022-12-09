import React from 'react'
import { ReactDOM } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar';
import BrandSubscribe from './components/Subscribe/BrandSubscribe'
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn'

// import './App.css';
import CreatorConnect from './components/CreatorConnect/CreatorConnect';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
