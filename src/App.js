// Import React
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import css
import './App.css';

// Import Components
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Contact from './Components/Contact/Contact';
import MenuPage from './Components/MenuPage/MenuPage';
import AboutPage from './Components/AboutPage/AboutPage';
import ServicePage from './Components/ServicePage/ServicePage';
import TestimonialPage from './Components/Pages/TestimonialPage/TestimonialPage';
import ReservationPage from './Components/Pages/ReservationPage/ReservationPage';
import Loader from './Components/Loader/Loader';


function App() {
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        setLoader(true)
        setTimeout(() => {
            setLoader(false)
        }, 6000)
    }, [])
    return (
        <BrowserRouter>
            {
                loader
                    ? (
                        <Loader />
                    ) : (

                        <>
                            <Navbar />
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/about" element={<AboutPage />} />
                                <Route path="/service" element={<ServicePage />} />
                                <Route path="/contact" element={<Contact />} />
                                <Route path="/menu" element={<MenuPage />} />
                                <Route path="/reservation" element={<ReservationPage />} />
                                <Route path="/testimonial" element={<TestimonialPage />} />
                            </Routes>
                            <Footer />
                        </>

                    )
            }

        </BrowserRouter>
    );
}

export default App;
