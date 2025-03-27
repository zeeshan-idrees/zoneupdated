import React, { useState, useRef } from "react";
import Topbar from "../../Components/Topbar";
import Footer from "../../Components/Footerr";
import schoolbanner from "../../assets/img/schoolbanner.jpg";
import schooltrip from '../../assets/img/schooltrip.jpeg';
import Schoolplan from '../../assets/img/Schoolplan.jpg';
import Schooltrill from "../../Components/Schooltrill";
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
                <div className="d-flex w-100 p-0 m-0 h-75">
                    <img src={schoolbanner} alt="" className="img-fluid rounded-4" height="600px" />
                </div>

                <WhatsAppButton />
            </div>
            <div className="container ">
                <Schooltrill heading='Celebrate Bday with Thrill Zone' />
            </div>

            <div className="trip-heading text-blue text-center fs-2vw fw-bold font-poppins-500  my-4 ">School Trips Packages</div>
            <div className="container">
                <div className="row  px-0 px-md-4 py-3 py-md-5 mb-3">
                    <div className=" col-lg-6 font-poppins-400  pt-3 d-flex flex-column justify-content-center">
                        <p className="  about-content text-blue text-center" >School Trip Package at Thrill Zone</p>
                        <p className="fs-5 text-blue fw-500 school-content">Join us for an exciting 3-hour adventure with a free magic show at Thrill Zone! Enjoy unlimited fun at our Softplay Area, Trampoline Park, Super Trampoline, Ninja Course, and Toddler Area.
                            Packages:
                            Rs. 1250/- (With Meal: Crunch Burger, Fries, Nuggets & Drink)
                            Rs. 1000/- (Without Meal)
                        </p>
                    </div>
                    <div className="bus-image col-lg-6">
                        <img src={schooltrip} width="100% " alt='' />
                    </div>

                </div>
            </div>
            <div className="container">
                <div className="row mt-0 mt-md-5 fw-bold justify-content-between pt-5 my-2 my-md-5">
                    <div className=" col-lg-6  text-center ">
                        <img src={Schoolplan} alt='' className="img-fluid rounded-4" />
                    </div>
                    <div className=" col-lg-6 font-poppins-400  pt-3 d-flex flex-column justify-content-center">
                        <p className="about-content text-blue text-center" >Plan Your School Trip at Thrill Zone!</p>
                        <p className="fs-5 text-blue fw-500 school-content">Looking for the perfect destination for your next school trip? Thrill Zone is the ultimate spot for a fun and adventurous day out with your classmates!
                            From exciting rides to interactive games, there's something for everyone to enjoy. Thrill Zone offers a safe, engaging, and thrilling experience for students of all ages. Let us take care of the fun while you focus on making memories with your friends!
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