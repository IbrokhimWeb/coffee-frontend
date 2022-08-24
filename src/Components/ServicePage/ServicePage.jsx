import React from 'react';
import Service from '../Service/Service.jsx';
import Header from '../Header/Header'


function ServicePage(props) {
    return (
        <>
           <Header mainPage="Service"/> 
           <Service/>
        </>
    );
}

export default ServicePage;