import React, { useState, useRef, useEffect } from "react";
import Topbar from "../../Components/Topbar";
import Footer from "../../Components/Footerr";
import offers from "../../assets/img/offers.jpeg";
import cafebanner from "../../assets/img/cafebanner.jpg";
import cafebanner_mobile from "../../assets/img/cafebanner_mobile.jpg";
import bannernew from "../../assets/img/bannernew.jpeg";
import qrocde from "../../assets/img/qrcode.jpg";
import WhatsAppButton from "../../Components/Whatsapp";
import playIcon from "../../assets/img/play_btn.svg";
import pauseIcon from "../../assets/img/pause_btn.svg";
import IrrParallelogram from "../../Components/IrrParallelogram/IrrParallelogram";
import CafeTrill from "../../Components/CafeTrill";

const SchoolTrips = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const videoSectionRef = useRef(null);

  // ▶️ Manual Play/Pause toggle
  const togglePlayPause = () => {
    const vid = videoRef.current;
    if (!vid) return;

    if (isPlaying) {
      vid.pause();
      setIsPlaying(false);
    } else {
      vid.muted = false; // 🔊 Unmute on manual play
      vid.play();
      setIsPlaying(true);
    }
  };

  // 👁 Auto play/unmute when visible, pause when out of view
  useEffect(() => {
    const vid = videoRef.current;
    const section = videoSectionRef.current;
    if (!vid || !section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            vid.muted = false; // 🔊 Auto unmute when in view
            vid.play();
            setIsPlaying(true);
          } else {
            vid.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% visible
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // 🧠 Pause video when tab inactive
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

      {/* 🏞️ Banner Section */}
      <div className="birthday_top-bg p-0 m-0">
        <div className="d-flex w-100">
          <img
            src={cafebanner}
            alt="Cafe Thrill Banner"
            className="img-fluid rounded-4 d-sm-block"
          />
        </div>
      </div>

      <div className="container">
        <CafeTrill heading="Celebrate Bday with Thrill Zone" />
      </div>

      <WhatsAppButton />

      {/* ☕ Cafe Offers Section */}
      <div className="container">
        <div className="row mt-0 mt-md-5 fw-bold justify-content-between my-2 my-md-5">
          <div className="col-lg-6 text-center mt-3 pt-3">
            <img src={offers} alt="Offers" className="img-fluid rounded-4" />
          </div>
          <div className="col-lg-6 font-poppins-400 pt-3 d-flex flex-column justify-content-center align-items-center">
            <p className="about-content text-blue text-center">Thrill Café by illy</p>
            <p className="fs-5 text-blue fw-500 text-center">
              A whole world lies within each coffee bean. Based on this insight
              and illycaffè's 80 years of experience in producing coffee, in 1999
              the company established the Università del Caffè — a center of
              excellence promoting coffee culture globally through training,
              research, and innovation.
            </p>
          </div>
        </div>

        {/* 📱 QR Code Section */}
        <div className="qr-code row mt-0 mt-md-5 fw-bold justify-content-between my-2 my-md-5">
          <div className="col-lg-6 font-poppins-400 pt-3 d-flex flex-column justify-content-center align-items-center">
            <p className="about-content text-blue text-center">
              Thrill Café – Taste the Adventure!
            </p>
            <p className="fs-5 text-blue fw-500 text-center">
              Welcome to Thrill Café, the ultimate food destination inside Thrill
              Zone. Enjoy a wide range of delicious meals, snacks, and beverages
              crafted to fuel your fun-filled experience. Scan the QR code to
              explore our digital menu and order your favorites directly from your
              table — fast, easy, and contactless!
            </p>
          </div>
          <div className="col-lg-6 text-center">
            <img src={qrocde} alt="QR Code" className="img-fluid rounded-4" />
          </div>
        </div>
      </div>

      {/* 🍽️ Cafe Banner */}
      <div className="container">
        <div className="bus-image d-none d-sm-block">
          <img src={bannernew} width="100%" alt="Cafe Banner" />
        </div>
        <div className="d-flex w-100 container justify-content-center">
          <img
            src={cafebanner_mobile}
            alt="Cafe Mobile Banner"
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
              muted // required for autoplay initially
              ref={videoRef}
            >
              <source
                src="https://res.cloudinary.com/dydjbwvzf/video/upload/v1739809164/Reel_05_1_1_rnpyr8.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

            {/* 🎛️ Play/Pause Button */}
            <button className="video-control-btn" onClick={togglePlayPause}>
              <img
                src={isPlaying ? pauseIcon : playIcon}
                alt={isPlaying ? "Pause" : "Play"}
              />
            </button>
          </IrrParallelogram>
        </div>
      </section>

      {/* ⚓ Footer */}
      <section className="mt-3 mt-md-5 position-relative overflow-hidden">
        <Footer />  
      </section>
    </>
  );
};

export default SchoolTrips;
