import React, { useEffect } from 'react'
import MainPage from './MainPage'
import SingleBlog from './SingleBlog'
import { Route, Routes } from 'react-router-dom'
import 'animate.css';
import Aos from 'aos';
import "aos/dist/aos.css";
const Homepage = () => {
    useEffect(() => {
        Aos.init({
            once: true,
            duration: 1500,
        });
    }, []);
    return (
        <>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/singleblog' element={<SingleBlog />} />
            </Routes>
        </>
    )
}

export default Homepage 