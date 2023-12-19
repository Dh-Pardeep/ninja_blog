import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import HeroSection from '../HeroSection'
import CardSection from '../CardSection'
import Subscribe from '../Subscribe'

const MainPage = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <CardSection />
            <Subscribe />
            <Footer />
        </>
    )
}

export default MainPage