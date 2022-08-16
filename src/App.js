// Import React
import { BrowserRouter, Route } from 'react-router-dom';

// Import Components
import Navbar from './Components/Navbar/Navbar';

// import css
import './App.css';


function App() {
    return (
        <BrowserRouter>
            {/* <Navbar/> */}
            <Route path="/" element={<Navbar />} />
            
        </BrowserRouter>
    );
}

export default App;
