import React from 'react'
import Item1 from '../../assets/img/Item1.png'
import cafeimg1 from '../../assets/img/cafeimg1.jpg'
import cafeimg2 from '../../assets/img/cafeimg2.jpg'
import cafeimg3 from '../../assets/img/cafeimg3.jpg'
export default function Items() {
  return (
    <div className='container py-3 py-md-5 mt-3 text-blue'>
      <h1 className='text-center'>Sip, Savour, Repeat</h1>

      <div className="row text-center justify-content-center py-3 py-md-4 p-0">
        <div className=" col-6 p-1">
          <img src={cafeimg3} alt="" className='img-fluid rounded-3' />
        </div>
        <div className=" col-6 p-1">
          <img src={cafeimg2} alt="" className='img-fluid rounded-3 ' />
        </div>
        <div className=" col-6 p-1">
          <img src={cafeimg1} alt="" className='img-fluid rounded-3 ' />
        </div>
        <div className=" col-6 p-1">
          <img src={Item1} alt="" className='img-fluid rounded-3 ' />
        </div>
      </div>
    </div>
  )
}
