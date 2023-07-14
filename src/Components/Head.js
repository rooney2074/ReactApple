import React, { useEffect } from 'react'
import { Button } from '@mui/material'
import  Delete  from '@mui/icons-material/ArrowBack';
import './style.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Head() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='container'>
        <div className='p-5 text-light mt-5'>
          <div className='row py-md-2 mx-auto mt-5 mb-5' data-aos='fade-up'>
            <div className="col-md-7 mt-5">
            <h1 className='Unlock' style={{fontSize:'80px'}}>UNLOCK</h1>
            <h2 className='Unlock'>APPLE MUSIC</h2>
            <h6 className='Unlock'>UPTO 3 MONTHS <Button className='ColorButton' style={{borderRadius:'20px', color:'white'}} variant='contained'>FREE</Button></h6>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, nulla? Assumenda impedit maiores adipisci sequi nobis odit molestiae quod enim, veniam eos, deleniti, dignissimos expedita quis cum optio natus aut.</p>
        
            </div>
            <div className="col-md-5"></div>
          </div>
            </div>
    </div>
  )
}

export default Head