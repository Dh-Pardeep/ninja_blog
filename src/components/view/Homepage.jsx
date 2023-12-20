import React from 'react'
import MainPage from './MainPage'
import SingleBlog from './SingleBlog'
import { Route, Routes } from 'react-router-dom'
import 'animate.css';
const Homepage = () => {
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