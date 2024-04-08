import React from 'react'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FaHandHoldingDroplet } from "react-icons/fa6"
import './blood.css'
import bloodavatar from './bloodavatar.jpg'
import Bloodcontent from './bloodcontent';
import { FaPhoneSquareAlt } from "react-icons/fa"
const Blood=()=> {
  useEffect(() => {
    AOS.init();
  }, [])
 
  return (
    <>
   <div id=' ' >
   <div className=' text-center d-flex flex-column justify-content-center align-items-center m-0 align-items-center   ' id='bloodherosection'>
     <div className=' row align-items-center justify-content-between' data-aos="fade-down" data-aos-duration="1400">
      <h1 className='mt-2 col-md-6  1h-lg bloodheading fw-lighter mb-0' id='boodheading'>GIVE <span  
       className='fw-bold '>THE GIFT OF LIFE</span> BE 
       A <span className='fw-bold'>HERO</span> TODAY</h1>
       <div className='mt-2 d-flex flex-column align-items-center col-md-6' >
        <div id='nsfbldlogo'></div>
        </div>
        </div>
       
         </div>
         <div className='blood-card  m-0' id='bloodcontent'>
          <div className='row'>
          <div className='col-md-9 '>
            {
              Bloodcontent.map((item)=>{
                const{title,description}=item;
               return(
                <div  data-aos="fade-up" data-aos-duration="1400" key={item.id}>
                 <div className='blood-card '>
                 <h3 className='card-heading'>{title}</h3>
                   <p>{description}</p> 
                </div>
               </div>
               )
                
              })


            }
          
           </div>
               <div className='col-md-3 blood-card ' >
                 
                   <div className='text-center'>
                    <h4>Did You know ? <br/>someone needs blood every 2 seconds.Your donation counts!</h4>
                    </div>
            <div>
                    <img src={bloodavatar} className='w-100 h-100 ' alt="" />
            </div>
                <div>

                </div>
            <div  >
              {/* <h4 className='text-center'>Contact at</h4> */}
              {/* <div className='phone-container'><a href="tel:031684712108"><FaPhoneSquareAlt className='phone-icon'/>+92 31684712108</a></div>
              <div className=' phone-container'><a href="tel:03"><FaPhoneSquareAlt className='phone-icon'/>+92 33552791070</a></div> */}
            </div>
                  </div>
           </div>
           <div>

           </div>
         </div>
         </div>
         




   
    </>
  )
}
export default Blood;