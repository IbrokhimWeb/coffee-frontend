// Import React
import React, { useState } from "react";
import "../Carusel/Carusel.css";

// Import Photo
import CaruselImage1 from "../../img/carousel-1.jpg";
import CaruselImage2 from "../../img/carousel-2.jpg";

// Import icons
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

// Start Carusel
function Carusel() {
  let x = 0;
  const [img, setImg] = useState(true);

  return (
    <>
      <div className="carusel-wrapper">
        <img
          className="carusel__img"
          src={img ? CaruselImage1 : CaruselImage2}
        />
        <div className="carusel__content">
          <h2 className="carusel__desc-1">We Have Been Serving</h2>
          <h1 className="carusel__desc-2">COFFEE</h1>
          <h3 className="carusel__desc-3">* SINCE 1950 *</h3>
          <GoChevronLeft
            onClick={() => setImg(!img)}
            className="carusel__left-icon"
          />
          <GoChevronRight
            onClick={() => setImg(!img)}
            className="carusel__right-icon"
          />
        </div>
      </div>
    </>
  );
}

export default Carusel;
