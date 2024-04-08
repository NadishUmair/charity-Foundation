import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./mou.css"
import Moucontent from './moucontent';

const Mou=()=> {
  return (
   
    <div className=' mt-4'>
        <h4 className='container  text-center  p-2' id='mouheading'>
            Memorandum Of Understanding is signed  between 
            Naseem Shams Foundation and Alam Hospital and Diagonistic center,Kasur
        </h4>

        <div className='d-flex flex-column justify-content-center align-items-center'>
        <div class="row container p-0 m-0 " id='moucontainer'>
         {
            Moucontent.map((card)=>{
                const{id,title,paragraph}=card;
               return(
                <div class="col-12 col-md-6 p-0 mb-sm-0 mt-md-2" key={id} id='moucards'>
                <div class=" card-mou ">
                  <div class="card-body ">
                    <h5 class="card-title custom-title  fw-bold">{title}</h5>
                    <p class="">{paragraph}</p>
                    
                  </div>
                </div>
              </div>
               )
               
               
            })
         }
  
         </div>
        </div>
    </div>
   
  )
}
export default Mou;