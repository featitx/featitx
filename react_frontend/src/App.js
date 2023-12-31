import React from "react";
import {About, Footer , Skills , Testimonial, Header } from './containers/exports';
import Navbar from './component/Navbar/Navbar';
import './App.scss'

const App = () =>{
    return (
        <>
        <div className="app">
            <Navbar></Navbar>
            <Header></Header>
            <About></About>
            <Skills></Skills>
            <Testimonial></Testimonial>
            <Footer></Footer>

        </div>
        </>
    )
}


export default App;
