import React, { useState, useRef } from "react";
import Topbar from "../Components/Topbar";
import schoolbus from "../assets/img/schoolbus.png";
import aboutbanner from "../assets/img/aboutbanner.jpg";
import Footer from "../Components/Footerr";
import Carousel from "../Components/Slider";
import ExperinceTrill from "../Components/ExperienceTrill";
import Birthday from "../Components/BirthdayParties";
import WhatsAppButton from "../Components/Whatsapp";
import playIcon from "../assets/img/play_btn.svg"; // Your custom play icon
import pauseIcon from "../assets/img/pause_btn.svg"; // Your custom pause icon
import IrrParallelogram from "../Components/IrrParallelogram/IrrParallelogram";


const HomePage = () => {
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
      {" "}
      <Topbar />
      <div className="container-fluid p-0 ">
        <div>
          <div className="d-flex w-100 p-0 m-0 ">
          <img src={aboutbanner} alt="" className="img-fluid rounded-4" />
          </div>
          <WhatsAppButton/>
          <div className="container bg-white">
            <ExperinceTrill
              heading="EXPERIENCE A NEW THRILL"
              heading2="Thrill Zone is the ultimate destination for you and the kids to indulge in some serious fun with interactive play zones for all ages big and smal"
            />
          </div>
        </div>
        
        <section className="homeCarousel py-3 py-md-5 mt-5">
          <Carousel />
        </section>
        <section className="py-3  container">
          <Birthday />
        </section>
        <p className="  about-content text-blue text-center pb-3">
           Plan Your School Trip at Thrill Zone! 
        </p>
    
        <div className="bg-trips_section px-0 px-md-4 py-3 py-md-4 mb-5 ">
          <div className="container ">
            <div className="row school-area_section">
              <div className="home-trips_section col-12 col-md-6  align-self-center">
                <p className="font-poppins-400 text-yellow fs-30 fw-700">
                  Attraction Include :
                </p>
                <ul>
                  <li className="font-poppins-400 text-white fs-28">
                    Soft Play Area
                  </li>
                  <li className="font-poppins-400 text-white fs-28">
                    Trampoline Park
                  </li>
                  <li className="font-poppins-400 text-white fs-28">
                    Ninja Course
                  </li>
                  <li className="font-poppins-400 text-white fs-28">
                    Ninja Course
                  </li>
                  <li className="font-poppins-400 text-white fs-28">
                    Toddler Area
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-6">
                <img src={schoolbus} alt="" className="img-fluid rounded-4" />
              </div>
            </div>
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
                src="https://res.cloudinary.com/dydjbwvzf/video/upload/v1735730831/Reel_resize_fd4eev.mp4"
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
      </div>
    </>
  );
};

export default HomePage;
