import React from 'react';
import { OurClients } from '../../OurClients/OurClients';
import "./Testimonial.css"

function Testimonial(props) {
    return (
        <div className="testimonial">
            <div className="testimonial__head">
                <h2 className="testimonial__title">Testimonial</h2>
                <h2 className="testimonial__desc">Our Clients Say</h2>
            </div>
            <ul className="testimonial__list">
                <OurClients/>
            </ul>
        </div>
    );
}

export default Testimonial;