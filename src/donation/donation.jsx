import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './donation.css'
const Donation=()=> {
  return (
    <div className=''>
       
        <div className='container border d-flex flex-column justify-content-center  ' id='donation'>
            <div className='d-flex align-items-center  justify-content-between'>
            <div className=''>
                <div className='account-icons' id='easypaisa'></div>
              
            </div> 
            <div className=' '>
                <div className='account-icons' id='jazzcash'></div>
               
            </div> 
            <div className=' '>
                <div className='account-icons' id='bankaccount'></div>
            </div> 
            </div>
        </div>

    </div>
  )
}
export default Donation;
