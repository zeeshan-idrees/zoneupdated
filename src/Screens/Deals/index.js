import React, { useState, useRef } from "react";
import Topbar from "../../Components/Topbar";
import Footer from "../../Components/Footerr";
import dealbanner from '../../assets/img/dealbanner.jpeg';
import dealbanner_mobile from '../../assets/img/dealbanner_mobile.jpeg';
import Dealspost from '../../assets/img/Dealspost.jpg';
import pricing from '../../assets/img/pricing.jpeg';
import arcagdegames from '../../assets/img/arcagdegames.jpeg';
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
                        <img src={dealbanner} width="100% " alt="" className="img-fluid rounded-4 d-none d-sm-block" />
                    </div>
                    <div className="deals-image ">
                        <img src={dealbanner_mobile} width="100% " alt="" className="img-fluid rounded-4 d-block d-sm-none" />
                    </div>
                </div>
            </div>
            <WhatsAppButton />

            <div className="container">
                <div className="trip-heading text-blue text-center fs-2vw fw-bold font-poppins-500  my-4 my-md-5 "> Thrill Zone Special Offers! </div>
                <div className="row mt-0  fw-bold justify-content-between  my-2 my-md-5">
                    <div className=" col-lg-6  text-center ">
                        <img src={Dealspost} alt='' className="img-fluid rounded-4" />
                    </div>
                    <div className=" col-lg-6 font-poppins-400  pt-3 d-flex flex-column justify-content-center">
                        <p className="  about-content text-blue text-center" >
                        </p>
                        <p className="fs-5 text-blue fw-500">Get ready to boost your Thrill Zone experience with unbeatable top-up and recharge deals! Whether you're topping up for the first time or recharging your card, take advantage of these amazing offers:
                        </p>
                    </div>

                </div>
            </div>
            <div className="trip-heading text-blue text-center fs-2vw fw-bold font-poppins-500  my-4 my-md-5 "> Arcade Games</div>
            <div className="container">
                <div className=" row promo-deals  ">
                    <div className=" col-lg-6 font-poppins-400  pt-3 d-flex flex-column justify-content-center">
                        <p className="fs-5 text-blue fw-500">Get ready for a gaming adventure at Thrill Zone Arcade! From action-packed arcade games to immersive experiences, there's something for everyone. Whether you're a pro or just playing for fun, the excitement never ends. Come explore a world of entertainment where every game is a thrill! For more information, contact us at +92 328 0707853.
                        </p>   </div>
                    <div className=" col-lg-6  ">
                        <img src={arcagdegames} width="100% " alt='' />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="trip-heading text-blue text-center fs-2vw fw-bold font-poppins-500  my-4 my-md-5 "> Thrill Zone Activity Pricing </div>
                <div className="row mt-0  fw-bold justify-content-between  my-2 my-md-5">
                    <div className=" col-lg-6  text-center ">
                        <img src={pricing} alt='' className="img-fluid rounded-4" />
                    </div>
                    <div className=" col-lg-6 font-poppins-400  pt-3 d-flex flex-column justify-content-center">
                        <p className=" about-content text-blue text-center" >
                        </p>
                        <p className="fs-5 text-blue fw-500">Welcome to Thrill Zone, where fun meets fitness for all ages! Enjoy activities like trampolines, ninja courses, soft play areas, and toddler zones. Pricing starts at Rs. 999 for 1 hour or Rs. 700 for 30 minutes for the trampoline and soft play areas. The toddler area is Rs. 800 for 1 hour and Rs. 500 for 30 minutes, while the ninja course is Rs. 400 for 30 minutes. Grab our special offer of 2 hours of unlimited access for Rs. 2000. A new card costs Rs. 100. Join us for an action-packed experience!
                        </p>
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