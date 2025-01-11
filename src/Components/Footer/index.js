import './Footer.css'
import footerLogo from '../../assets/img/footerLogo.svg'
import facebook from '../../assets/img/facebook.svg'
import twiter from '../../assets/img/twiter.svg'
import insta from '../../assets/img/insta.svg'
import phone from '../../assets/img/phone.svg'
import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Footer = ({ Scndref, children }) => {
    const firstDivRef = useRef(null);
    const secondDivRef = useRef(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        // Get the height of the first div
        if (firstDivRef.current) {
            setHeight(firstDivRef.current.offsetHeight);
        }
    }, []);

    useEffect(() => {
        // Set the height of the second div
        if (secondDivRef.current) {
            secondDivRef.current.style.height = `${height}px`;
        }
    }, [height]);
    return (
        <>
            <div className="blue-haxagon-footer ">
                <div className="blue-footer-inner-bg">
                    <div className="blue-footer-inner">
                        <div className="purple-haxagon-footer">
                            <div className="purple-footer-inner" ref={secondDivRef}>
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" clip-test w-100 d-flex position-absolute top-30 pt-4 pb-3 start-50 translate-middle-x" ref={firstDivRef}>
                <div className="container">
                    <div className="row footer-pad gap-3 gap-md-0">
                        <div className=" col-md-6 col-lg-4 d-flex flex-column gap-3 align-items-start">
                            <img src={footerLogo} alt='thrillzone' height='110px' />
                            <p className="mb-0 font-space fs-30 text-white"> The Pinnacle of Entertainment Hubs</p>
                            <div className="d-flex gap-3">
                                <a a href="https://www.instagram.com/thrillzone.pk/" target="_blank">
                                    <div className="bg-white rounded-4-circle py-1 px-2">
                                        <img src={facebook} alt='fb' height='15px' width='15px' />
                                    </div>
                                </a>
                                <div className="bg-white rounded-4-circle py-1 px-2">
                                    <img src={twiter} alt='X' height='15px' width='15px' />
                                </div>
                                < a href="https://www.instagram.com/thrillzone.pk/" target="_blank">
                                    <div className="bg-white rounded-4-circle py-1 px-2">
                                        <img src={insta} alt='insta' height='15px' width='15px' />
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 align-content-center">
                            <p className="font-space text-white fs-30 mb-0 mb-lg-3 ">Address</p>
                            <p className="font-poppins text-white fs-16" >Phase 5 Penta Sqaure DHA Lahore</p>
                            <div className="d-flex gap-2">
                                <div className="bg-white rounded-4-circle py-1 px-2">
                                    <img src={phone} alt='phn' height='15px' width='15px' />
                                </div>
                                <p className="font-poppins text-white fs-16 mb-0 align-self-center">+92-300-9009009</p>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4 d-flex align-items-center py-md-4 py-lg-0 gap-3 d-lg-block ">

                            <div className="d-flex flex-wrap flex-column">
                                <h1 className="font-space fs-30  text-white  py-1">Links</h1>
                                <NavLink to='/' className="font-poppins footer-link fw-bold py-1" >Home</NavLink>
                                <NavLink to='/About' className="font-poppins footer-link  fw-bold py-1 ">About Us</NavLink>
                                <NavLink to='/Birthday' className="font-poppins footer-link  fw-bold py-1 ">Birthday Party</NavLink>
                                <NavLink to='/Gallery' className="font-poppins footer-link fw-bold py-1">Gallery</NavLink>
                                <NavLink to='/cafe' className="font-poppins footer-link  fw-bold  py-1">Cafe</NavLink>
                                <NavLink to='/Contact-us' className="font-poppins footer-link  fw-bold  py-1">Contact</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <hr className="my-4 bg-white" />
                    </div>
                    <p className="fs-18 fw-500 font-poppins-500 text-white text-center">Copyright © {new Date().getFullYear()} Thrill Zone Entertainment Center. All rights reserved</p>
                </div>
            </div>
        </>
    );
}

export default Footer;