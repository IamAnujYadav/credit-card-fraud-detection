import React, { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Features from './Components/Features/Features'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Transaction from './Components/Transaction/Transaction'
import Login from './Components/Login/Login'
import Dashboard from './Components/Dashboard/Dashboard'
import Report from './Components/Report/Report'

const App = () => {
  const [playState, setPlayState] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  // Hide Navbar on /login and /transaction
  const hideNavbar = location.pathname === '/login' || location.pathname === '/transaction';

  return (
    <>
      {!hideNavbar && <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Hero />
              <div className="container">
                <Title subtitle='OUR FEATURES' title='What We Offer' />
                <Features />
                <Title subtitle='REPORTS' title='Fraud Detection Reports' />
                <Report />
                <Title subtitle='Dashboard' title='Your Transaction Insights' />
                <Dashboard />
                <About setPlayState={setPlayState} />
                <Title subtitle='CONTACT US' title='Get in Touch' />
                <Contact />
                <Footer />
              </div>
            </div>
          }
        />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/transaction" element={<Transaction />} />
      </Routes>
    </>
  )
}

export default App;