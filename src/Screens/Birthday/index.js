import React, { useState, useRef } from "react"

import Topbar from "../../Components/Topbar";
import Birthdytrill from "../../Components/Birthdytrill";
import birthdaybanner from "../../assets/img/birthdaybanner.jpg";
import package1 from "../../assets/img/package1.png";
import playIcon from "../../assets/img/play_btn.svg"; // Your custom play icon
import pauseIcon from "../../assets/img/pause_btn.svg"; // Your custom pause icon
import IrrParallelogram from "../../Components/IrrParallelogram/IrrParallelogram";
import Footer from "../../Components/Footerr";
import WhatsAppButton from "../../Components/Whatsapp";

const Gallery = () => {
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
      <div className="text-blue">
        <div className="birthday_top-bg p-0 m-0">
          <div className="d-flex ">
            <img src={birthdaybanner} width="100% " alt="" />
          </div>
        </div>
        <WhatsAppButton />
        <div className="container p-0">
          <div className="container bg-white pt-4">
            <Birthdytrill heading="Celebrate Bday with Thrill Zone" />
            <div className="birthday-heading text-blue text-center fs-2vw fw-bold font-poppins-500  my-3 my-md-4 ">
              Birthday Packages
            </div>
            <div className="row justify-content-center g-5">
              <div className="school-trip_packages position-relative col-sm-12 col-lg-4">
                <div className="package-image">
                  <img src={package1} alt="" width="290px" height="370px" />
                </div>
                <div className="package1-data">
                  <h4 className=" package-heading-1 text-center">Gold</h4>
                  <div className="package-text">
                    <h3 className="fs-20 text-white">Package 1 (15 PAX MIN)</h3>
                    <ul>
                      <li className="fs-18 text-white">4,900 Per Person</li>
                      <li className="fs-18 text-white"> Duration: 3Hrs</li>
                      <li className="fs-18 text-white">

                        Valid for Trampoline, Ninja & SoftPlay .
                      </li>
                      <li className="fs-18 text-white">Credit Limit 4,000</li>
                      <li className="fs-18 text-white"> Magic show & Drink Free Per Person.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="school-trip_packages position-relative col-sm-12 col-lg-4">
                <div className="package-image">
                  <img src={package1} alt="" width="290px" height="370px" />
                </div>
                <div className="package1-data">
                  <h4 className=" package-heading-2 text-center">Silver</h4>
                  <div className="package-text">
                    <h3 className="fs-20 text-white">Package 2 (15 PAX MIN)</h3>
                    <ul>
                      <li className="fs-18 text-white"> 3,900 Per Person</li>
                      <li className="fs-18 text-white"> Duration: 2 Hrs</li>
                      <li className="fs-18 text-white">
                        Valid for Trampoline, Ninja & SoftPla
                      </li>
                      <li className="fs-18 text-white">Credit Limit 3,000</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="school-trip_packages position-relative col-sm-12 col-lg-4">
                <div className="package-image">
                  <img src={package1} alt="" width="290px" height="370px" />
                </div>
                <div className="package1-data">
                  <h4 className=" package-heading-2 text-center">ADD ON </h4>
                  <div className="package-text">
                    <h3 className="fs-20 text-white">Customized Cake | Decor Rs.10,000 to 30,000 </h3>
                    <ul>
                      <li className="fs-18 text-white"> Magic Show : Rs 9,500 | Pinnata Rs: 8,000</li>
                      <li className="fs-18 text-white"> Duration: 2.5 Hrs</li>
                      <li className="fs-18 text-white">
                        Photography Schoot with Frame 10 to 15pc or 2 vidoes 20k
                      </li>
                      <li className="fs-18 text-white">Venue Charges 20k</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
           
            <section className=" mt-5 ">
              <div className="videoClip borderParallelogram position-relative  ">
                <IrrParallelogram>
                  <video
                    style={{ width: "100%" }}
                    className="clip-path-video h-100 w-100"
                    autoPlay
                    loop
                    ref={videoRef}
                  >
                    <source
                      src="https://res.cloudinary.com/dmlhsdtwp/video/upload/v1735237208/WhatsApp_Video_2024-12-26_at_4.44.51_PM_1_zggp1d.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                  <button
                    className="video-control-btn"
                    onClick={togglePlayPause}
                  >
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
        <section className="mt-5 position-relative overflow-hidden">
          <Footer />
        </section>
      </div>
    </>
  );
};

export default Gallery;
