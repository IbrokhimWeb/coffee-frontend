// Import React
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import css
import './App.css';

// Import Components
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Service from './Components/Service/Service';
import Footer from './Components/Footer/Footer';
import AboutPage from './Components/AboutPage/AboutPage';


function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/service" element={<Service />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
