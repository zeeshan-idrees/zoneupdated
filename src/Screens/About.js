import React, { useState } from "react";
import Topbar from "../Components/Topbar";
import HeadSection from "../Components/HomePage/Header";
import Adventure from '../assets/img/Adventure.jpg'
import WhatsAppButton from "../Components/Whatsapp";
import draw4 from '../assets/img/draw4.png'
import about5 from '../assets/img/about5.jpg'
import about6 from '../assets/img/about6.jpg'
import Footer from "../Components/Footerr";
import Location from "../Components/location";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const About = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    centerMode: true,
    centerPadding: '30%', // Adjusted to make left and right slides 50% visible
    slidesToShow: 1, // Only one slide is fully shown at a time
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    beforeChange: (current, next) => setActiveSlide(next),
    focusOnSelect: true,
    slide: 'div',
    // prevArrow: <img src={play} alt='prev' />, // Set custom prev arrow
    // nextArrow: <img src={play} alt='next' /> // Set custom next arrow
  };


  const slides = [
    // { id: 1, image: about1 },
    // { id: 2, image: about2 },
    // { id: 3, image: about3 },
    { id: 4, image: draw4 },
    { id: 5, image: about5 },
    { id: 6, image: about6 },
  ];
  return (
    <>
      <Topbar />
      <div className="d-flex p-0 m-0"> <HeadSection img='banner about-banner' align='bottom' heading='About Thrill Zone' />
      </div>
      <WhatsAppButton />
      <div className="container-fluid">

        <section className="my-3 my-md-5 ">
          <div className="row justify-content-center  font-poppins-500">
            <h1 className="text-blue text-center"> Let the Adventure begin</h1>
            <p className="col-sm-8 text-center adventure-text text-blue ">Dive into thrilling multiplayer battles, epic adventures, and the latest releases. Challenge friends or embark on solo missions. Get ready for non-stop fun!"</p>
          </div>

          <div className="">
            <Slider {...settings}>
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`slide h-100x p-1 ${index === activeSlide ? 'active' : ''}`}
                >
                  <img className="w-100" src={slide.image} alt={`Slide ${slide.id}`} />
                </div>
              ))}
            </Slider>
          </div>

        </section>
        <section >
          <div className="row justify-content-center  gap-3">
            <div className="col-md-5 text-blue">
              <h1 className="fs-2 fw-bold">

                Welcome to Thrill Zone – Your Ultimate Adventure Destination!
              </h1>
              <p className="fs-5 pt-3">Locations: Dubai - Abu Dhabi - Lahore (Penta Square, DHA Phase 5) Attractions:</p>
              <p className="fs-5 pt-3">🎮 Arcade Games,🤸 Soft Play Area ,🚗 Bumper Cars ,🦘 Trampoline ,🏋️ Ninja Course ,👶 Toddlers Area ,☕ Cafe</p>
             
            </div>
            <div className="col-md-4">
              <img src={Adventure} className="img-fluid rounded-4" alt="" />
            </div>
          </div>
        </section>

        <section className="container pt-2 pt-md-5 mt-5 pb-3">
          <Location />
        </section>
      </div>
      <section className="mt-5 position-relative overflow-hidden">
        <Footer />
      </section>


    </>
  );
}

export default About;