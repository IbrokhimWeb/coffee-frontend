// Import React
// import { BrowserRouter } from 'react-router-dom';

// import css
import './App.css';

// Import Components
import Navbar from './Components/Navbar/Navbar';
// import Home from './Components/Home/Home';
import Carusel from './Components/Carusel/Carusel';
import About from './Components/About/About';
import Service from './Components/Service/Service';
import Footer from './Components/Footer/Footer';



function App() {
    return (
        <>
            <Navbar/>
            {/* <Home/> */}
            <Carusel/>
            <About/>
            <Service/>
            <Footer/>
            {/* <Route path="/" element={<Navbar />} /> */}
        </>
    );
}

export default App;
