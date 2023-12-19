import React from 'react'
import Kitchinone from '../assets/webp/kitchen_pic_two.webp'
import KitchinoneTwo from '../assets/webp/kitchen_pic.webp'
import George_Costanza from '../assets/webp/George_Costanza.webp'

const KeepReading = () => {
    return (
        <div className='container xl:w-[1100px] px-3 sm:px-5 xl:px-0 mx-auto'>
            <div className='max-w-[800px] w-full mx-auto mt-12'>
                <h2 className='table_color font-Merriweather font-bold text-xxl leading-[160%] mb-[30px]'>Keep reading</h2>
                <div className='flex gap-[34px]'>
                    <div className='w-[55%]'>
                        <img className='w-full' src={Kitchinone} alt="Kitchinone" />
                    </div>
                    <div>
                        <h2 className='text-table_color font-Merriweather text-lg font-bold leading-[160%]'>Why you don’t need more than 3 pieces of clothing</h2>
                        <p className='mt-2 text-table_color_para font-Roboto text-xmd font-normal leading-[160%]'>Et vitae, mollis euismod lobortis blandit amet sed amet. Amet ut amet nisl tortor arcu non id nulla mauris neque nisl magna.</p>
                    </div>
                </div>
                <div className='flex gap-[34px] mt-[30px] mb-12'>
                    <div className='w-[55%]'>
                        <img className='w-full' src={KitchinoneTwo} alt="Kitchinone" />
                    </div>
                    <div>
                        <h2 className='text-table_color font-Merriweather text-lg font-bold leading-[160%]'>Why you should cook with your family together everyday</h2>
                        <p className='mt-2 text-table_color_para font-Roboto text-xmd font-normal leading-[160%]'>Rutrum aliquet eros semper nunc. In adipiscing augue sagittis, fermentum donec nunc lacinia. Risus in egestas in orci quam.</p>
                    </div>
                </div>
                <div className='border rounded-md bg-medium_gray_two  py-11 px-8'>
                    <div className='flex gap-7'>
                        <div>
                            <img width={150} src={George_Costanza} alt="George_Costanza" />
                        </div>
                        <div className='mt-3'>
                            <h2 className='font-normal leading-[160%] text-lg font-Merriweather text-black'>Written by George Costanza</h2>
                            <p className='font-normal leading-[160%] text-xmd font-Roboto text-black max-w-[555px]'>Volutpat cursus id id tincidunt duis id. Urna curabitur ultrices molestie bibendum. Purus orci nisl, commodo ipsum, ut urna, elementum. Nunc potenti lectus in erat ligula cras. Eget.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KeepReading