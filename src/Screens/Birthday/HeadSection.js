import BlueParallogram from '../../Components/BlueParallogram/BlueParallogram';
import arrow_narrow_right from '../../assets/img/arrow-narrow-right.svg'


const HeadSection = () => {
    return (
        <>
            <div className="pt-5 text-blue" >
                <div className="d-flex justify-content-center">

                    
                        <div className="d-flex gap-3 align-items-baseline">
                            <p className="mb-0 text-blue font-space">Bday Zone</p>
                        </div>
                   
                </div>
                <p className="font-poppins fw-bold fs-7vw text-center  mx-auto w-18ch mt-4" > Celebrate Bday
                    With Thrill Zone</p>
                <p className='my-4 font-poppins fs-18 -80 text-center w-50 mx-auto fw-700'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>

                <div>
                    <ul className="d-flex gap-3 justify-content-center">
                        <button class="white-image-button text-nowrap px-5 text-blue font-poppins-500  bg-transparent border-0 text-center fs-16 d-inline-block">Booking</button>
                        {/* <div className="d-flex gap-2">
                            <p className=' mb-0 align-content-center font-space'>Booking</p>
                            <img src={arrow_narrow_right} alt='arr' />
                        </div> */}

                    </ul>

                <div className="divider pb-5 ">

                </div>
                </div>
            </div>
        </>
    );
}

export default HeadSection;