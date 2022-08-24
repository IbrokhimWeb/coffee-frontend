// Import React
import { React, useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai'
import { Link } from 'react-router-dom';

// Import Css
import './Navbar.css';



function Navbar(props) {
    const [show, SetShow] = useState(false);


    return (
        <>
            <div className="navbar">
                <h1>COFFEE</h1>
                <ul>
                    <li>
                        <Link to="/" className="navbar-hrefs active" >Home</Link>
                        <Link to="/about" className="navbar-hrefs" >About</Link>
                        <Link to="/service" className="navbar-hrefs" >Service</Link>
                        <Link to="/menu" className="navbar-hrefs" >Menu</Link>
                        <button onClick={()=>SetShow(e=>!e)}  className="navbar-btn">Pages <AiFillCaretDown className="navbar-btn__icon"/></button>

                       

                        <Link to="/contact" className="navbar-hrefs" >Contact</Link>
                    </li>
                    {
                            show ?

                                <div className="none-pages-blok">
                                    <div className="none-pages">
                                        <Link to="/reservation">Reservation</Link>
                                        <Link to="/testimonial">Testimonial</Link>
                                    </div>
                                </div>

                                : ""
                        }
                </ul>
            </div>
        </>
    );
}

export default Navbar;



//  {/* <div className="navbar">
// <h1>COFFEE</h1>
// <ul>
//     <li>
//         <Link className="navbar-hrefs active" to="/" > Home    </Link>
//         <Link className="navbar-hrefs" to="/about"  > About   </Link>
//         <Link className="navbar-hrefs" to="/service"> Service </Link>
//         <Link className="navbar-hrefs" to="/menu"   > Menu    </Link>
//         <Link className="navbar-hrefs" onClick={heandelClick} >
//             Pages
//             <AiFillCaretDown className="navbar-href__icon" />
//         </Link>
//         <div className="none-pages-blok">
//             <div className="none-pages">
//                 <a href="">Reservation</a>
//                 <a href="">Testimonial</a>
//             </div>
//         </div>

//         <a className="navbar-hrefs" href="/contact"> Contact </a>
//     </li>
// </ul>
// </div> */}