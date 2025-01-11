import HeadSection from "../../Components/HomePage/Header";
import Topbar from "../../Components/Topbar";
import gallery1 from '../../assets/img/gallery1.jpg'
import gallery2 from '../../assets/img/gallery2.jpg'
import gallery3 from '../../assets/img/gallery3.jpg'
import gallery4 from '../../assets/img/gallery4.png'
import gallery5 from '../../assets/img/gallery5.png'
import gallery6 from '../../assets/img/gallery6.jpg'
import gallery7 from '../../assets/img/gallery7.jpg'
import gallery8 from '../../assets/img/gallery8.jpg'
import gallery9 from '../../assets/img/gallery9.jpg'
import gallery10 from '../../assets/img/gallery10.png'
import gallery11 from '../../assets/img/gallery11.png'
// import gallery12 from '../../assets/img/gallery12.png'
import { useState, useRef } from "react";
import Footer from "../../Components/Footerr";
import playIcon from '../../assets/img/play_btn.svg'; // Your custom play icon
import pauseIcon from '../../assets/img/pause_btn.svg'; // Your custom pause icon
// import vr_man from '../../assets/img/vr_man.png'; // Your custom play icon
// import downArrow from '../../assets/img/downArrow.svg'; // Your custom play icon
import IrrParallelogram from "../../Components/IrrParallelogram/IrrParallelogram";
import WhatsAppButton from "../../Components/Whatsapp";
// import ExperinceTrill from "../../Components/ExperienceTrill";
// import Footer from "../../Components/Footer";


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

                    <div className="d-flex">

                        <HeadSection img='banner gallery' />
                    </div>
                </div>
                <WhatsAppButton/>
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
                        <div className="col-md-4 col-4 p-1">
                            <img src={gallery10} alt="" className="img-fluid rounded-3" />
                        </div>
                        <div className="col-md-4 col-4 p-1">
                            <img src={gallery11} alt="" className="img-fluid rounded-3" />
                        </div>
                        {/* <div className="col-md-4 col-4 p-1">
                            <img src={gallery12} alt="" className="img-fluid rounded-3" />
                        </div> */}
                    </div>

                </section>

                <section className="py-3 py-md-5">
                    <div className="videoClip borderParallelogram position-relative  ">
                        <IrrParallelogram>

                            <video
                                className="clip-path-video w-100"
                                autoPlay
                                muted
                                loop
                                ref={videoRef}
                            >
                                <source src='https://thrill-zone.vercel.app/videos/s_video.mp4' type="video/mp4" />
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