import React from "react";
import { OurServicesItem } from "../OurServices/OurServicesItem";
import "./Service.css";

function Service(props) {
  return (
    <div className="our-services">
      <div className="our-services__head">
        <h2 className="our-services__title">Our Services</h2>
        <h2 className="our-services__desc">Fresh & Organic Beans</h2>
      </div>
      <ul className="our-services__list">
        <OurServicesItem />
      </ul>
    </div>
  );
}

export default Service;
