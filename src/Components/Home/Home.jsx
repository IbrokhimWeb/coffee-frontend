// import React
import React from "react";

//Import Componenrt
import Carusel from "../Carusel/Carusel";
import About from "../About/About";
import Service from "../Service/Service";
import Border from "../Border/Border";
import Reservation from "../Pages/Reservation/Reservation";
import Testimonial from "../Pages/Testimonial/Testimonial";
import Menu from "../Menu/Menu";

function Home() {
  return (
    <>
      <Carusel />
      <About />
      <Service />
      <Border />
      <Menu />
      <Reservation />
      <Testimonial />
    </>
  );
}

export default Home;
