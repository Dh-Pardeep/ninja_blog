import React, { useRef, useState } from 'react'
import search_icon from '../assets/svg/search_icon.svg'
const HeroSection = () => {
    const [isActive, setIsActive] = useState(false);
    const inputRef = useRef(null);
  
    const toggleInput = () => {
      setIsActive(!isActive);
    };
  
    const handleInputClick = () => {
      setIsActive(true);
    };
  
    const handleInputBlur = () => {
      setIsActive(false);
    };

    return (
        <div className='container xl:w-[1100px] px-3 sm:px-5 xl:px-0 mx-auto'>
            <h1 className='text-center text-heading font-Merriweather text-[30px] sm:text-[36px] md:text-[42px] lg:text-3xl font-black leading-normal '>The Food Ninja Blog</h1>
            <p className='text-center text-light_gray font-Roboto text-sm sm:text-xmd md:text-md  leading-normal mt-2 '>A blog about food, experiences, and recipes.</p>
            <div className={`mb-20 border border-solid border-[#ddd] ${isActive ? 'bg-blue-200' : 'bg-[#FEFEFE]'} ps-7 py-4 pe-[24px] flex justify-between max-w-[430px] mx-auto w-full rounded-[5px] items-center mt-8 sm:mt-10 md:mt-12 lg:mt-14`}>
                <input
                    type="search"
                    ref={inputRef}
                    placeholder="Search for articles"
                    className={`outline-none bg-transparent text-Dim-Gray font-merriweather text-sm font-normal leading-[100%] w-full placeholder:text-medium_gray placeholder:font-Merriweather placeholder:md:text-xmd placeholder:text-sm placeholder:leading-normal ${isActive ? 'active-input' : ''}`}
                    onClick={handleInputClick}
                    onBlur={handleInputBlur}
                />
                <img onClick={toggleInput} className={`ms-3 ${isActive ? 'active-icon' : ''}`} src={search_icon} alt="search_icon" />
            </div>
        </div >
    )
}

export default HeroSection