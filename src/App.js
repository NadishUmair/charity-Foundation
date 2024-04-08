import React from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css'
import Home from './Home/home';
import Navbar from './navbar/navbar';
import Blood from './bloodDonation/blood';
import Footer from './footer/footer';
import About from './aboutus/about';
import Donation from './donation/donation';
import './index.css'
import Activities from './Home/activities/activities';
import ScrollToTop from "react-scroll-to-top";
import { FaArrowUp } from "react-icons/fa";

function App() {

  return (
    <>
        
    <Router>
    <Navbar/>
    <ScrollToTop  smooth component={<FaArrowUp className='top-icon' />} className=' scrollbox' />
        <Routes> 
          
          <Route path="/" element={<Home/>} />
          <Route path="/Blood" element={<Blood/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Activities" element={<Activities />} />
          <Route path="/Donation" element={<Donation/>} />
        </Routes>
        <Footer />
      </Router>
    
    </>
    
  );
}

export default App;

  