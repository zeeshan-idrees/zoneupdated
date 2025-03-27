
// import grid1 from '../assets/img/grid1.jpeg'
import grid2 from '../assets/img/grid2.jpeg'
import grid3 from '../assets/img/grid3.jpg'
import grid4 from '../assets/img/grid4.jpeg'
import grid5 from '../assets/img/grid5.jpg'
import grid6 from '../assets/img/grid6.jpeg';
import illycafe from '../assets/img/illycafe.jpg';

const ExperinceTrill = ({ heading, heading2 }) => {
    return (
        <>
            <section>
                <div className="row justify-content-center text-blue text-center">
                    <p className=" thrill-gallery fs-2vw fw-bold col-md-9 my-4 mb-0 py-2" >Thrill Gallery </p>

                </div>
                <div className="row justify-content-center row-gap-3 text-center ">

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
                    <div className=" col-6 col-lg-4 p-1    ">

                        <img src={illycafe} alt='' className="img-fluid rounded-4  " />


                    </div>
                </div>
            </section>
        </>
    );
}

export default ExperinceTrill;