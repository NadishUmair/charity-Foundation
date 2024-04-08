import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './story.css'
import 'animate.css/animate.min.css';
import { Link } from 'react-router-dom';


const Story=()=> {
  return (
    <div className=' mt-4  p-4 d-flex flex-column justify-content-center ' id='stories'>
     
       <div className=' row  m-0  container p-0  p-md-4'>
       <h4 className='text-center custom-color fw-bold '>Donation Appeal</h4>
       <div className=' col-md-6 mt-4 '>
       <p>"In Dheer Kot, Azad Kashmir, there is a family facing significant challenges. The household consists of a father, who is the head of the family, two sons, and a daughter. Unfortunately, all three children were born with disabilities, requiring constant care and attention.
        Regrettably, the father is unable to work due to the demanding responsibility of caring for his disabled children. <br /> The family is struggling to make ends meet as the expenses associated with the children's conditions are substantial, far exceeding their current income.
        In light of these difficult circumstances, we earnestly appeal for your compassionate assistance in supporting this family. <br /> Your contribution can make a meaningful difference in alleviating their financial burden and ensuring that the necessary care and resources are available for the well-being of the children.
        Thank you for considering this heartfelt plea, and any support you can provide will be immensely appreciated by the family in Dheer Kot, Azad Kashmir."</p>
        <Link to='donation' className='btn px-4 py-1 mt-2 mt-lg-0  fw-bold contact-btn animate__animated animate__pulse animate__infinite' type='button'>Donate</Link>
       </div>
       <div className='mt-4 mt-md-0 d-md-flex flex-column align-items-end  col-md-6 ' id='storyimgcontainer'>
       <div className='  w-75' id='storyimgs'>
       <div className=' child3 childimg '></div>
       <div className=' child1 childimg '></div>
        {/* <div className=' child2 childimg '></div> */}
       </div>
      
      
       </div>
       
       </div>
      
      
      
      </div>
   

     
       
  
  )
}
export default Story;
