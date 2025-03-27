import Topbar from "../../Components/Topbar";
import gallery1 from '../../assets/img/gallery1.jpg';
import gallery2 from '../../assets/img/gallery2.jpg';
import gallery3 from '../../assets/img/gallery3.jpg';
import gallery4 from '../../assets/img/gallery4.png';
import gallery5 from '../../assets/img/gallery5.png';
import gallery6 from '../../assets/img/gallery6.jpg';
import gallery7 from '../../assets/img/gallery7.jpg';
import gallery8 from '../../assets/img/gallery8.jpg';
import gallery9 from '../../assets/img/gallery9.jpg';
import trampolineimg from '../../assets/img/trampolineimg.png';
import gallerybanner from '../../assets/img/gallerybanner.jpg';
import { useState, useRef } from "react";
import Footer from "../../Components/Footerr";
import playIcon from '../../assets/img/play_btn.svg'; // Your custom play icon
import pauseIcon from '../../assets/img/pause_btn.svg'; // Your custom pause icon
import IrrParallelogram from "../../Components/IrrParallelogram/IrrParallelogram";
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
        <> <Topbar />
            <div className="">
                <div className="top-bg">
                    <div className="d-flex ">
                        <div className="deals-image ">
                            <img src={gallerybanner} width="100% " alt='' />
                        </div>
                    </div>
                </div>
                <WhatsAppButton />
                <div className="gallery-heading text-blue text-center  fw-bold  my-4 ">Jump Into Fun at Our Trampoline Park</div>
            <div className="container">
                <div className="row  px-0 px-md-4  mb-3">
                    <div className=" col-lg-6 font-poppins-400  pt-3 d-flex flex-column justify-content-center">
                      
                        <p className="fs-5 text-blue fw-500 school-content">Experience non-stop excitement at Thrill Zone’s Trampoline Park! Jump, flip, and soar to new heights on our Super Trampoline, designed for thrill-seekers of all ages. Whether you're a pro jumper or just looking to have fun, our trampoline park promises hours of laughter and adventure. Perfect for families, groups, or solo fun – get ready to defy gravity and make unforgettable memories!
                        </p>
                    </div>
                    <div className="bus-image col-lg-6">
                        <img src={trampolineimg} width="100% " alt='' />
                    </div>

                </div>
            </div>
            <div className="gallery-heading text-blue text-center  fw-bold  my-4 ">Our Gallery</div>
                <section className="container">
                    <div className="row pt-3 my-3 justify-content-center text-center ">
                        <div className="col-md-4 col-4 p-1 ">
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
                src="https://res.cloudinary.com/dr5860rkp/video/upload/v1742803442/Snapinst.app_video_AQMxd7MRUaqEK47emi5JH8i8Nih56R1HDE7KAlV0qoW9wIVjeDj0pif5jf4YOjX1LZhGfI8opP3gdDatWAo2atA9iopsVChRVg6gqE8_i719nm.mp4"
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
                <section className="mt-5 position-relative overflow-hidden">
                    <Footer />
                </section>
            </div>
        </>
    );
}
export default Gallery;