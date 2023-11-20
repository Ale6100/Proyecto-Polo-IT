import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollCheck = () => {
    const location = useLocation();

    useEffect(() => {
        if (!location.pathname.includes("/company/")) {
            scrollTo({ top: 0, behavior: 'smooth' })
        }
    }, [location]);
}

export default ScrollCheck
