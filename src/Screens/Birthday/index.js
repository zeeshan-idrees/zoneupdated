import React, { useState, useRef, useEffect } from "react";
import Topbar from "../../Components/Topbar";
import Birthdytrill from "../../Components/Birthdytrill";
import birthdaybanner from "../../assets/img/birthdaybanner.png";
import birthdaybanner_mobile from "../../assets/img/birthdaybanner_mobile.png";
import package1 from "../../assets/img/package1.jpg";
import package2 from "../../assets/img/package2.jpg";
import package3 from "../../assets/img/package3.jpg";
import playIcon from "../../assets/img/play_btn.svg";
import pauseIcon from "../../assets/img/pause_btn.svg";
import IrrParallelogram from "../../Components/IrrParallelogram/IrrParallelogram";
import Footer from "../../Components/Footerr";
import WhatsAppButton from "../../Components/Whatsapp";

const Gallery = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const videoSectionRef = useRef(null);

  // ▶️ Manual play/pause toggle
  const togglePlayPause = () => {
    const vid = videoRef.current;
    if (!vid) return;

    if (isPlaying) {
      vid.pause();
      setIsPlaying(false);
    } else {
      vid.muted = false; // 🔊 Unmute when user clicks Play
      vid.play();
      setIsPlaying(true);
    }
  };

  // 👁 Automatically play/unmute when section visible, pause when out of view
  useEffect(() => {
    const vid = videoRef.current;
    const section = videoSectionRef.current;

    if (!vid || !section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // When video section is visible (50% or more)
            vid.muted = false; // Unmute automatically
            vid.play();
            setIsPlaying(true);
          } else {
            // When section is out of view
            vid.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  // 🧠 Optional: Pause video when browser tab inactive
  useEffect(() => {
    const handleVisibilityChange = () => {
      const vid = videoRef.current;
      if (document.hidden && vid) {
        vid.pause();
        setIsPlaying(false);
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  return (
    <>
      <Topbar />
      <div className="text-blue">
        {/* Banner Section */}
        <div className="birthday_top-bg p-0 m-0">
          <div className="d-flex w-100 p-0 m-0">
            <img
              src={birthdaybanner}
              alt=""
              className="img-fluid rounded-4 d-none d-sm-block"
            />
          </div>
          <div className="d-flex w-100 container">
            <img
              src={birthdaybanner_mobile}
              alt=""
              className="img-fluid rounded-4 d-block d-sm-none"
            />
          </div>
        </div>

        <WhatsAppButton />

        <div className="container p-0">
          <div className="container bg-white pt-4">
            <Birthdytrill heading="Celebrate Bday with Thrill Zone" />

            {/* Birthday Packages */}
            <div className="birthday-heading text-blue text-center fs-2vw fw-bold font-poppins-500 my-3 my-md-4">
              Birthday Packages
            </div>
            <div className="row justify-content-center g-5">
              <div className="school-trip_packages position-relative col-sm-12 col-lg-4">
                <img src={package1} alt="" width="290px" height="370px" />
              </div>
              <div className="school-trip_packages position-relative col-sm-12 col-lg-4">
                <img src={package2} alt="" width="290px" height="370px" />
              </div>
              <div className="school-trip_packages position-relative col-sm-12 col-lg-4">
                <img src={package3} alt="" width="290px" height="370px" />
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
                    muted // required for autoplay on load
                    ref={videoRef}
                  >
                    <source
                      src="https://res.cloudinary.com/dmlhsdtwp/video/upload/v1735237208/WhatsApp_Video_2024-12-26_at_4.44.51_PM_1_zggp1d.mp4"
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
          </div>
        </div>

        {/* Footer */}
        <section className="mt-5 position-relative overflow-hidden">
          <Footer />
        </section>
      </div>
    </>
  );
};

export default Gallery;
