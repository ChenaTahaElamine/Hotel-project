import React, { createContext, useContext, useState } from 'react';
import ReservationChambre from '../FicherDeConnection/Reservation/ReservationChambre';


const UseStateReservationContex = createContext();


export const AppProviderStateReservation = ({ children }) => {

    const [reservations, setReservations] = useState("");
    const [pageTableReservations, setPageTableReservations] = useState(1);
    const [linksPaginateReservations, setLinksPaginateReservations] = useState([]);
    const [reservation, setReservation] = useState({});
    const { index } = ReservationChambre();

    const settersAndGetters = {
        // setTokenMethod: (tokenParamm) => { setToken(tokenParamm); },
        getToken: () => {
            const tokenString = sessionStorage.getItem("token");
            const userToken = JSON.parse(tokenString);
            return userToken;
        },

        setReservationsMethod: (ReservationsParamm) => { setReservations(ReservationsParamm); },
        getReservations: () => { return reservations },

        setPageTableReservationsMethod: (pageTableReservationsParamm) => { setPageTableReservations(pageTableReservationsParamm) },
        getPageTableReservations: () => { return pageTableReservations; },

        setLinksPaginateReservationsMethod: (linksPaginateReservationsParam) => { setLinksPaginateReservations(linksPaginateReservationsParam); },
        getLinksPaginateReservations: () => { return linksPaginateReservations },

        setReservationMethod: (reservationParam) => { setReservation(reservationParam); },
        getReservation: () => { return reservation; },
    }

    const [token, setToken] = useState(settersAndGetters.getToken());


    const methodsData = {
        fetchNextReservationTable: (link) => {
            const url = new URL(link);
            setPageTableReservations(url.searchParams.get("page"));
        },
        indexReservations: async () => {
            const reservations = await index(token, pageTableReservations);
            setReservations(reservations.data);
            setLinksPaginateReservations(reservations.links);
            return reservations;
        },
    }




    return (
        <UseStateReservationContex.Provider value={{ settersAndGetters, methodsData }}>
            {children}
        </UseStateReservationContex.Provider>
    );
};



export const useStateChambreAppContext = () => {
    return useContext(UseStateReservationContex);
};
