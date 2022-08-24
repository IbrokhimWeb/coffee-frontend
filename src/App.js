// Import React
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import css
import './App.css';

// Import Components
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
// import About from './Components/About/About';
import Service from './Components/Service/Service';
import Footer from './Components/Footer/Footer';
import AboutPage from './Components/AboutPage/AboutPage';
import Contact from './Components/Contact/Contact';


function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/service" element={<Service />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
