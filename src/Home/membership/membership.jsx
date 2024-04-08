import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './membership.css'
const  Membership=()=> {
  return (
    <div className='p-4 m-0 d-flex flex-column justify-content-center align-items-center mt-4' id='joinus'>
      <div className='container w-75 text-center '>
      <div className='' id='joincontent'>
       <h4><span className='fw-bold  '>Join Us</span></h4>
         <h3 className='custom-color fw-bold'>Become a Member!!</h3>
       </div>
        <div className='' id='membercontent'>
        <h3 className='fs-6  p-md-4'>To sow the seed of transformation, and don't underestimate the incredible
            impact your membership have. we have numerous volunteers in overall Pakistan from
            different areas. If you want to become a part of our organization contact us.
          </h3>
        </div>
        </div>
      </div>
        
  )
}
export default Membership;