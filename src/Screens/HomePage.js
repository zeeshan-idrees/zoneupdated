import React, { useState, useRef, useEffect } from "react";
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
import playIcon from "../assets/img/play_btn.svg";
import pauseIcon from "../assets/img/pause_btn.svg";
import IrrParallelogram from "../Components/IrrParallelogram/IrrParallelogram";

const HomePage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const videoSectionRef = useRef(null);

  // 🎬 Toggle play/pause manually
  const togglePlayPause = () => {
    const vid = videoRef.current;
    if (!vid) return;

    if (isPlaying) {
      vid.pause();
      setIsPlaying(false);
    } else {
      vid.muted = false; // 🔊 Unmute when user manually clicks play
      vid.play();
      setIsPlaying(true);
    }
  };

  // 👁 Automatically play/unmute when section is visible, pause when hidden
  useEffect(() => {
    const vid = videoRef.current;
    const section = videoSectionRef.current;

    if (!vid || !section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 👇 When section visible on screen
            vid.muted = false; // 🔊 Unmute
            vid.play();
            setIsPlaying(true);
          } else {
            // 👇 When section leaves the screen
            vid.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of video section is visible
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Topbar />

      <div className="container-fluid p-0">
        {/* Banner Section */}
        <div>
          <div className="d-flex w-100 p-0 m-0">
            <img
              src={aboutbanner}
              alt=""
              className="img-fluid rounded-4 d-none d-sm-block"
            />
          </div>
          <div className="d-flex w-100 container">
            <img
              src={aboutbanner_mobile}
              alt=""
              className="img-fluid rounded-4 d-block d-sm-none"
            />
          </div>

          <WhatsAppButton />

          <div className="container bg-white my-4">
            <ExperinceTrill
              heading="EXPERIENCE A NEW THRILL"
              heading2="Thrill Zone is the ultimate destination for you and the kids to indulge in some serious fun with interactive play zones for all ages big and small."
            />
          </div>
        </div>

        {/* Carousel */}
        <section className="homeCarousel py-3 py-md-5 mt-5">
          <Carousel />
        </section>

        {/* Birthday Section */}
        <section className="py-3 container">
          <Birthday />
        </section>

        {/* School Trip Section */}
        <p className="about-content text-blue text-center pb-3">
          Plan Your School Trip at Thrill Zone
        </p>
        <div className="container">
          <div className="d-flex w-100 p-0 m-0">
            <img
              src={schoolactivity}
              alt=""
              className="img-fluid rounded-4 d-none d-sm-block"
            />
          </div>
          <div className="d-flex w-100 p-0 m-0">
            <img
              src={schoolactivity_mobile}
              alt=""
              className="img-fluid rounded-4 d-block d-sm-none"
            />
          </div>
        </div>

        {/* 🎥 Video Section */}
        <section
          ref={videoSectionRef}
          className="py-3 h-50 py-md-5 position-relative"
        >
          <div className="videoClip borderParallelogram position-relative">
            <IrrParallelogram>
              <video
                style={{ height: "100%" }}
                className="clip-path-video w-100"   
                loop
                muted // browser allows autoplay only if muted at start
                ref={videoRef}
              >
                <source
                  src="https://res.cloudinary.com/dr5860rkp/video/upload/v1761821329/reel-resize-fd4eev_n6PwfEhm_ai1wui.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <button className="video-control-btn" onClick={togglePlayPause}>
                <img
                  src={isPlaying ? pauseIcon : playIcon}
                  alt="Play/Pause"
                />
              </button>
            </IrrParallelogram>
          </div>
        </section>

        {/* Footer */}
        <section className="mt-3 mt-md-5 position-relative overflow-hidden">
          <Footer />
        </section>
      </div>
    </>
  );
};

export default HomePage;
