// import React
import React from 'react';

// Import Css
import './Home.css'

// Import Photo
import carusel1 from '../../Img/carousel-1.jpg'
import overlay from '../../Img/overlay-bottom.png'

// Import icons
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import About from '../About/About';

function Home(props) {
    return (
        <>
            <div className="home">
                <div className="home-carusel">
                    <img className="carusel1" src={carusel1} alt="" />
                    <h2>We Have Been Serving</h2>
                    <h1>COFFEE</h1>
                    <h3>* SINCE 1950 *</h3>
                    <div className="overlay-blok">
                        <img className="overlay" src={overlay} alt="" />
                        <img className="overlay" src={overlay} alt="" />
                        <img className="overlay" src={overlay} alt="" />
                    </div>  
                    <GoChevronLeft className="carusel-left-icon"/>
                    <GoChevronRight className="carusel-right-icon"/>
                </div>
                <About/>
                
            </div> 
        </>
    );
}

export default Home;