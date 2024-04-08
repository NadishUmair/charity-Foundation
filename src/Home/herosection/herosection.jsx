import React, {useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './herosection.css'
import 'animate.css/animate.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoCloseCircle } from "react-icons/io5";
import { Link } from 'react-router-dom';

const   Herosection=()=> {
  const [shownote,setshownote]=useState( 
    localStorage.getItem('shownote')!=='false'
  )
   function handlehide(){
    setshownote(false);
    localStorage.setItem('shownote','false');

   }
 
   useEffect(() => {
    AOS.init();
  }, [])
  
  return (
    <div className=' p-4 mb-2 mb-lg-0 position-relative ' id='hero-section'>
  <div className='d-flex d-md-block flex-column justify-content-end    h-100  align-items-end'>
  <h1 className='heroheading offset-md-7 col-md-5  mt-md-4 animate__animated animate__fadeInRight
  animate__slow'>A <span className='c-orange' >Charitable</span> Organization commited to make a postive impact in <span className='c-orange'>Pakistan</span> NSF commited
  to uplifing the lives of individuals and communities across the nation
  </h1>
  </div>
  {
    shownote && 
    <div className='container-fluid d-flex flex-column align-items-center  m-0 position-absolute' data-aos="fade-down"  data-aos-duration="1500" data-aos-delay="3000" id='notification'>
     <div className='row position-relative  align-items-center p-4' id='modal'>
    
    <span className='p-0   d-flex justify-content-end'><button className='btn p-0 m-0  fs-3' onClick={handlehide} ><IoCloseCircle/></button></span>

     <div className='  '>
      <h4 className='text-center fw-bold custom-color'>Appeal For Donation</h4>
    <p> There is a family in Dheer kot, Azad Kashmir, having two sons and one daughter. Three of them are by birth disabled. The head of the family (their father) is unable to work due to taking care of his disable children.
    The expenses of children are very large, and the income is not sufficient.
    We request you to take part in the help of this family.</p>
     <div >
     <Link to='/donation' className='modalbtn'>Donate</Link>
     </div>
     </div>
     
     </div>
      
    </div>
  }
    

       </div>
 
  )
}

export default Herosection;