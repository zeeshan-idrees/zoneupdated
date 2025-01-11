import './ContactLayout.css'

const ContactLayout = ({ children }) => {
    return (
        <>
            <div className="video-blue-haxagon h-100">
                <div className="video-inner-bg h-100">
                    <div className="video-inner h-100">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactLayout;