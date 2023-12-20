import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
const Header = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    if (showNavbar) {
        document.body.classList.remove('overflow_hidden');
    } else {
        document.body.classList.add('overflow_hidden')
    }
    return (
        <>
            <header>
                <div className='container xl:w-[1100px]  px-3 sm:px-5 xl:px-0 mx-auto'>
                    <nav className='flex justify-between items-center '>
                        <div className='cursor-pointer flex items-center  '>
                            <Link to='/' className='font-black leading-normal text-md lg:text-lg font-Merriweather text-heading'>Food Ninja</Link>
                        </div>
                        <ul className={`${showNavbar ? 'flex items-center mb-0 nav_sm p-0 gap-5' : 'gap-5 flex items-center mb-0 nav_sm nav_show p-0'} `}>
                            <li><button onClick={() => setShowNavbar(true)} className='font-Roboto text-light_gray text-[5vw] sm:text-[3vw] md:text-xmd leading-normal   relative after:content-[""] after:w-0 after:h-[3px] after:transition-all transition-all  after:ease-in-out ease-in-out after:duration-300 duration-300 after:bg-light_gray after:absolute after:bottom-[-3px] hover:after:w-full hover:after:left-0 after:left-[50%]   '>Blog</button></li>
                            <li><button onClick={() => setShowNavbar(true)} className='font-Roboto text-light_gray text-[5vw] sm:text-[3vw] md:text-xmd leading-normal   relative after:content-[""] after:w-0 after:h-[3px] after:transition-all transition-all  after:ease-in-out ease-in-out after:duration-300 duration-300 after:bg-light_gray after:absolute after:bottom-[-3px] hover:after:w-full hover:after:left-0 after:left-[50%]   ' >About</button></li>
                            <li><button onClick={() => setShowNavbar(true)} className='font-Roboto text-light_gray text-[5vw] sm:text-[3vw] md:text-xmd leading-normal   relative after:content-[""] after:w-0 after:h-[3px] after:transition-all transition-all  after:ease-in-out ease-in-out after:duration-300 duration-300 after:bg-light_gray after:absolute after:bottom-[-3px] hover:after:w-full hover:after:left-0 after:left-[50%]   ' >Contact</button></li>
                            <li><button onClick={() => setShowNavbar(true)} className='font-Roboto text-white bg-light_blue py-2 px-4 rounded-[29px]  text-[5vw] sm:text-[3vw] md:text-xmd leading-normal transition-all duration-200 ease-in-out hover:bg-white hover:text-light_blue hover:shadow-[0px_2px_6px_0px] hover:shadow-light_blue' >Log in</button></li>
                            <span title="close" className=" close_nav light_gray fw-bold md:hidden" onClick={() => setShowNavbar(true)} ><RxCross2 fontSize={35} color='#000638' /></span>
                        </ul>
                        <span title="open"
                            className="inline-block md:hidden fw-bold light_gray "
                            onClick={() => setShowNavbar(false)}>
                            <RxHamburgerMenu fontSize={35} color='#000638' /></span>

                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header
