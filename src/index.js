import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';
import App from './App';
import { GridLoader } from 'react-spinners';


const Mainapp=()=>{
const [loading,setloading]=useState(true);
setTimeout(()=>{
    setloading(false)
},3000)
   


return (
    <React.StrictMode>
      {loading ? (
       <div id='loader'>
        <div className='d-flex flex-column justify-content-center align-items-center w-75'>
        <GridLoader color='rgb(255,165,0)' />
         <h1 className='text-center'>Welcome to Naseem Shams Foundation</h1>
        </div>
       </div>
       ) : (
         <App />
      )}
    </React.StrictMode>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Mainapp/>)
