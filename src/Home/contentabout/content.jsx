import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './content.css'
import { Link } from 'react-router-dom';
const Content=()=>{
  function Scrolltop(){
    window.scrollTo(0,0)
}
  return (
    <div className=' d-flex  flex-column justify-content-center  p-4  mt-lg-4' id='abouthomepage'>
       <div className='container'>
       <p> In a world rife with challenges,the emergence of socially conscious organizations
         has become a beacon of hope. One such budding organization that has been diligently
          working towards the betterment of society is Naseem Shams Foundation.</p> 
          <p>Established with a vision to create positive and sustainable change in the society and to 
           contribute to social betterment and welfare, Naseem Shams Foundation has embarked 
           on a journey that transcends philanthropy, aiming to address the root causes of 
           our societal <Link onClick={Scrolltop} href='' to='/about' className='' id='readmoreabout'>Read More</Link></p>
           
       </div>
       
    </div>
  )
}
export default Content;
