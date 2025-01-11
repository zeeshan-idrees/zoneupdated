

import trip2 from '../assets/img/trip2.jpg';
import trip3 from '../assets/img/trip3.jpg'
import  trip4 from '../assets/img/trip4.jpg'
import  trip5 from '../assets/img/trip5.jpg'
import  trip6 from '../assets/img/trip6.jpg'
import  trip7 from '../assets/img/trip7.jpg'

const ExperinceTrill = ({heading,heading2}) => {
    return (
        <>
            <section>
                <div className="row justify-content-center text-blue text-center">
                    <p className=" thrill-text fs-2vw fw-bold font-poppins-500 col-md-9 my-3 my-md-5 " >🎉 Host Your School Trips at Thrill Zone! 🎉</p>
                   
                    <p className="col-md-10  fs-5 fw-normal">{heading2}
                    </p>
                </div>
                <div className="row justify-content-center row-gap-3 text-center ">

                    <div className=" col-6 col-lg-4 p-1    ">
                          <img src={trip2} alt='' className="img-fluid rounded-4 rounded-4 " />
                    </div>
                    <div className=" col-6 col-lg-4 p-1 ">
                         <img src={trip3} alt='' className="img-fluid rounded-4 " />
                     </div>
                    <div className=" col-6 col-lg-4 p-1 ">
                         <img src={trip4} alt='' className="img-fluid rounded-4  " />
                       </div>
                    <div className=" col-6 col-lg-4 p-1 ">
                           <img src={trip5} alt='' className="img-fluid rounded-4  " />
                      </div>
                    <div className=" col-6 col-lg-4 p-1    ">
                          <img src={trip6} alt='' className="img-fluid rounded-4  " />
                     </div>
                    <div className=" col-6 col-lg-4 p-1    ">
                            <img src={trip7} alt='' className="img-fluid rounded-4  " />
                     </div>
                 </div>
            </section>
        </>
    );
}

export default ExperinceTrill;