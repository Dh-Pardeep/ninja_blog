import React, { useEffect } from 'react'
import Header from '../common/Header'
import BlogFullPage from '../BlogFullPage'
import KeepReading from '../KeepReading'
import Subscribe from '../Subscribe'
import Footer from '../common/Footer'
import BackToTop from '../common/BackToTop'
const SingleBlog = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className='pt-9'>
                <Header />
            </div>
            <BlogFullPage />
            <KeepReading />
            <Subscribe />
            <Footer />
            <BackToTop />
        </>
    )
}

export default SingleBlog