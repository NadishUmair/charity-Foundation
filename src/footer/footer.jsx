import React, {useEffect, useState } from 'react'
import { Link,useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './footer.css'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

const Footer=()=> {
  function Scrolltop(){
         window.scrollTo(0,0)
     }
   useEffect(() => {
      AOS.init();
    }, [])

  return (
    <div data-aos="fade-up "  data-aos-duration="1500">
    <div className='row  m-0 px-2 py-4 p-md-4 ' id='footer'>
          <div className=' col-md-4 footer-card'>
             <div className='m-0 p-0 '>
             <Link to='/' class="navbar-brand " onClick={Scrolltop} href="#"><div id='logo'></div></Link>
                <p className=' p-0  footer-text '>Naseem Shams Foundation Pakistan,a non-profit organization that strives
                    to empower the youth of Pakistan by providing them with opportunities and 
                    resources in various sectors. our organization was founded by our Chairman Ahtasham Ul Haq in 2023, who leads 
                    in enthusiastic team with optimism and faith under the motto <br /> <span className='custom-color'> "Allah Loves the Doers of Good"</span>
                </p>
             </div>
             </div>
        
       
        <div className='col-md-4 pl-2 footer-card'>
            <h2 className='p-0'>Quick Links</h2>
            <ul className='p-0' id='navlinks'>
            <li><Link onClick={Scrolltop} to='/' className='link' ><FaLongArrowAltRight className='arrow'/>Home</Link></li>
            <li><Link onClick={Scrolltop} to='/about' className='link'><FaLongArrowAltRight className='arrow'/>About Us</Link></li>
            <li><Link onClick={Scrolltop} to='/activities' className='link'><FaLongArrowAltRight className='arrow'/>Our Activities</Link></li>
            <li><Link onClick={Scrolltop} to='/Blood' className='link'><FaLongArrowAltRight className='arrow'/>Blood Donation</Link></li>
            
            <li><Link to='/donation' className='link'><FaLongArrowAltRight className='arrow'/>Donate</Link></li>
            </ul>
        </div>
        <div className='col-md-4  footer-card mt-2 pl-2'>
             <h2>Contact Us</h2>
             <ul className='p-0 '>
                <a href=" https://wa.me/03352791070" target='_blank' className='' ><FaWhatsapp className='social-icon m-0'/></a>
                <a href="https://instagram.com/naseemshams_foundation?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" target='_blank' ><FaInstagram className='social-icon'/></a>
                <a href="https://www.facebook.com/profile.php?id=100095349254722&mibextid=ZbWKwL" target='_blank' ><FaFacebookF className='social-icon'/></a>
                <a href="https://twitter.com/NaseemSF?t=GSq2RCB_aLVjvWNB4y40aA&s=08" target='_blank' ><BsTwitterX className='social-icon'/></a>
             </ul>
        </div>
        
        </div>
        <div className='text-center p-0 ' id='footerend'>
        <h6 className='m-0 p-4 text-light copy-right'>&copy; 2023 <span className='custom-color'> Naseem Shams Foundation</span>. All rights reserved.</h6>
        </div>
        </div>
       
      

   
  )
}
export default Footer;
