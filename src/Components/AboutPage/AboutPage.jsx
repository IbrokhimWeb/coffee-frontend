import React from 'react';
import About from '../About/About';
// import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function AboutPage(props) {
    return (
        <>
            {/* //qwerty */}
            <Header mainPage="About Us"/>
            <About />
            {/* <Footer/> */}
        </>
    );
}

export default AboutPage;