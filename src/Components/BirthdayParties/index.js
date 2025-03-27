import React from 'react'
// import about from '../../assets/img/about.jpg';
import cartoonimg from '../../assets/img/cartoonimg.png';
import './Bd.css'
export default function Birthday() {
  return (

    <div className=" justify-content-center text-blue font-poppins-500">
      <div className="container">
        <div className="row  px-0 px-md-4 py-3  mb-3">
          <div className="col-12 col-lg-6 col-md-6">
            <h3 className="fw-bold introduction-heading">Welcome to Thrill Zone – Lahore’s Ultimate Indoor Play Park!</h3>
            <p className="introduction-text">Thrill Zone, an international sensation that has delighted families since 2012, has finally landed in Lahore! After conquering hearts in Dubai and Abu Dhabi, we’re here to bring the same exhilarating fun and adventure to Pakistan.
              Step into one of tThrill Zone, a global favorite since 2012, has arrived in Lahore! After success in Dubai and Abu Dhabi, we're bringing exciting fun to Pakistan. </p>
            <p className="introduction-text ">Our massive indoor park features a multi-level Soft Play Area with slides, ball pits, rock climbing, and a thrilling Trampoline Area.

Enjoy adrenaline-pumping Arcade Games, a Ninja Course, Bumper Cars, and a Toddler’s Play Patch for little ones. Host memorable birthday parties in our special area, and refuel at Thrill Café with premium coffee and snacks.

Thrill Zone is your destination for fun, adventure, and unforgettable family memories!</p>
            



          </div>
          <div className="bus-image col-12 col-lg-6 col-md-6">
            <img src={cartoonimg} width="100% " alt='' />
          </div>

        </div>
      </div>
      <div className="">
        {/* <div className='p-2 text-center parties-image '>
          <img src={about} alt="" className=' rounded-5 img-fluid' />
        </div> */}
      </div>
    </div>
  )
}
