import React from 'react';
import About from '../About/About';
// import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function AboutPage(props) {
    return (
        <>
            <Header mainPage="About Us"/>
            <About />
        </>
    );
}

export default AboutPage;