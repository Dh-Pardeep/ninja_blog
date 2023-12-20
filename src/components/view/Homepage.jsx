import React, { useEffect } from 'react'
import MainPage from './MainPage'
import SingleBlog from './SingleBlog'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'animate.css';
const Homepage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/fullblogPage' element={<SingleBlog />} />
                </Routes>
            </Router>
        </>
    )
}

export default Homepage 