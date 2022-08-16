// Import React
import React from 'react';
// import { BrowserRouter } from 'react-router-dom';

// Import Css
import './Navbar.css';

function Navbar(props) {
    return (
        <>
            <div className="navbar">
                <h1>COFFEE</h1>
                <ul>
                    <li>
                        <a className="active" href="/" > Home    </a>
                        <a className="" href="/about"  > About   </a>
                        <a className="" href="/service"> Service </a>
                        <a className="" href="/menu"   > Menu    </a>
                        <a className="" href="/pages"  > Pages   </a>
                        <a className="" href="/contact"> Contact </a>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Navbar;