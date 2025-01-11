// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = (props) => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo({top: 0, left: 0 });
    }, [location]);

    return <>
        {props.children}
    </>
  };

export default ScrollToTop;