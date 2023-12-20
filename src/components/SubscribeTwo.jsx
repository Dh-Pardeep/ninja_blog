import React from 'react'

const SubscribeTwo = () => {
    return (
        <div className='container xl:w-[1180px] px-3 sm:px-5 xl:px-0 mx-auto xl:ms-auto xl:me-[100px]'>
            <div className='flex flex-col lg:flex-row gap-10  xl:gap-20 mb-12 lg:mb-36 mt-12 lg:mt-[100px] '>
                <div className='rounded-md bg-light_blue w-full  lg:w-[36%] xl:w-4/12 py-9 px-7'>
                    <h2 className='text-white text-center font-Merriweather text-md lg:text-lg font-black leading-[160%] md:max-w-[182px] mx-auto'>Subscribe To Our Newsletter</h2>
                    <p className='text-para_light_gray text-center font-Roboto text-xmd font-medium leading-[160%] pt-3 pb-4'>Get weekly food news, articles, and videos delivered to your inbox.</p>
                    <div className='mx-4'>
                        <form>
                            <div className='sm:flex justify-center lg:justify-start lg:items-start lg:flex-col items-center'>
                                <div className='text-center mb-6 sm:mb-0 lg:mb-6'>
                                    <input required type="email" placeholder='Email' className='placeholder:text-light_gray placeholder:font-Roboto placeholder:text-xmd placeholder:font-medium placeholder:leading-normal bg-white rounded w-full sm:w-[288px] lg:m-full max-w-[288px] ps-4 py-3 outline-none' />
                                </div>
                                <div className='text-center md:text-start sm:ps-5 lg:ps-0'>
                                    <button className='text-white font-Roboto text-xmd font-medium leading-[160%] bg-heading rounded py-[9.6px] px-4 transition-all duration-200 ease-in-out hover:bg-white hover:text-light_blue hover:shadow-[0px_2px_6px_0px] hover:shadow-black'>Sign Up</button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
                <div className='flex flex-col sm:flex-row justify-between gap-10 xl:gap-20'>
                    <div>
                        <h2 className='text-black font-Roboto font-medium leading-[160%] text-xsm'>POPULAR POSTS</h2>
                        <p className='mt-7 text-black font-Merriweather font-normal leading-[160%] text-xsm md:max-w-[320px]'>How To Have Your Cake and Eat It Too: The Way of The Chicken Man</p>
                        <p className='mt-4 lg:mt-[22px] text-black font-Merriweather font-normal leading-[160%] text-xsm'>My Grandma’s 30-year-old Recipe</p>
                        <p className='mt-4 lg:mt-[22px] text-black font-Merriweather font-normal leading-[160%] text-xsm'>What I learned about cooking from Ratatoulie</p>
                    </div>
                    <div>
                        <h2 className='text-black font-Roboto font-medium leading-[160%] text-xsm'>Recent Posts</h2>
                        <p className='mt-7 text-black font-Merriweather font-normal leading-[160%] text-xsm md:max-w-[320px]'>How To Have Your Cake and Eat It Too: The Way of The Chicken Man</p>
                        <p className='mt-4 lg:mt-[22px] text-black font-Merriweather font-normal leading-[160%] text-xsm'>My Grandma’s 30-year-old Recipe</p>
                        <p className='mt-4 lg:mt-[22px] text-black font-Merriweather font-normal leading-[160%] text-xsm'>What I learned about cooking from Ratatoulie</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubscribeTwo