import React, { useRef, useState } from 'react';
import { Spin, message } from 'antd'; // Import antd components
import Topbar from '../../Components/Topbar';
import IrrParallelogram from '../../Components/ContactUsLayout/ContactLayout';
import home2 from '../../assets/img/home2.jpg';
import emailjs from 'emailjs-com';
import Footer from "../../Components/Footerr";

const ContactUs = () => {
    const [selectedItem, setSelectedItem] = useState("Auswählen...");
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        to_name: '',
        to_email: '',
        phoneNumber: '',
        message: '',
    });
    const [loading, setLoading] = useState(false); // Loader state

    const selectBoxRef = useRef(null);

    // const items = [
    //     { id: 'item1', title: 'Item 1' },
    //     { id: 'item2', title: 'Item 2' },
    //     { id: 'item3', title: 'Item 3' },
    //     { id: 'item4', title: 'Item 4' },
    //     { id: 'item5', title: 'Item 5' }
    // ];

    // const handleItemClick = (title) => {
    //     setSelectedItem(title);
    //     setIsOpen(false);
    //     setFormData({ ...formData, service: title });
    // };

    const handleBlur = (event) => {
        if (!selectBoxRef.current.contains(event.relatedTarget)) {
            setIsOpen(false);
        }
    };

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleChange = (e) => {
       

        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        if (!formData.to_name || !formData.to_email || !formData.phoneNumber || !formData.message) {
            message.error('All fields are required!');
            return false;
        }
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;
    
        setLoading(true); // Start loading
        console.log("Form data: ", formData); // Log form data for debugging
    
        emailjs.send(
            'service_klvwyof',
            'template_tkjl33w',
            formData,
            'O2jj5boRYFHExFpJL'
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            message.success('Thank you! Your booking request has been successfully sent. We will get back to you shortly.');
            setFormData({
                to_name: '',
                to_email: '',
                phoneNumber: '',
                message: '',
            });
        })
        .catch((error) => {
            console.log('FAILED...', error); // Log error for debugging
            message.error('Oops! Something went wrong while sending your booking request. Please try again or contact our support.');
        })
        .finally(() => {
            setLoading(false); // Stop loading
        });
    };
    


    return (
        <>
            <Topbar />
            <div className="top-bg"></div>
            <div className='container'>
                {/* <h1 className='text-blue fs-2vw pt-3 text-center'>LET'S TALK</h1> */}
                <p className=" fs-7vw text-center mx-auto w-18ch mt-4">Contact Us</p>
                <div className="col-12 contactborder position-relative">
                    <IrrParallelogram>
                        <form onSubmit={handleSubmit} className='me-4'>
                            <div className="row pad">
                                <div className="col-12 col-md-6 frst_sec pt-5 mt-4 px-0">
                                    <p className="fs-3vw text-white">Contact Us</p>
                                    {/* <p className='font-poppins fs-16 text-white-80'>Sed ut perspiciatis unde</p> */}

                                    <label className='form-label text-white fw-500 font-poppins fs-14'>First Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        className='form-control bg-transparent text-white input-feild font-poppins fw-400'
                                        name="to_name"
                                        value={formData.to_name}
                                        onChange={handleChange}
                                        required
                                    />

                                    <label className='form-label text-white fw-500 font-poppins fs-14'>Email address</label>
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className='form-control bg-transparent text-white input-feild font-poppins fw-400'
                                        name="to_email"
                                        value={formData.to_email}
                                        onChange={handleChange}
                                        required
                                    />

                                    <label className='form-label text-white fw-500 font-poppins fs-14'>Phone Number</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your phone number"
                                        className='form-control bg-transparent text-white input-feild font-poppins fw-400'
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                        required
                                    />
                                    <label className='form-label text-white fw-500 font-poppins fs-14'>Message</label>
                                    <textarea
                                    column="8"
                                    rows="4"
                                        type="text"
                                        placeholder="Enter your phone number"
                                        className='form-control bg-transparent text-white input-feild font-poppins fw-400'
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />

                                    <button type="submit" className="white-image-button text-nowrap px-5 text-blue font-poppins-500 bg-transparent border-0 text-center fs-16 d-inline-block my-3">
                                        {loading ? <Spin className='pe-2' spinning={loading}></Spin> : null}Contact Us
                                    </button>
                                </div>
                                <div className="col-12 col-md-6">
                                    <img className="w-100 h-100 object-fit-cover" src={home2} alt="Contact Us" />
                                </div>
                            </div>
                        </form>
                    </IrrParallelogram>
                </div>
            </div>
            <section className="mt-5 position-relative overflow-hidden">
                <Footer />
            </section>
        </>
    );
}

export default ContactUs;