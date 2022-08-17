// import React
import React from 'react';

// Import Css
import './About.css'

// Import icons
import { FiCheck } from 'react-icons/fi';

// Import photo
import coffee from '../../img/about.png'

function About(props) {
    return (
        <>
            <div className="about">
                <div className="linia"></div>
                <h2>ABOUT US</h2>
                <h1>Serving Since 1950</h1>  
                <div className="development">
                    <div className="story">
                        <h1>Our Story</h1>
                        <h4>Eos kasd eos dolor vero vero, lorem stet diam rebum. Ipsum amet sed vero dolor sea</h4>
                        <p>Takimata sed vero vero no sit sed, justo clita duo no duo amet et, nonumy kasd sed dolor eos diam lorem eirmod. Amet sit amet amet no. Est nonumy sed labore eirmod sit magna. Erat at est justo sit ut. Labor diam sed ipsum et eirmod</p>
                        <button>Learn More</button>
                    </div>
                    <img src={coffee} alt="" width={350} height={500} />
                    <div className="vision">
                        <h1>Our Vision</h1>
                        <p>Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est dolor</p>
                        <div className="added">
                            <div className="added-icons">
                                <FiCheck className="ic"/>
                                <FiCheck className="ic"/>
                                <FiCheck className="ic"/>
                            </div>
                            <div className="added-text">
                                <p>Lorem ipsum dolor sit amet</p>
                                <p>Lorem ipsum dolor sit amet</p>
                                <p>Lorem ipsum dolor sit amet</p>
                            </div>
                        </div>
                        <button>Learn More</button>
                    </div>    
                </div>  
            </div>  
        </>
    );
}

export default About;