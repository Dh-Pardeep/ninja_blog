import React, { useState, useEffect } from 'react';
import { FiChevronsUp } from 'react-icons/fi';
const BackToTop = () => {

    const [showScroll, setShowScroll] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop)
        return function cleanup() {
            window.removeEventListener('scroll', checkScrollTop)
        }
    })

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 200) {
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 200) {
            setShowScroll(false)
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <FiChevronsUp className="fixed w-[40px] md:w-[48px] bottom-[20px] BackToTop_height p-[9px] end-[20px] items-center  justify-center z-[1000] cursor-pointer scrollTop text-white bg-light_blue rounded-[50%] transition-all duration-200 ease-in-out hover:bg-white hover:text-light_blue hover:shadow-[0px_2px_20px_0px] hover:shadow-light_blue sm:bottom-[30px] sm:w-[45px] sm:end-[30px]  md:bottom-[40px] h-[40px] md:h-[48px]  md:end-[40px] backtotop_scale" onClick={scrollTop} style={{ display: showScroll ? 'flex' : 'none' }} />

        </>
    );
}

export default BackToTop;