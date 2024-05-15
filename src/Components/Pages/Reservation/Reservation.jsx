// Import React
import React from "react";

// Import Css
import "./Reservation.css";

// Import Icons
import { BiCheck } from "react-icons/bi";

function Reservation() {
  return (
    <div>
      <section className="reservation">
        <div className="reservation__content">
          <div className="for-online-reservation__content">
            <h1>30% OFF</h1>
            <h2>For Online Reservation</h2>
            <p>
              Lorem justo clita erat lorem labore ea, justo dolor lorem ipsum ut
              sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed
              diam. Ea et erat ut sed diam sea
            </p>
            <div className="for-online-reservation__content--check">
              <BiCheck className="for-online-reservation__content--icons" />
              <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div className="for-online-reservation__content--check">
              <BiCheck className="for-online-reservation__content--icons" />
              <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div className="for-online-reservation__content--check">
              <BiCheck className="for-online-reservation__content--icons" />
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>

          <div className="reservation__content--forma">
            <h1>Book Your Table</h1>
            <input
              className="reservation__content--forma--item"
              type="text"
              placeholder="Name"
            />
            <input
              className="reservation__content--forma--item"
              type="email"
              placeholder="Email"
            />
            <input
              className="reservation__content--forma--item"
              type="date"
              placeholder="Date"
            />
            <input
              className="reservation__content--forma--item"
              type="time"
              placeholder="Time"
            />
            <select className="reservation__content--forma--item">
              <option value="0">Person</option>
              <option value="1">Person 1</option>
              <option value="2">Person 2</option>
              <option value="3">Person 3</option>
            </select>
            <button className="reservation__content--forma--item reservation__content--forma-item__btn">
              Book Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Reservation;
