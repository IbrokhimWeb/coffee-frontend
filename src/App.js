// @ts-nocheck
// Import React
// import { BrowserRouter } from 'react-router-dom';

// Import Components
import Navbar from './Components/Navbar/Navbar';
// import Home from './Components/Home/Home';
import About from './Components/About/About';
import Service from './Components/Service/Service';

// import css
import './App.css';
import Carusel from './Components/Carusel/Carusel';


function App() {
    return (
        <>
            <Navbar/>
            <Carusel/>
            {/* <Home/> */}
            <About/>
            <Service/>
            {/* <Route path="/" element={<Navbar />} /> */}
        </>
    );
}

export default App;
