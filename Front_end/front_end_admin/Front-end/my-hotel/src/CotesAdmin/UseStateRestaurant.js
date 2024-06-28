import React, { createContext, useContext, useState } from 'react';
import AddImageResteurant from "../FicherDeConnection/LeFicherDeResteurant/AddImageResteurant";
import Restaurant from "../FicherDeConnection/LeFicherDeResteurant/Resteurant";

const UseStateRestaurantContex = createContext();


export const AppProviderStateRestaurant = ({ children }) => {

    //-----< table restaurant

    const [token, setToken] = useState(null);
    const [restaurants, setRestaurants] = useState([]);
    const [pageTableRestaurants, setPageTableRestaurants] = useState(1);
    const [linksPaginateRestaurants, setLinksPaginateRestaurants] = useState([]);
    const [tableRestaurantSerch, setTableRestaurantSerch] = useState("");
    const [restaurant, setRestaurant] = useState({});
    const [resteurantImage, setResteurantImage] = useState("");
    //setChambreImageMethod

    const objRestaurantTable = {
        //seters & geters
        setResteurantImageMethod: (resteurantImageParam) => { setResteurantImage(resteurantImageParam); },
        getResteurantImage: () => { return resteurantImage; },
        setTokenMethod: (tokenparam) => { setToken(tokenparam); },
        getToken: () => {

            const tokenString = sessionStorage.getItem("token");
            const userToken = JSON.parse(tokenString);
            return userToken;

        },

        setRestaurantsMethod: (restaurantsParam) => { setRestaurants(restaurantsParam); },
        getRestaurants: () => { return restaurants; },

        setPageTableRestaurantsMethod: (pageTableRestaurantsParam) => { setPageTableRestaurants(pageTableRestaurantsParam); },
        getPageTableRestaurants: () => { return pageTableRestaurants; },

        setLinksPaginateRestaurantsMethod: (linksPaginateRestaurantsParam) => { setLinksPaginateRestaurants(linksPaginateRestaurantsParam); },
        getLinksPaginateRestaurants: () => { return linksPaginateRestaurants; },

        setTableRestaurantSerchMethod: (tableRestaurantSerchParam) => { setTableRestaurantSerch(tableRestaurantSerchParam); },
        getTableRestaurantSerch: () => { return tableRestaurantSerch; },

        setRestaurantMethod: (restaurantParam) => { setRestaurant(restaurantParam); },
        getRestaurant: () => { return restaurant; },
        //methods
        deleteImage: async (fileName) => {
            const res = await AddImageResteurant.delete(token, fileName);
            return res;
        },
        UpdateRestaurant: async (objNewDate) => {
            const res = Restaurant.update(token, objNewDate);
            return res;
        },
        storeRestaurant: async (restaurantData) => {
            const res = Restaurant.store(token, restaurantData);
            return res;
        },
        deleteRestaurant: async (idParam) => {
            try {
                const response = await Restaurant.delete(token, idParam);
                console.log(response);
                setPageTableRestaurants(2);
                setPageTableRestaurants(1);
                return response;
            } catch (error) {
                console.log("chena taha elamine ", error);
            }


        },

        fetchRestaurantSearch: async (page = 1) => {
            if (tableRestaurantSerch) {

                const restaurants = await Restaurant.search(token, pageTableRestaurants, tableRestaurantSerch);
                setRestaurants(restaurants.data);
                setLinksPaginateRestaurants(restaurants.links);
                setPageTableRestaurants(page);
                return restaurants;

            } else if (tableRestaurantSerch === "") {

                const restaurants = await Restaurant.index(token, pageTableRestaurants);
                setRestaurants(restaurants.data);
                setLinksPaginateRestaurants(restaurants.links);
                return restaurants;
            }

        },
        fetchNextRestaurantsTable: (link) => {
            const url = new URL(link);

            setPageTableRestaurants(url.searchParams.get("page"));
        },
        indexRestaurants: async () => {

            const restaurants = await Restaurant.index(objRestaurantTable.getToken(), pageTableRestaurants);
            setRestaurants(restaurants.data);
            setLinksPaginateRestaurants(restaurants.links);
            return restaurants;
        },

    }
    return (
        <UseStateRestaurantContex.Provider value={{ objRestaurantTable }}>
            {children}
        </UseStateRestaurantContex.Provider>
    );
};



export const useStateRestaurantAppContext = () => {
    return useContext(UseStateRestaurantContex);
};
