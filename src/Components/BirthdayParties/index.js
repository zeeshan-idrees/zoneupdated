import React from 'react'
import party from '../../assets/img/partyarea.jpg'

import './Bd.css'
export default function Birthday() {
  return (
   
      <div className="row justify-content-center text-blue font-poppins-500">
        <div className="col-md-6">
         <div className='p-2 text-center parties-image '>
         <img src={party} alt="" className=' rounded-5 img-fluid' />
         </div>
        </div>
        <div className="col-md-6 py-3 pt-md-5 ">
            <p className=' memories-section'>Createing Memories with</p>
            <h1 className=' fw-bold birthday-contnet'>Birthday Parties</h1>
            
          <p className=' surprise-content'>Thrill Zone is sure to have a surprise waiting around every corner and is perfect for birthday parties, team buildings and other special events.</p>
          <a href ="http://localhost:3000/Birthday">
            <button className='btn btn-primary book-now-button'>Book Party</button></a>
        </div>
      </div>
  )
}
