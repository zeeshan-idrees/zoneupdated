import React, { useState, useRef } from "react";
import Topbar from "../Components/Topbar";
import schoolactivity from "../assets/img/schoolactivity.jpg";
import schoolactivity_mobile from "../assets/img/schoolactivity_mobile.jpg";
import aboutbanner from "../assets/img/aboutbanner.jpg";
import aboutbanner_mobile from "../assets/img/aboutbanner_mobile.jpg";
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

      {<Topbar/>}
      {<div className="container-fluid p-0 ">
        <div>
          <div className="d-flex w-100 p-0 m-0 ">
            <img src={aboutbanner} alt="" className="img-fluid rounded-4 d-none d-sm-block" />
          </div>
          <div className="d-flex w-100 container">
            <img src={aboutbanner_mobile} alt="" className="img-fluid rounded-4 d-block d-sm-none " />
          </div>
          <WhatsAppButton />
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
          Plan Your School Trip at Thrill Zone
        </p>
        <div className="container">
        <div className="d-flex w-100 p-0 m-0 ">
            <img src={schoolactivity} alt="" className="img-fluid rounded-4 d-none d-sm-block" />
          </div>
        <div className="d-flex w-100 p-0 m-0 ">
            <img src={schoolactivity_mobile} alt="" className="img-fluid rounded-4  d-block d-sm-none" />
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
      }
    </>
  );
};

export default HomePage;
