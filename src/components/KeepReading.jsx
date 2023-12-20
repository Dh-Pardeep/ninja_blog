import React from 'react'
import Kitchinone from '../assets/webp/kitchen_pic_two.webp'
import KitchinoneTwo from '../assets/webp/kitchen_pic.webp'
import George_Costanza from '../assets/webp/George_Costanza.webp'

const KeepReading = () => {     
    return (
        <div className='container xl:w-[1100px] px-3 sm:px-5 xl:px-0 mx-auto'>
            <div className='max-w-[800px] w-full mx-auto mt-[30px] md:mt-12'>
                <h2 className='table_color font-Merriweather font-bold text-xxl leading-[160%] mb-[30px]'>Keep reading</h2>
                <div className='flex flex-col sm:flex-row gap-[30px] md:gap-[34px]'>
                    <div className='w-full sm:w-[85%] md:w-[75%] lg:w-[60%] xl:w-[55%] shadow-[0px_5px_10px_0px] overflow-hidden shadow-[#00000080] rounded-md'>
                        <img className='w-full hover:scale-105 transition-all ease-linear duration-200 rounded-md min-h-[150px]' src={Kitchinone} alt="Kitchinone" />
                    </div>
                    <div>
                        <h2 className='text-table_color font-Merriweather text-md lg:text-lg font-bold leading-[160%]'>Why you don’t need more than 3 pieces of clothing</h2>
                        <p className='mt-2 text-table_color_para font-Roboto text-sm lg:text-xmd font-normal leading-[160%]'>Et vitae, mollis euismod lobortis blandit amet sed amet. Amet ut amet nisl tortor arcu non id nulla mauris neque nisl magna.</p>
                    </div>
                </div>
                <div className='flex gap-[34px] mt-12 sm:mt-[30px] mb-12 flex-col sm:flex-row'>
                    <div className='w-full sm:w-[85%] md:w-[75%] lg:w-[60%] xl:w-[55%] shadow-[0px_5px_10px_0px] overflow-hidden shadow-[#00000080] rounded-md'>
                        <img className='w-full hover:scale-105 transition-all ease-linear duration-200 rounded-md min-h-[150px]' src={KitchinoneTwo} alt="Kitchinone" />
                    </div>
                    <div>
                        <h2 className='text-table_color font-Merriweather text-md lg:text-lg font-bold leading-[160%]'>Why you should cook with your family together everyday</h2>
                        <p className='mt-2 text-table_color_para font-Roboto text-sm lg:text-xmd font-normal leading-[160%]'>Rutrum aliquet eros semper nunc. In adipiscing augue sagittis, fermentum donec nunc lacinia. Risus in egestas in orci quam.</p>
                    </div>
                </div>
                <div className='border rounded-md bg-medium_gray_two  py-11 px-8'>
                    <div className='flex flex-col md:flex-row gap-7 items-center'>
                        <div className='w-full md:w-1/4'>
                            <img className='w-full max-w-[150px] mx-auto ' src={George_Costanza} alt="George_Costanza" />
                        </div>
                        <div className='mt-3 w-full md:w-3/4'>
                            <h2 className='font-normal leading-[160%] text-md md:text-lg font-Merriweather text-black text-center md:text-start'>Written by George Costanza</h2>
                            <p className='font-normal leading-[160%] text-sm  md:text-xmd font-Roboto text-black md:max-w-[555px] mt-3 md:text-start text-center' >Volutpat cursus id id tincidunt duis id. Urna curabitur ultrices molestie bibendum. Purus orci nisl, commodo ipsum, ut urna, elementum. Nunc potenti lectus in erat ligula cras. Eget.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KeepReading