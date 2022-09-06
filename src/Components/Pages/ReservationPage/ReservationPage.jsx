import React from 'react';
import Header from '../../Header/Header';
import Reservation from '../Reservation/Reservation';

function ReservationPage(props) {
    return (
        <>
            <Header mainPage="Reservation"/>
            <Reservation/>
        </>
    );
}

export default ReservationPage;