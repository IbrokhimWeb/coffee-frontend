// Import React
import React from "react";

// Import css
import "./Header.css";

function Header(props) {
  return (
    <header className="header-page">
      <h1>{props.mainPage}</h1>
      <p>
        <a href="/">Home</a> / {props.mainPage}
      </p>
    </header>
  );
}

export default Header;
