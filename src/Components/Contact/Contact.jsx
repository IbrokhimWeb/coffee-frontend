// Import react
import React from 'react';

// Import Css
import './Contact.css'

// import Icons
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

// Import Component
import Header from '../Header/Header'

function Contact(props) {
    return (
        <>
            <Header mainPage="Contact" />
            <section className="contact-page">
                <div className="linia" />
                <h3>CONTACT US</h3>
                <h1>Feel Free To Contact</h1>
                <div className="contact-map__bloks">
                    <div className="contact-map__blok">
                        <FaMapMarkerAlt className="contact-map__blok--icons" />
                        <h1>Address</h1>
                        <p>Parkent, Tashkent ,Uzb</p>
                    </div>
                    <div className="contact-map__blok" >
                        <FaPhoneAlt className="contact-map__blok--icons" />
                        <h1>Phone</h1>
                        <p>+998 99 6057845</p>
                    </div>
                    <div className="contact-map__blok" >
                        <FiMail className="contact-map__blok--icons" />
                        <h1>Email</h1>
                        <p>ibrokhimweb@gmail.com</p>
                    </div>
                </div>
                <div className="contact-map-form__blok">
                    <div className="contact__map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d753.2811474492837!2d69.52794125810924!3d41.31376958516738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae5774bb568c81%3A0x5a794f7263a1e89a!2zQXN0cnVtIC0g0JjQoiDQkNC60LDQtNC10LzQuNGP!5e0!3m2!1sru!2s!4v1661331956505!5m2!1sru!2s" ></iframe>
                    </div>
                    <div className="contact__form">
                        <input type="text" placeholder="Your Name" />
                        <input type="email" placeholder="Your Email" />
                        <input type="text" placeholder="Subject" />
                        <textarea cols="30" rows="10" placeholder="Message" ></textarea>
                        <button>Send Message</button>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Contact;