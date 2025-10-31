import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import Topbar from "../../Components/Topbar";
import Footer from "../../Components/Footerr";
import IrrParallelogram from "../../Components/IrrParallelogram/IrrParallelogram";
import WhatsAppButton from "../../Components/Whatsapp";

import playIcon from "../../assets/img/play_btn.svg";
import pauseIcon from "../../assets/img/pause_btn.svg";
import trampolineimg from "../../assets/img/trampolineimg.png";
import gallerybanner from "../../assets/img/gallerybanner.jpg";
import gallerybanner_mobile from "../../assets/img/gallerybanner_mobile.jpg";

import gallery1 from "../../assets/img/gallery1.jpg";
import gallery2 from "../../assets/img/gallery2.jpg";
import gallery3 from "../../assets/img/gallery3.jpg";
import gallery4 from "../../assets/img/gallery4.png";
import gallery5 from "../../assets/img/gallery5.png";
import gallery6 from "../../assets/img/gallery6.jpg";
import gallery7 from "../../assets/img/gallery7.jpg";
import gallery8 from "../../assets/img/gallery8.jpg";
import gallery9 from "../../assets/img/gallery9.jpg";

const Gallery = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const videoSectionRef = useRef(null);
  const trampolineRef = useRef(null);

  // 🪂 Floating animation on trampoline image
  useEffect(() => {
    const el = trampolineRef.current;
    if (el) {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          onComplete: () => {
            gsap.to(el, {
              y: -20,
              duration: 2,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
            });
          },
        }
      );
    }
  }, []);

  // ▶️ Play / Pause + Unmute on click
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

  // 👁 Auto play / pause depending on scroll visibility
  useEffect(() => {
    const videoElement = videoRef.current;
    const section = videoSectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoElement.play();
            setIsPlaying(true);
          } else {
            videoElement.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (section) observer.observe(section);
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <>
      <Topbar />

      {/* 🖼 Banner Section */}
      <div className="top-bg">
        <div className="w-100 p-0 m-0">
          <div className="deals-image">
            <img
              src={gallerybanner}
              width="100%"
              alt=""
              className="img-fluid rounded-4 d-none d-sm-block"
            />
          </div>
          <div className="d-flex w-100 deals-image">
            <img
              src={gallerybanner_mobile}
              width="100%"
              alt=""
              className="img-fluid rounded-4 d-block d-sm-none"
            />
          </div>
        </div>
      </div>

      <WhatsAppButton />

      {/* 🧒 Trampoline Section */}
      <div className="gallery-heading text-blue text-center fw-bold my-4">
        Jump Into Fun at Our Trampoline Park
      </div>

      <div className="container">
        <div className="row px-0 px-md-4 mb-3">
          <div className="col-lg-6 pt-3 d-flex flex-column justify-content-center">
            <p className="fs-5 text-blue fw-500 school-content">
              Experience non-stop excitement at Thrill Zone’s Trampoline Park!
              Jump, flip, and soar to new heights on our Super Trampoline,
              designed for thrill-seekers of all ages. Whether you're a pro
              jumper or just looking to have fun, our trampoline park promises
              hours of laughter and adventure. Perfect for families, groups, or
              solo fun – get ready to defy gravity and make unforgettable
              memories!
            </p>
          </div>

          <div className="bus-image col-lg-6 text-center">
            <img
              ref={trampolineRef}
              src={trampolineimg}
              width="100%"
              alt="Trampoline Fun"
            />
          </div>
        </div>
      </div>

      {/* 📸 Gallery Section */}
      <div className="gallery-heading text-blue text-center fw-bold my-4">
        Our Gallery
      </div>

      <section className="container">
        <div className="row pt-3 my-3 justify-content-center text-center">
          <div className="col-md-4 col-4 p-1">
            <img src={gallery1} alt="" className="img-fluid rounded-3" />
          </div>
          <div className="col-md-4 col-4 p-1">
            <img src={gallery2} alt="" className="img-fluid rounded-3" />
          </div>
          <div className="col-md-4 col-4 p-1">
            <img src={gallery3} alt="" className="img-fluid rounded-3" />
          </div>
        </div>

        <div className="row pt-3 my-3 justify-content-center text-center">
          <div className="col-md-4 col-4 p-1">
            <img src={gallery4} alt="" className="img-fluid rounded-3" />
          </div>
          <div className="col-md-4 col-4 p-1">
            <img src={gallery5} alt="" className="img-fluid rounded-3" />
          </div>
          <div className="col-md-4 col-4 p-1">
            <img src={gallery6} alt="" className="img-fluid rounded-3" />
          </div>
        </div>

        <div className="row pt-3 my-3 justify-content-center text-center">
          <div className="col-md-4 col-4 p-1">
            <img src={gallery7} alt="" className="img-fluid rounded-3" />
          </div>
          <div className="col-md-4 col-4 p-1">
            <img src={gallery8} alt="" className="img-fluid rounded-3" />
          </div>
          <div className="col-md-4 col-4 p-1">
            <img src={gallery9} alt="" className="img-fluid rounded-3" />
          </div>
        </div>
      </section>

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
              muted // allows auto-play
              ref={videoRef}
            >
              <source
                src="https://res.cloudinary.com/dr5860rkp/video/upload/v1761887283/gallery_Video_1_dygeoh.mp4"
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

      {/* 🔻 Footer Section */}
      <section className="mt-5 position-relative overflow-hidden">
        <Footer />
      </section>
    </>
  );
};

export default Gallery;
