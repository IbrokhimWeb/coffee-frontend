// Import React
// import { BrowserRouter } from 'react-router-dom';

// Import Components
import Navbar from './Components/Navbar/Navbar';

// import css
import './App.css';
import Home from './Components/Home/Home';


function App() {
    return (
        <>
            <Navbar/>
            <Home/>
            {/* <Route path="/" element={<Navbar />} /> */}
        </>
    );
}

export default App;
