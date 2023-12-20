import React, { useEffect } from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import HeroSection from '../HeroSection'
import CardSection from '../CardSection'
import Subscribe from '../Subscribe'
import BackToTop from '../common/BackToTop'
const MainPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className='pt-4 sm:pt-8 md:pt-12 lg:pt-16 pb-14 sm:pb-16 md:pb-20 lg:pb-24'>
                <Header />
            </div>
            <HeroSection />
            <CardSection />
            <Subscribe />
            <Footer />
            <BackToTop />
        </>
    )
}

export default MainPage