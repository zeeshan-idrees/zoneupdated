
import grid2 from '../assets/img/grid2.jpeg'
import grid3 from '../assets/img/home3.jpg'
import birthdayzone_4 from '../assets/img/birthdayzone_4.JPG'
import mainimg from '../assets/img/mainimg.jpg';
import about5 from '../assets/img/grid4.jpeg'
import birthdayzone_5 from '../assets/img/birthdayzone_5.JPG';


const ExperinceTrill = ({ heading, heading2 }) => {
    return (
        <>
            <section>
                <div className="row justify-content-center text-blue text-center">
                    <p className="fs-2vw fw-bold font-poppins-500 col-md-9 my-2 mb-0 py-2" >{heading}</p>
                    {/* <button class="white-image-button text-nowrap px-5 ms-auto text-blue font-poppins-500  bg-transparent border-0 text-center fs-16 d-inline-block">Read More</button> */}
                    <p className="col-md-10  fs-22 fw-normal">{heading2}
                    </p>
                </div>
                < div className="row justify-content-center row-gap-3 text-center ">
                 <div className=" col-6 col-lg-4 p-1    ">
                        <img src={mainimg} alt='' className="img-fluid rounded-4 " />
                    </div>
                    <div className=" col-6 col-lg-4 p-1    ">
                        <img src={grid2} alt='' className="img-fluid rounded-4 " />
                    </div>

                    <div className=" col-6 col-lg-4 p-1">

                        <img src={about5} alt='' className="img-fluid rounded-4  " />


                    </div>

                    <div className=" col-6 col-lg-4 p-1    ">

                        <img src={birthdayzone_4} alt='' className="img-fluid rounded-4  " />


                    </div>
                    <div className=" col-6 col-lg-4 p-1    ">

                        <img src={grid3} alt='' className="img-fluid rounded-4  " />


                    </div>
                  
                    <div className=" col-6 col-lg-4 p-1    ">
                        <img src={birthdayzone_5} alt='' className="img-fluid rounded-4  " />
                    </div>
                    


                </div>
            </section>
        </>
    );
}

export default ExperinceTrill;