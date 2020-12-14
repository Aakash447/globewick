import React from 'react'
import Header from '../Home/Header';
import Footer from '../Home/Footer';
import './css/about.scss'
import AboutUs from '../Home/AboutUs';
function Index() {
    return (
        <>  
            <div id="about-container">
            <Header/>
            <AboutUs/>
            </div>
            
            <Footer/>
        </>
    )
}

export default Index
