
import partyarea from '../assets/img/partyarea.jpg'
import birthdayzone_1 from '../assets/img/birthdayzone_1.JPG';
import birthdayzone_2 from '../assets/img/birthdayzone_2.JPG';
import birthdayzone_3 from '../assets/img/birthdayzone_3.JPG';
import birthdayzone_4 from '../assets/img/birthdayzone_4.JPG';
import birthdayzone_5 from '../assets/img/birthdayzone_5.JPG';
import birthdayzone_6 from '../assets/img/birthdayzone_6.JPG';
import birthdayzone_7 from '../assets/img/birthdayzone_7.JPG';
import birthdayzone_8 from '../assets/img/birthdayzone_8.JPG';



const ExperinceTrill = ({heading,heading2}) => {
    return (
        <>
            <section>
                <div className="row justify-content-center text-blue text-center">
                    <p className=" thrill-text fs-2vw fw-bold font-poppins-500 col-md-9 my-3  " >{heading}</p>

                    <p className="col-md-10  fs-5 fw-normal">{heading2}
                    </p>
                </div>
                <div className="row justify-content-center row-gap-3 text-center ">

                <div className=" col-6 col-lg-4 p-1    ">
                            <img src={partyarea} alt='' className="img-fluid rounded-4  " />
                     </div>
                    <div className=" col-6 col-lg-4 p-1 ">
                         <img src={birthdayzone_1} alt='' className="img-fluid rounded-4 " />
                     </div>
                    <div className=" col-6 col-lg-4 p-1 ">
                         <img src={birthdayzone_2} alt='' className="img-fluid rounded-4  " />
                       </div>
                    <div className=" col-6 col-lg-4 p-1 ">
                           <img src={birthdayzone_3} alt='' className="img-fluid rounded-4  " />
                      </div>
                    <div className=" col-6 col-lg-4 p-1    ">
                          <img src={birthdayzone_4} alt='' className="img-fluid rounded-4  " />
                     </div>
                   
                     <div className=" col-6 col-lg-4 p-1    ">
                          <img src={birthdayzone_5} alt='' className="img-fluid rounded-4 rounded-4 " />
                    </div>
                     <div className=" col-6 col-lg-4 p-1    ">
                          <img src={birthdayzone_6} alt='' className="img-fluid rounded-4 rounded-4 " />
                    </div>
                     <div className=" col-6 col-lg-4 p-1    ">
                          <img src={birthdayzone_7} alt='' className="img-fluid rounded-4 rounded-4 " />
                    </div>
                     <div className=" col-6 col-lg-4 p-1    ">
                          <img src={birthdayzone_8} alt='' className="img-fluid rounded-4 rounded-4 " />
                    </div>
                 </div>
            </section>
        </>
    );
}

export default ExperinceTrill;