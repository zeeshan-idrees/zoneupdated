import React from 'react'
import logothrill from '../../assets/img/logothrill.png';
import facebook from '../../assets/img/facebook.svg'

import insta from '../../assets/img/insta.jpg'
import phone from '../../assets/img/phone.svg'
import { NavLink } from 'react-router-dom'
import './footer.css'
export default function index() {
  return (
    <div className='container-fluid footer-outline pt-4 p-0 m-0 bg-dark text-light'>
      <div className=" footer-bg pt-5">
        <div className="container p-2 pt-4">
          <div className="row  m-0 ps-4 justify-content-between">
            <div className="col-lg-4 col-md-6 py-4 ps-5">
              <img className='w-50' src={logothrill} alt="" />
              <h1 className=' fs-30  text-white  py-1'>Unleash The Thrill</h1>
              <div className="d-flex flex-wrap gap-3">
                <a href="https://web.facebook.com/thrillzone.pk/" target="_blank">
                  <img src={facebook} alt="" className='p-1 bg-white footer-icons' />
                </a>
                <a href="https://www.instagram.com/thrillzone.pk/" target="_blank">
                  <img src={insta} alt="" className='p-1 bg-white footer-icons' />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 py-4 ps-5 ">
              <h1 className=' fs-30  text-white  py-1'>Address</h1>
              <p className='fs-5'>Penta Sqaure Phase 5 DHA Lahore</p>
              <div className="d-flex gap-3">
                <img src={phone} alt="" className='p-1 bg-white footer-icons' />
                <p className='fs-5'>+92 328 0707853</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 d-md-flex d-lg-block justify-content-md-between align-items-md-center py-4 ps-5 ">
              <h1 className="fs-30 mb-0 text-white  py-1">Links</h1>
              <NavLink to='/' className="font-poppins footer-link fw-bold py-1" >Home</NavLink>

              <NavLink to='/Deals' className="font-poppins footer-link  fw-bold py-1" >Deals</NavLink>

              <NavLink to='/Birthday' className="font-poppins footer-link  fw-bold py-1 ">Birthday Party</NavLink>
              <NavLink to='/Gallery' className="font-poppins footer-link fw-bold py-1">Gallery</NavLink>
              <NavLink to='/Cafe' className="font-poppins footer-link  fw-bold  py-1">Cafe</NavLink>
              <NavLink to='/Contact-us' className="font-poppins footer-link  fw-bold  py-1">Contact</NavLink>


            </div>
            <div className="">
              <hr className="my-4 bg-white" />
            </div>
            <p className="fs-18 fw-500 font-poppins-500 text-white text-center">Copyright © {new Date().getFullYear()} Thrill Zone Entertainment Center. All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  )
}

