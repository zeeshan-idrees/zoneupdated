import './HomePage.css';
// import arrow_narrow_right from '../../assets/img/arrow-narrow-right.svg'
// import BlueParallogram from '../BlueParallogram/BlueParallogram';


const HeadSection = ({align,img,heading,heading2}) => {
    return (
        <>
            <div className={`text-light ${img} d-flex w-100 justify-content-center text-center`} >
             
<div className={`${align}`}>
<h1 className=' fs-3vw fw-bold'>{heading}</h1>
<p className='fs-3vw fw-bold'>{heading2}</p>
</div>
              
               

            </div>
        </>
    );
}

export default HeadSection;