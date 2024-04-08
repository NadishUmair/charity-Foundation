import React, {useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './activities.css'

import activitiescontent from './activitiescontent';

const Activities = () => {
  useEffect(() => {
    AOS.init();
  }, [])

    const [show,setShow]=useState(activitiescontent.map(()=>false))

    const handletoggle=(id)=>{
        const newshow=[...show];
        newshow[id]=!newshow[id]
        setShow(newshow);
    }
   

  return (
    <div className='container mt-4' id='activities' data-aos="fade-up" data-aos-duration="1500">
      <h3 className='text-center '>Our Activities</h3>
      <div className=' d-md-flex   justify-content-between flex-wrap mt-4  m-0' >
      {
        activitiescontent.map((item,id)=>{
        return(
        <div class=" col-sm-12 col-md-4 mb-4"  key={item.id} id='activitybox' >
     <div class="card mx-3 p-4 " id='cardacti'>
      <div className='text-center fs-1'>
      {item.icon}
      </div>
    <h5 class="mt-1 ">{item.title}</h5>
    <p>
           {show[id]? item.description: `${item.description.slice(0,98)}...`}
           <button className={show[id]? 'showless ':'showmore'} onClick={()=>handletoggle(id)}>
            {show[id]?'showless':'showmore'}
           </button>
          </p>
   
      </div>
       </div>
       
   
       
        )
        })
      }
    </div>
    </div>
   
   
  )
}
export default Activities;