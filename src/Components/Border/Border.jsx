//Import React
import React from 'react';

//Import Css
import './Border.css';

function Border(props) {
    return (
        <>
            {/* Border Section */}
            <section className="border">
                <div className="border-content__blok">
                    <div className="border-content">
                        <h1>50% OFF</h1>
                        <h2>Sunday Special Offer</h2>
                        <p>Only for Sunday from 1st Jan to 30th Jan 2045</p>
                        <div className="border__sign-up">
                            <input type="text" placeholder="Your Email" />
                            <button>Sign Up</button>
                        </div>
                    </div>
                </div>
            </section>
            {/* /Border Section */}
        </>
    );
}

export default Border;