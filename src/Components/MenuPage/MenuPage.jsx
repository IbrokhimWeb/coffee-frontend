// Import React
import React from 'react';


// Import Component
import Header from '../Header/Header'
import Menu from '../Menu/Menu'
function MenuPage(props) {
    return (
        <>
            <Header mainPage="Menu"/>  
            <Menu/> 
        </>
    );
}

export default MenuPage;