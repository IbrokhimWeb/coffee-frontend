// Import React
import React from "react";
import "../Carusel/Carusel.css";
// Import Photo
import CaruselImage from "../../img/carousel-1.jpg";

// Import icons
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
// import About from '../About/About';

function Carusel(props) {
  return (
    <>
      <div className="carusel-wrapper carusel">
        <img className="carusel__img" src={CaruselImage} alt="" />
        <div className="carusel__content">
          <h2 className="carusel__desc-1">We Have Been Serving</h2>
          <h1 className="carusel__desc-2">COFFEE</h1>
          <h3 className="carusel__desc-3">* SINCE 1950 *</h3>
          <GoChevronLeft className="carusel__left-icon" />
          <GoChevronRight className="carusel__right-icon" />
        </div>
      </div>
    </>
  );
}

export default Carusel;
