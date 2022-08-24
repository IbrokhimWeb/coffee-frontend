// Import React
import React from 'react';

// import img
import blackCoffee from '../../img/menu-1.jpg'
import chocolateCoffee from '../../img/menu-2.jpg'
import milkCoffee from '../../img/menu-3.jpg'



// Import Css
import './Menu.css'
function Menu(props) {
    return (
        <>
            <menu className="menu">
                <div className="menu-content">
                    <div className="linia" />
                    <h2>MENU & PRICING</h2>
                    <h1>Competitive Pricing</h1>
                </div>
                <div className="menu-content__coffee">
                    <div className="hot-coffee">
                        <h1 className="coffee-brand">Hot Coffee</h1>

                        <div className="black-coffee">
                            <span className="coffee-chena">$5</span>
                            <img className="b-radius" src={blackCoffee} />
                            <div>
                                <h1 className="coffee-brand">Black Coffee</h1>
                                <p className="coffee-brand__title">Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor</p>
                            </div>
                        </div>

                        <div className="chocolete-coffee">
                        <span className="coffee-chena">$7</span>
                            <img className="b-radius" src={chocolateCoffee} />
                            <div>
                                <h1 className="coffee-brand">Chocolete Coffee</h1>
                                <p className="coffee-brand__title">Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor</p>
                            </div>
                        </div>

                        <div className="coffee-with-milk">
                        <span className="coffee-chena">$9</span>
                            <img className="b-radius" src={milkCoffee} />
                            <div>
                                <h1 className="coffee-brand">Coffee With Milk</h1>
                                <p className="coffee-brand__title">Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor</p>
                            </div>
                        </div>
                    </div>

                    <div className="cold-coffee">
                        <h1>Cold Coffee</h1>
                        <div className="black-coffee">
                        <span className="coffee-chena">$5</span>
                            <img className="b-radius" src={blackCoffee} />
                            <div>
                                <h1 className="coffee-brand">Black Coffee</h1>
                                <p className="coffee-brand__title">Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor</p>
                            </div>
                        </div>

                        <div className="chocolete-coffee">
                        <span className="coffee-chena">$7</span>
                            <img className="b-radius" src={chocolateCoffee} />
                            <div>
                                <h1 className="coffee-brand">Chocolete Coffee</h1>
                                <p className="coffee-brand__title">Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor</p>
                            </div>
                        </div>

                        <div className="coffee-with-milk">
                        <span className="coffee-chena">$9</span>
                            <img className="b-radius" src={milkCoffee} />
                            <div>
                                <h1 className="coffee-brand">Coffee With Milk</h1>
                                <p className="coffee-brand__title">Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor</p>
                            </div>
                        </div>
                    </div>
                </div>
            </menu>
        </>
    );
}

export default Menu;
