import React, { useState, useEffect } from 'react';

const Footer = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []); 
    return (
        <div className='bg-medium_gray_two mt-2'>
            <div className='container xl:w-[1100px] px-3 sm:px-5 xl:px-0 mx-auto'>
                <ul className='flex justify-center items-center pt-9 gap-6'>
                    <li><button className='text-footer_light_gray font-Merriweather font-normal leading-[160%] text-xsm hover:text-black transition-all ease-linear duration-200'>About</button></li>
                    <li><button className='text-footer_light_gray font-Merriweather font-normal leading-[160%] text-xsm hover:text-black transition-all ease-linear duration-200'>Privacy Policy</button></li>
                    <li><button className='text-footer_light_gray font-Merriweather font-normal leading-[160%] text-xsm hover:text-black transition-all ease-linear duration-200'>Contact</button></li>
                </ul>
                <p className='text-center pb-9 pt-[26px] text-copyright_color text-xsm font-bold leading-[160%]'>Copyright © {currentYear} Food Ninja Blog. All Rights Reserved.</p>
            </div>
        </div>
    );
}

export default Footer;
