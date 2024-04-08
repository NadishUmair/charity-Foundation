import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './navbar.css'
import { FaDroplet } from "react-icons/fa6";
import 'animate.css/animate.min.css';
const Navbar=()=> {
  return (
   <>
   <nav class="navbar navbar-expand-lg " id='navcolor'>
  <div class="container-fluid">
    <Link to='/' class="navbar-brand " href="#" id='logo'></Link>
    <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon " id='toggler'></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarScroll">
     <div className='d-md-flex justify-content-center w-100 '>
     <div class="navbar-nav w-100 d-md-flex justify-content-end align-items-md-center 
    me-auto me-lg-0   "  id='links'>
       
        <li class="nav-item me-4 mt-2   ">
          <Link class="nav-link" aria-current="page" to="/" >Home</Link>
        </li>
        <li class="nav-item me-4 mt-2 ">
          <Link class="nav-link" to="/about" >About Us</Link>
        </li>
        <li class="nav-item me-4 mt-2">
          <Link class="nav-link" to='/activities' >Our Activities</Link>
        </li>
        
        <li class="nav-item me-4 mt-2">
        <Link class="nav-link text-danger" to="/blood" >Naseem Shams Donar Club <FaDroplet className='animate__animated animate__fadeInDown animate__infinite animate_delay_4s' /></Link>
        </li>
        <li className='nav-item mt-2'>
        <Link to="/donation" className='btn mt-2 mt-lg-0  fw-bold contact-btn animate__animated animate__pulse animate__infinite' type='button'>Donate</Link>
        </li>
      
      </div>
     
     </div>
      
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar;