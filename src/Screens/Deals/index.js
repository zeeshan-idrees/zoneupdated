import React, { useState, useRef } from "react";
import Topbar from "../../Components/Topbar";
import Footer from "../../Components/Footerr";
// import schooltrip from '../../assets/img/schooltrip.jpg';
import activitybanner from '../../assets/img/activitybanner.jpg';
import Dealspost from '../../assets/img/Dealspost.jpg';

import promospost from '../../assets/img/about.jpeg';
import WhatsAppButton from "../../Components/Whatsapp";

const SchoolTrips = () => {
    const [isPlaying, setIsPlaying] = useState(true);
    const videoRef = useRef(null);


    const togglePlayPause = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };
    return (
        <>
            <Topbar />
            <div className="birthday_top-bg p-0 m-0">
                <div className="d-flex ">
                    <div className="deals-image ">
                        <img src={activitybanner} width="100% " alt='' />
                    </div>
                </div>
            </div>
            <WhatsAppButton/>
            
        
            <div className="container">
            <div className="trip-heading text-blue text-center fs-2vw fw-bold font-poppins-500  my-4 my-md-5 "> Thrill Zone Special Offers! </div>
                <div className="row mt-0  fw-bold justify-content-between  my-2 my-md-5">
                <div className=" col-lg-6  text-center ">
                        <img src={Dealspost} alt='' className="img-fluid rounded-4" />
                    </div>
                    <div className=" col-lg-6 font-poppins-400  pt-3 d-flex flex-column justify-content-center">
                        <p className=" fs-2vw about-content text-blue text-center" >
                           </p>
                        <p className="fs-5 text-blue fw-500">Get ready to boost your Thrill Zone experience with unbeatable top-up and recharge deals! Whether you're topping up for the first time or recharging your card, take advantage of these amazing offers:
                        </p>
                    </div>
                  
                </div>
            </div>
            <div className="trip-heading text-blue text-center fs-2vw fw-bold font-poppins-500  my-4 my-md-5 "> Arcade Games</div>
            <div className="container">
                <div className=" row promo-deals ">
                   
                    <div className=" col-lg-6 font-poppins-400  pt-3 d-flex flex-column justify-content-center">
                        <p className=" fs-2vw about-content text-blue " >
                       Arcade Games: </p>
                        <p className="fs-5 text-blue fw-500">Get ready for a gaming adventure at Thrill Zone Arcade! From action-packed arcade games to immersive experiences, there's something for everyone. Whether you're a pro or just playing for fun, the excitement never ends. Come explore a world of entertainment where every game is a thrill! For more information, contact us at +92 328 0707853.

                        </p>
                     
                    </div>
                    <div className=" col-lg-6  ">
                        <img src={promospost} width="100% " alt='' />
                    </div>
                </div>
            </div>

            <section className=" mt-3 mt-md-5  position-relative overflow-hidden">
                <Footer />
            </section>
        </>
    );
}

export default SchoolTrips;