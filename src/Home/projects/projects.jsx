import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './projects.css'
import 'animate.css/animate.min.css';
import CountUp from 'react-countup';

const Projects=()=> {
  return (
   
     <div className='container mt-2' >
      <div className='row gx-3 gy-3 text-center'>
        <div className='col-6 col-md-4'>
          <div className='project-card'>
            <h3>Volunteers</h3>
            <h4>
               <CountUp enableScrollSpy delay={0.3} end={105342} duration={6}/>
            </h4>
          </div>
        </div>
        <div className='col-6 col-md-4'>
          <div className='project-card'>
            <h3>Reg Team</h3>
            <h4>
            <CountUp enableScrollSpy delay={0.3} end={535} duration={6}/>
            </h4>
          </div>
        </div>
        <div className=' col-6 col-md-4'>
          <div className='project-card'>
            <h3>Blood Donations</h3>
            <h4>
            <CountUp enableScrollSpy delay={0.3} end={20074} duration={6}/>
            </h4>
          </div>
        </div>
        <div className='col-6 col-md-4'>
          <div className='project-card'>
            <h3>Student Fee Cases</h3>
            <h4> 
               <CountUp enableScrollSpy delay={0.3} end={127} duration={6}/>
            </h4>
          </div>
        </div>
        <div className='col-6 col-md-4'>
          <div className='project-card'>
            <h3>Cancer Cases</h3>
            <h4>
            <CountUp enableScrollSpy delay={0.3} end={115} duration={6}/>
            </h4>
          </div>
        </div>
        <div className='col-6 col-md-4'>
          <div className='project-card'>
            <h3>Households Served</h3>
            <h4>
            <CountUp enableScrollSpy delay={0.3} end={267} duration={6}/>
            </h4>
          </div>
        </div>
      </div>
    </div>
 );
  
  
}
export default Projects;