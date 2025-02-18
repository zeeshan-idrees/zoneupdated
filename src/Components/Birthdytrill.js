
import grid1 from '../assets/img/bdy1.jpg'
import package2 from '../assets/img/package2.jpeg'
import grid3 from '../assets/img/grid3.jpeg'
import grid4 from '../assets/img/bdy2.jpg'  
import grid5 from '../assets/img/grid5.jpeg'
import partyarea from '../assets/img/partyarea.jpg'

const ExperinceTrill = ({heading,heading2}) => {
    return (
        <>
            <section>
                <div className="row justify-content-center text-blue text-center">
                    <p className=" thrill-text fs-2vw fw-bold font-poppins-500 col-md-9 my-3  " >{heading}</p>
                    {/* <button class="white-image-button text-nowrap px-5 ms-auto text-blue font-poppins-500  bg-transparent border-0 text-center fs-16 d-inline-block">Read More</button> */}
                    <p className="col-md-10  fs-5 fw-normal">{heading2}
                    </p>
                </div>
                <div className="row justify-content-center row-gap-3 text-center ">

                <div className=" col-6 col-lg-4 p-1    ">
                            <img src={partyarea} alt='' className="img-fluid rounded-4  " />
                     </div>
                    <div className=" col-6 col-lg-4 p-1 ">
                         <img src={package2} alt='' className="img-fluid rounded-4 " />
                     </div>
                    <div className=" col-6 col-lg-4 p-1 ">
                         <img src={grid3} alt='' className="img-fluid rounded-4  " />
                       </div>
                    <div className=" col-6 col-lg-4 p-1 ">
                           <img src={grid1} alt='' className="img-fluid rounded-4  " />
                      </div>
                    <div className=" col-6 col-lg-4 p-1    ">
                          <img src={grid5} alt='' className="img-fluid rounded-4  " />
                     </div>
                   
                     <div className=" col-6 col-lg-4 p-1    ">
                          <img src={grid4} alt='' className="img-fluid rounded-4 rounded-4 " />
                    </div>
                 </div>
            </section>
        </>
    );
}

export default ExperinceTrill;