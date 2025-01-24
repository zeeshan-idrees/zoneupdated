import React, { useState, useRef } from "react";
import HeadSection from "../../Components/HomePage/Header";
import Topbar from "../../Components/Topbar";
import Birthdytrill from "../../Components/Birthdytrill";
import Birthdaypost from "../../assets/img/Birthdaypost.jpg";
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
            <HeadSection img="banner party" align="bottom" />
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
                  <img src={package1} alt="" width="290px"  height="370px" />
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
                  <img src={package1} alt="" width="290px"  height="370px" />
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

            {/* <section className="pb-0 pb-md-5 text-blue font-poppins-500 pt-0 pt-md-5">
              <div className="row mt-4 fw-bold justify-content-between pt-3 my-5">
                <div className=" col-lg-6  text-center ">
                  <img
                    src={Birthdaypost}
                    alt=""
                    className="img-fluid rounded-4"
                  />
                </div>

                <div className=" col-lg-6 font-poppins-400  pt-3 d-flex flex-column justify-content-center">
                  <p className="bd-right_text about-content text-center">
                    Celebrate Your Bday at Thrill Zone with 15% Off
                  </p>
                  <p className=" fs-sm-3 fs-5 fw-400">
                    Celebrate Your Birthday at Thrill Zone! Make your special
                    day even more exciting with a birthday celebration at Thrill
                    Zone. We have the perfect setup to make your party
                    unforgettable! Exclusive Offer: Enjoy a 15% discount on all
                    birthday packages from Monday to Thursday! Why wait for the
                    weekend when the fun starts now? Balloons, decorations, and
                    a fun atmosphere are all set to give you the most memorable
                    birthday ever. Book your slot today and let us handle the
                    fun while you make memories! Location: Thrill Zone, Penta
                    Square Mall, DHA Phase 5, Lahore.
                  </p>
                </div>
              </div>
            </section> */}

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

            {/* <section>
                        <BlueParallogram>
                            <p className="font-poppins-500 fw-bold text-black px-2 mb-0 ">Games</p>
                        </BlueParallogram>
                    </section> 

                </div>
                    <p className="font-poppins  fw-bold fs-3vw text-center  mt-5" >PRICING FOR BIRTHDAY PARTY</p>
               
                <div className="d-flex justify-content-center">
                    <div className="birthday-pricing col-12 col-lg-4 d-flex justify-content-center">
                        <img src={birthdayplan} />
                    </div>
                     <div className="birthday-pricing col-12 col-lg-4">
                        <img src={plan1} />
                    </div>
                    <div className="birthday-pricing col-12 col-lg-4">
                        <img src={plan2} />
                    </div>  */}
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
