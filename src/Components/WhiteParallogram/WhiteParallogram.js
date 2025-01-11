import './WhiteParallogram.css'
const WhiteParallogram = ({ children }) => {
    return (
        <>
            <div className="white-haxagon-right topBar ms-auto">
                <div className="white-inner-bg">
                    <div className="white-inner">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}

export default WhiteParallogram;