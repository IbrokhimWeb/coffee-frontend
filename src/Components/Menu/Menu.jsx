// Import React
import React from 'react';

// Import Css
import './Menu.css'

function Menu(props) {
    return (
        <>
            <section class="price">
                <span class="menu">Menu & Pricing</span>
                <h1 class="title">Competitive Pricing</h1>
                <div class="categories">
                    <div class="categries_left">
                        <h3 class="category_title">Hot Caffee</h3>
                        <div class="category_item">
                            <div class="category_img">
                                <img src="https://images.unsplash.com/photo-1577968897495-28a1897c9f15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29mZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                                    alt="cafe" />
                                <span>$5</span>
                            </div>
                            <div class="info">
                                <h4>Black Coffee</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus amet possimus assumenda.
                                    Doloribus, earum magni.</p>
                            </div>
                        </div>
                        <div class="category_item">
                            <div class="category_img">
                                <img src="https://media.istockphoto.com/photos/turkish-coffee-with-plenty-of-foam-in-a-powder-pink-cup-on-a-dark-picture-id1322358904?b=1&k=20&m=1322358904&s=170667a&w=0&h=xLMyx2SAOuPudCVnTbIE57-0WLgW3C9cpFM0OcGNooA="
                                    alt="cafe" />
                                <span>$7</span>
                            </div>
                            <div class="info">
                                <h4>Chocolete Coffee</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus amet possimus assumenda.
                                    Doloribus, earum magni.</p>
                            </div>
                        </div>
                        <div class="category_item">
                            <div class="category_img">
                                <img src="https://images.unsplash.com/photo-1577968897966-3d4325b36b61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                                    alt="cafe" />
                                <span>$9</span>
                            </div>
                            <div class="info">
                                <h4>Coffee With Milk</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus amet possimus assumenda.
                                    Doloribus, earum magni.</p>
                            </div>
                        </div>
                    </div>
                    <div class="categries_right">
                        <h3 class="category_title">Cold Caffee</h3>
                        <div class="category_item">
                            <div class="category_img">
                                <img src="https://images.unsplash.com/photo-1577968897495-28a1897c9f15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29mZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                                    alt="cafe" />
                                <span>$5</span>
                            </div>
                            <div class="info">
                                <h4>Black Coffee</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus amet possimus assumenda.
                                    Doloribus, earum magni.</p>
                            </div>
                        </div>
                        <div class="category_item">
                            <div class="category_img">
                                <img src="https://media.istockphoto.com/photos/turkish-coffee-with-plenty-of-foam-in-a-powder-pink-cup-on-a-dark-picture-id1322358904?b=1&k=20&m=1322358904&s=170667a&w=0&h=xLMyx2SAOuPudCVnTbIE57-0WLgW3C9cpFM0OcGNooA="
                                    alt="cafe" />
                                <span>$7</span>
                            </div>
                            <div class="info">
                                <h4>Chocolete Coffee</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus amet possimus assumenda.
                                    Doloribus, earum magni.</p>
                            </div>
                        </div>
                        <div class="category_item">
                            <div class="category_img">
                                <img src="https://images.unsplash.com/photo-1577968897966-3d4325b36b61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                                    alt="cafe" />
                                <span>$9</span>
                            </div>
                            <div class="info">
                                <h4>Coffee With Milk</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus amet possimus assumenda.
                                    Doloribus, earum magni.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}

export default Menu;
