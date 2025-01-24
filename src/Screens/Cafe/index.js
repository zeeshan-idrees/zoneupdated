import React, { useState, useRef } from "react";
import Topbar from "../../Components/Topbar";
import Footer from "../../Components/Footerr";
import offers from "../../assets/img/offers.jpg";
import menubanner from "../../assets/img/menubanner.jpg";
import cafewall from "../../assets/img/cafewall.jpg";
import bannernew from "../../assets/img/bannernew.jpg";
import WhatsAppButton from "../../Components/Whatsapp";
import playIcon from "../../assets/img/play_btn.svg"; // Your custom play icon
import pauseIcon from "../../assets/img/pause_btn.svg"; // Your custom pause icon
import IrrParallelogram from "../../Components/IrrParallelogram/IrrParallelogram";
import CafeTrill from "../../Components/CafeTrill";
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
          {/* <img src={cafebanner} width="100% " alt="" /> */}
          <img src={cafewall} width="100% " alt="" />
        </div>
      </div>

      <div className="container ">
        <CafeTrill heading="Celebrate Bday with Thrill Zone" />
      </div>
<WhatsAppButton/>
  
      <div className="container">
        <div className="trip-heading text-blue text-center fs-2vw fw-bold font-poppins-500  my-4 my-md-5 ">
          Cafe Timings
        </div>
        <div className="row mt-0 mt-md-5 fw-bold justify-content-between my-2 my-md-5">
          <div className=" col-lg-6  text-center ">
            <img src={offers} alt="" className="img-fluid rounded-4" />
          </div>

          <div className=" col-lg-6 font-poppins-400  pt-3 d-flex flex-column justify-content-center">
            <p className=" fs-2vw about-content text-blue text-center">
              Thrill Café - Now Open at Penta Square Mall!
            </p>
            <p className="fs-5 text-blue fw-500">
              We're here to fuel your daily grind, one sip at a time! ☕ Whether
              you're stopping by for a quick coffee break or catching up with
              friends, we’ve got the perfect brew for you.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="bus-image ">
          <img src={bannernew} width="100% " alt="" />
        </div>
      </div>
      <section className="py-3 h-50 py-md-5">
        <div className="videoClip borderParallelogram position-relative  ">
          <IrrParallelogram>
            <video
              style={{ height: "100%" }}
              className="clip-path-video w-100"
              autoPlay
           
              loop
              ref={videoRef}
            >
              <source
                src="https://res.cloudinary.com/dmlhsdtwp/video/upload/v1735237250/WhatsApp_Video_2024-12-26_at_4.44.51_PM_bpzafg.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <button className="video-control-btn" onClick={togglePlayPause}>
              <img src={isPlaying ? pauseIcon : playIcon} alt="Play/Pause" />
            </button>
          </IrrParallelogram>
        </div>
      </section>
      <section className=" mt-3 mt-md-5  position-relative overflow-hidden">
        <Footer />
      </section>
    </>
  );
};

export default SchoolTrips;
