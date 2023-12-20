import React from 'react';
import { CardData, CardDataTwo } from '../MapData';
import { Link } from 'react-router-dom';

const CardSection = () => {
    return (
        <div className='container xl:w-[1100px] px-3 sm:px-5 xl:px-0 mx-auto'>
            <div className='flex md:flex-row flex-col justify-center gap-12 md:gap-16 lg:gap-20 mt-12 md:mt-16 lg:mt-20 mb-12 md:mb-16 lg:mb-20'>
                {CardData.map((data) => (
                    <Link to="/singleblog">
                        <div key={data.id} className='flex flex-col justify-between full_card'>
                            <div>
                                <div className='flex items-center justify-center overflow-hidden rounded-lg'>
                                    <img className='w-full object-cover rounded-lg  hover:scale-105 transition-all ease-linear duration-200' src={data.img} alt="river img" />
                                </div>
                                <div className='mt-5 mb-2'>
                                    <button className='  px-4 pt-1 pb-[3px] bg-light_blue text-opacity_white font-Roboto text-xsm font-semibold leading-normal rounded transition-all duration-200 ease-in-out hover:bg-white hover:text-light_blue hover:shadow-[0px_2px_6px_0px] hover:shadow-light_blue'>{data.button}</button>
                                </div>
                                <div className='flex items-center'>
                                    <h2 className='text-md text-start lg:text-lg font-bold text-black font-Merriweather leading-[140%]'>{data.heading}</h2>
                                </div>
                                <div className='mb-3'>
                                    <h2 className='text-gray_text font-Merriweather leading-[160%] text-[12px] sm:text-xsm font-normal'>{data.timeing}</h2>
                                </div>
                                <div className='mb-5 '>
                                    <p className='text-para_gray font-Roboto text-sm  leading-[160%] font-normal md:max-w-[510px] md:h-[153px] lg:h-[105px]'>{data.paragraph}</p>
                                </div>
                            </div>
                            <div className=' flex items-center'>
                                <img className='w-11 h-11 object-cover rounded-full hover:scale-105 transition-all ease-linear duration-200' src={data.smallImg} alt="George Costanza" />
                                <h2 className='font-bold leading-[160%] text-xsm font-Merriweather text-black ms-[14px]'>{data.ImgName}</h2>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <div className='flex md:flex-row flex-col justify-center gap-12 md:gap-16 lg:gap-20 mt-12 md:mt-16 lg:mt-20 mb-12 md:mb-16 lg:mb-20'>
                {CardDataTwo.map((data, index) => (
                    <Link to="/singleblog">
                        <div key={data.id} className={`flex flex-col justify-between ${index % 2 === 0 ? 'md:order-2' : ''}`}>
                            <div>
                                <div className='flex items-center justify-center rounded-lg overflow-hidden'>
                                    <img className='w-full object-cover rounded-lg hover:scale-105 transition-all ease-linear duration-200' src={data.img} alt="river img" />
                                </div>
                                <div className='mt-5 mb-2'>
                                    <button className='  px-4 pt-1 pb-[3px] bg-light_blue text-opacity_white font-Roboto text-xsm font-semibold leading-normal rounded transition-all duration-200 ease-in-out hover:bg-white hover:text-light_blue hover:shadow-[0px_2px_6px_0px] hover:shadow-light_blue'>{data.button}</button>
                                </div>
                                <div className='flex items-center justify-center'>
                                    <h2 className='text-md lg:text-lg font-bold text-black font-Merriweather leading-[140%]'>{data.heading}</h2>
                                </div>
                                <div className='mb-3'>
                                    <h2 className='text-gray_text font-Merriweather leading-[160%] text-[12px] sm:text-xsm font-normal'>{data.timeing}</h2>
                                </div>
                                <div className='mb-5 '>
                                    <p className='text-para_gray font-Roboto text-sm  leading-[160%] font-normal md:max-w-[510px] md:h-[153px] lg:h-[105px]'>{data.paragraph}</p>
                                </div>
                            </div>
                            <div className=' flex items-center '>
                                <img className='w-11 h-11 object-cover rounded-full hover:scale-105 transition-all ease-linear duration-200' src={data.smallImg} alt="George Costanza" />
                                <h2 className='font-bold leading-[160%] text-xsm font-Merriweather text-black ms-[14px]'>{data.ImgName}</h2>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CardSection;
