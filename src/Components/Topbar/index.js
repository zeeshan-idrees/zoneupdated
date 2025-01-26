import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import './TopBar.css';

const Topbar = () => {
    // State to handle submenu visibility
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

    const toggleSubmenu = () => {
        setIsSubmenuOpen(!isSubmenuOpen);
    };

    return (
        <>
            <nav className="navbar navbar-expand-md sticky-top bg-white pt-3">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        <img src={logo} alt="logo" className='img-fluid w-75' />
                      
                    </NavLink>
                   
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse row justify-content-evenly" id="navbarNavDropdown">
                        <ul className="navbar-nav col-xl-8  d-flex gap-3 justify-content-evenly">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/" activeClassName="active">Home</NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink className="nav-link text-blue" to="/About" activeClassName="active">About Us</NavLink>
                            </li> */}
                            <li className="nav-item">
                                <NavLink className="nav-link text-blue" to="/Birthday" activeClassName="active">Birthday Party</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-blue" to="/SchoolTrips" activeClassName="active">School Trips</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-blue" to="/Deals" activeClassName="active">Deals</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-blue" to="/Gallery" activeClassName="active">Gallery</NavLink>
                            </li>

                            {/* Cafe Dropdown */}
                            <li className="nav-item dropdown" onClick={toggleSubmenu}>
                                
   
                                <NavLink className="nav-link text-blue dropdown-toggle text-blue" to="/Cafe" activeClassName="active">Cafe</NavLink>
   
                                <ul className={`dropdown-menu ${isSubmenuOpen ? 'show' : ''}`}>
                                    <li><NavLink className="dropdown-item" to="/Menu">Menu</NavLink></li>
                                  
                                </ul>
                            </li>
                            
                        </ul>

                        <div className='col-xl-2 pt-2'>
                            <NavLink to='/Contact-us'> 
                                <button className=" top-button rounded-4  btn btn-outline-primary">Contact Us</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="container-fluid">
                <p className="tag-line"> Unleash The Thrill</p>
                </div>
        </>
    );
}

export default Topbar;
