import React, { useState, useRef } from "react";
import Topbar from "../../Components/Topbar";
import Footer from "../../Components/Footerr";
import offers from '../../assets/img/offers.webp'
import cafebanner from "../../assets/img/cafebanner.jpg";
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
          <img src={cafebanner} width="100% " alt="" />
        </div>
      </div>

      <div className="container ">
        <CafeTrill heading="Celebrate Bday with Thrill Zone" />
      </div>
      <WhatsAppButton />

      <div className="container">
       
        <div className="row mt-0 mt-md-5 fw-bold justify-content-between my-2 my-md-5">
          <div className=" col-lg-6  text-center ">
            <img src={offers} alt="" className="img-fluid rounded-4" />
          </div>

          <div className=" col-lg-6 font-poppins-400  pt-3 d-flex flex-column justify-content-center">
            <p className="  about-content text-blue text-center">
              Thrill Café by illy
            </p>
            <p className="fs-5 text-blue fw-500">
            A whole world lies within each coffee bean
            Based on this insight and illycaffè's 80 years of experience in producing coffee, in 1999 the company established the Università del Caffè, a center of excellence that promotes a culture of quality coffee all over the world through training, research, and innovation{" "}
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
                src="https://res.cloudinary.com/dydjbwvzf/video/upload/v1739809164/Reel_05_1_1_rnpyr8.mp4"
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
