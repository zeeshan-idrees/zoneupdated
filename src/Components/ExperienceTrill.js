// import IrrParallelogram from "./IrrParallelogram/IrrParallelogram";
import grid1 from '../assets/img/home1.jpg'
import grid2 from '../assets/img/home2.jpg'
import grid3 from '../assets/img/home3.jpg'
import grid4 from '../assets/img/home4.jpg'
import grid5 from '../assets/img/draw4.png'
import grid6 from '../assets/img/home6.jpg'



 
const ExperinceTrill = ({heading,heading2}) => {
    return (
        <>
            <section>
                <div className="row justify-content-center text-blue text-center">
                    <p className="fs-2vw fw-bold font-poppins-500 col-md-9 my-2 mb-0 py-2" >{heading}</p>
                    {/* <button class="white-image-button text-nowrap px-5 ms-auto text-blue font-poppins-500  bg-transparent border-0 text-center fs-16 d-inline-block">Read More</button> */}
                    <p className="col-md-10  fs-22 fw-normal">{heading2}
                    </p>
                </div>
                <div className="row justify-content-center row-gap-3 text-center ">

                    <div className=" col-6 col-lg-4 p-1    ">
                        
                            <img src={grid1} alt='' className="img-fluid rounded-4 rounded-4 " />
                       
                        
                    </div>
                    <div className=" col-6 col-lg-4 p-1    ">
                        
                            <img src={grid2} alt='' className="img-fluid rounded-4 " />
                        
                    
                    </div>
                    <div className=" col-6 col-lg-4 p-1    ">
                        
                            <img src={grid3} alt='' className="img-fluid rounded-4  " />
                        
                    
                    </div>
                    <div className=" col-6 col-lg-4 p-1    ">
                        
                            <img src={grid4} alt='' className="img-fluid rounded-4  " />
                        
                     
                    </div>
                    <div className=" col-6 col-lg-4 p-1    ">
                        
                            <img src={grid5} alt='' className="img-fluid rounded-4  " />
                            
                      
                    </div>
                    <div className=" col-6 col-lg-4 p-1    ">
                        
                            <img src={grid6} alt='' className="img-fluid rounded-4  " />
                        
                       
                    </div>
                   
                </div>
            </section>
        </>
    );
}

export default ExperinceTrill;