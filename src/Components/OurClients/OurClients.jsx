import React from "react";
import Testimonial1 from "../../img/testimonial-1.jpg";
import Testimonial2 from "../../img/testimonial-2.jpg";
import Testimonial3 from "../../img/testimonial-3.jpg";
import "./OurClients.css";

export const OurClients = () => {
  return (
    <>
      <li className="testimonial__item">
        <div className="testimonial__item-content">
          <img
            className="testimonial__item-img"
            src={Testimonial1}
            alt="Client Name"
            width="80"
            height="80"
          />
          <div className="testimonial__item-person">
            <h3 className="testimonial__item-name">Client Name</h3>
            <p className="testimonial__item-profession">Profession</p>
          </div>
        </div>
        <p className="testimonial__item-text">
          Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod
          clita lorem. Dolor tempor ipsum sanct clita
        </p>
      </li>
      <li className="testimonial__item">
        <div className="testimonial__item-content">
          <img
            className="testimonial__item-img"
            src={Testimonial2}
            alt="Client Name"
            width="80"
            height="80"
          />
          <div className="testimonial__item-person">
            <h3 className="testimonial__item-name">Client Name</h3>
            <p className="testimonial__item-profession">Profession</p>
          </div>
        </div>
        <p className="testimonial__item-text">
          Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod
          clita lorem. Dolor tempor ipsum sanct clita
        </p>
      </li>
      <li className="testimonial__item">
        <div className="testimonial__item-content">
          <img
            className="testimonial__item-img"
            src={Testimonial3}
            alt="Client Name"
            width="80"
            height="80"
          />
          <div className="testimonial__item-person">
            <h3 className="testimonial__item-name">Client Name</h3>
            <p className="testimonial__item-profession">Profession</p>
          </div>
        </div>
        <p className="testimonial__item-text">
          Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod
          clita lorem. Dolor tempor ipsum sanct clita
        </p>
      </li>
    </>
  );
};
