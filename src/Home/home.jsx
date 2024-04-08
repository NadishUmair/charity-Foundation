import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import Herosection from './herosection/herosection';
import Projects from './projects/projects';
import Story from './storiespage/story';
import Mou from './mousign/mou';
import Content from './contentabout/content';
import Membership from './membership/membership';
import Activities from './activities/activities';

 

const Home=()=> {
  useEffect(() => {
    AOS.init();
  }, [])
  
  
  return (
    <>
    <div>
    <Herosection />
    </div>
    <div data-aos="fade-up"  data-aos-duration="1500">
    <Projects />
    </div>
    <div data-aos="fade-up"  data-aos-duration="1500">
    <Content />
    </div>
    <div data-aos="fade-up"  data-aos-duration="1500">
    <Mou />
    </div>
    <div data-aos="zoom-in"  data-aos-duration="1500">
    <Membership />
    </div>
    <div data-aos="fade-up"  data-aos-duration="1500">
    <Story />
    </div>
    <div data-aos="fade-up"  data-aos-duration="1500">
    <Activities />
    </div>
   
    </>
  )
}

export default Home;

