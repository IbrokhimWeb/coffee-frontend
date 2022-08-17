// Import React
import React from 'react';

// Import Photo
import carusel1 from '../../img/carousel-1.jpg';


// Import icons
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
// import About from '../About/About';

function Carusel(props) {
    return (
        <>
            <div className="home">
            <img className="carusel1" src={carusel1} alt="" />
                <div className="home-carusel">
                    <h2>We Have Been Serving</h2>
                    <h1>COFFEE</h1>
                    <h3>* SINCE 1950 *</h3>
                    <GoChevronLeft className="carusel-left-icon"/>
                    <GoChevronRight className="carusel-right-icon"/>
                </div>
            </div> 
        </>
    );
}

export default Carusel;