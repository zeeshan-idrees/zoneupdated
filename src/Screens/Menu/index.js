import React, { useState, useRef } from "react";
import Topbar from "../../Components/Topbar";
import Footer from "../../Components/Footerr";
import activitybanner from '../../assets/img/activitybanner.jpg';
import WhatsAppButton from "../../Components/Whatsapp"
import MenuBook from "../../Components/Flipbook";

const Menu = () => {
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
  
          <div className="trip-heading text-blue text-center fs-2vw fw-bold font-poppins-500  my-4 my-md-5 ">Thrill Cafe Menu Book </div>
          <p className="fs-5 text-blue fw-500">
</p>
<div className="container">
     <MenuBook/>
</div>
            <WhatsAppButton />





            <section className=" mt-3 mt-md-5  position-relative overflow-hidden">
                <Footer />
            </section>
        </>
    );
}

export default Menu;