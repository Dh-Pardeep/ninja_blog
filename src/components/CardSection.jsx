import React from 'react';
import { CardData, CardDataTwo } from '../MapData';

const CardSection = () => {
    return (
        <div className='container xl:w-[1100px] px-3 sm:px-5 xl:px-0 mx-auto'>
            <div className='flex md:flex-row flex-col justify-center gap-14 lg:gap-20 mt-14 lg:mt-20 mb-14 lg:mb-20'>
                {CardData.map((data) => (
                    <div key={data.id} className='flex flex-col justify-between '>
                        <div>
                            <div className='flex items-center justify-center'>
                                <img className='w-full object-cover rounded-lg' src={data.img} alt="river img" />
                            </div>
                            <div className='mt-5 mb-2'>
                                <button className='  px-4 pt-1 pb-[3px] bg-light_blue text-opacity_white font-Roboto text-xsm font-semibold leading-normal rounded '>{data.button}</button>
                            </div>
                            <div className='flex items-center'>
                                <h2 className='text-md text-start lg:text-lg font-bold text-black font-Merriweather leading-[140%]'>{data.heading}</h2>
                            </div>
                            <div className='mb-3'>
                                <h2 className='text-gray_text font-Merriweather leading-[160%] text-xsm font-normal'>{data.timeing}</h2>
                            </div>
                            <div className='mb-5 '>
                                <p className='text-para_gray font-Roboto text-sm  leading-[160%] font-normal md:max-w-[510px] '>{data.paragraph}</p>
                            </div>
                        </div>
                        <div className=' flex items-center'>
                            <img className='w-11 h-11 object-cover rounded-full' src={data.smallImg} alt="George Costanza" />
                            <h2 className='font-bold leading-[160%] text-xsm font-Merriweather text-black ms-[14px]'>{data.ImgName}</h2>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex md:flex-row flex-col justify-center gap-14 lg:gap-20 mt-14 lg:mt-20 mb-14 lg:mb-20'>
                {CardDataTwo.map((data) => (
                    <div key={data.id} className='flex flex-col justify-between '>
                        <div>
                            <div className='flex items-center justify-center'>
                                <img className='w-full object-cover rounded-lg' src={data.img} alt="river img" />
                            </div>
                            <div className='mt-5 mb-2'>
                                <button className='  px-4 pt-1 pb-[3px] bg-light_blue text-opacity_white font-Roboto text-xsm font-semibold leading-normal rounded '>{data.button}</button>
                            </div>
                            <div className='flex items-center justify-center'>
                                <h2 className='text-md lg:text-lg font-bold text-black font-Merriweather leading-[140%]'>{data.heading}</h2>
                            </div>
                            <div className='mb-3'>
                                <h2 className='text-gray_text font-Merriweather leading-[160%] text-xsm font-normal'>{data.timeing}</h2>
                            </div>
                            <div className='mb-5 '>
                                <p className='text-para_gray font-Roboto text-sm  leading-[160%] font-normal md:max-w-[510px] '>{data.paragraph}</p>
                            </div>
                        </div>
                        <div className=' flex items-center'>
                            <img className='w-11 h-11 object-cover rounded-full' src={data.smallImg} alt="George Costanza" />
                            <h2 className='font-bold leading-[160%] text-xsm font-Merriweather text-black ms-[14px]'>{data.ImgName}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardSection;
