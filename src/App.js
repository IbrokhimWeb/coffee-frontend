// Import React
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import css
import './App.css';

// Import Components
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import AboutPage from './Components/AboutPage/AboutPage';
import Contact from './Components/Contact/Contact';
import ServicePage from './Components/ServicePage/ServicePage';
import MenuPage from './Components/MenuPage/MenuPage';
// import Testimonial from './Components/Pages/Testimonial/Testimonial';



function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/service" element={<ServicePage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/menu" element={<MenuPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
