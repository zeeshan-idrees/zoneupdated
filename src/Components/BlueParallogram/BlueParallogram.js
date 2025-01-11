import './BlueParallogram.css'

const BlueParallogram = ({ children }) => {
    return (
        <>
            <div className="blue-haxagon-left w-fitContent">
                <div className="blue-inner-bg">
                    <div className="blue-inner">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}

export default BlueParallogram;