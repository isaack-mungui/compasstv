import React, { useEffect, useState } from 'react'
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
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://compasstv-production.up.railway.app/auth")
    .then((res) => {
      if (res.ok) {
        res.json().then((user) => setUser(user))
      }
    })
  }, [])

  function handleSignIn(user) {
    setUser(user)
  }

  // if (user) {
  //   return <h2>Welcome, {user.username}!</h2>
  // } else {
  //   return <SignIn onSignIn={setUser} />
  // }

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn onSignIn={handleSignIn}/>} />
      </Routes>
      <BrandSubscribe />
      <CreatorConnect />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
