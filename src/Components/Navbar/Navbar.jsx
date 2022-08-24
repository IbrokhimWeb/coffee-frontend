// Import React
import React from 'react';
import { AiFillCaretDown } from 'react-icons/ai'
import { BrowserRouter, Link } from 'react-router-dom';

// Import Css
import './Navbar.css';

function Navbar(props) {
    return (
        <>
            <div className="navbar">
                <h1>COFFEE</h1>
                <ul>
                    <li>
                        <a className="navbar-hrefs active" href="/" > Home    </a>
                        <a className="navbar-hrefs" href="/about"  > About   </a>
                        <a className="navbar-hrefs" href="/service"> Service </a>
                        <a className="navbar-hrefs" href="/menu"   > Menu    </a>
                        <a className="navbar-hrefs" >
                            Pages
                            <AiFillCaretDown className="navbar-href__icon" />
                        </a>
                        <a className="navbar-hrefs" href="/contact"> Contact </a>
                    </li>
                </ul>
            </div>
            {/* <BrowserRouter> */}
            {/* <div className="navbar">
                <h1>COFFEE</h1>
                <ul>
                    <li>
                        <Link to="/" className="navbar-hrefs active" >Home</Link>
                        <Link to="/about" className="navbar-hrefs" >About</Link>
                        <Link to="/service" className="navbar-hrefs" >Service</Link>
                        <Link to="/menu" className="navbar-hrefs" >Menu</Link>

                        <Link className="navbar-hrefs" >
                            Pages
                            <AiFillCaretDown className="navbar-href__icon" />
                        </Link>

                        <Link to="/contact" className="navbar-hrefs" >Contact</Link>
                    </li>
                </ul>
            </div> */}
        </>
    );
}

export default Navbar;