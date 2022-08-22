// import React
import React from 'react';

// Import Css
import './Home.css'

//Import Componenrt
import Carusel from '../Carusel/Carusel';
import About from '../About/About';
import Service from '../Service/Service';
import Border from '../Border/Border';

function Home(props) {
    return (
        <>
            <Carusel/>
            <About/>
            <Service/>
            <Border/>
        </>
    );
}

export default Home;