/*MainRouter.jsx
Name: CHun YU Clement Chan
Student ID: 301454624
Date: 27/5/2025*/

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './src/About'
import Contact from './src/Contact'
import Service from './src/service'
import Project from './src/project'
import Layout from './components/Layout'

const MainRouter = () => {
        return (<div>
                <Layout/>
                <Routes>
                        
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/about" element={<About />} />
                        <Route exact path="/service" element={<Service />} />
                        <Route exact path="/project" element={<Project />} />
                        <Route exact path="/contact" element={<Contact />} />
                        
                </Routes>
        </div>
        )
}
export default MainRouter

