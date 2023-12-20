import React from 'react'
import { SearchIcon } from './common/Icons'
const HeroSection = () => {
    return (
        <div className='container xl:w-[1100px] px-3 sm:px-5 xl:px-0 mx-auto'>
            <h1 className='text-center text-heading font-Merriweather text-[30px] sm:text-[36px] md:text-[42px] lg:text-3xl font-black leading-normal '>The Food Ninja Blog</h1>
            <p className='text-center text-light_gray font-Roboto text-sm sm:text-xmd md:text-md font-normal leading-normal mt-2 '>A blog about food, experiences, and recipes.</p>
            <div className='border border-border_color bg-white max-w-[430px] pt-3 md:pt-[17px] pb-[11px] md:pb-[16px] px-5 md:px-7 rounded-md mx-auto mt-8 sm:mt-10 md:mt-12 lg:mt-14 flex justify-between items-center'>
                <input type="search" placeholder='Search for articles' className='placeholder:text-medium_gray placeholder:font-Merriweather placeholder:md:text-xmd placeholder:text-sm placeholder:leading-normal placeholder:font-normal outline-none border-none w-4/5' />
             <SearchIcon/>
            </div>
        </div>
    )
}

export default HeroSection