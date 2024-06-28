import { useState } from "react";
import Resteurant from "./Resteurant";
import AuthUser from "../AuthUser";

export default function ResteurantIndex() {
    //----< hokes
    const [restaurants, setRestaurants] = useState(null);
    const [linksPaginateRestaurants, setLinksPaginateRestaurants] = useState(null);
    const [pageTableRestaurants, setPageTableRestaurants] = useState(1);
    const { index } = Resteurant();
    const { getToken } = AuthUser();
    // ----------->

    const getResteurantPaginate = async () => {
        const token = getToken();
        const restaurants = await index(token, pageTableRestaurants);
        setRestaurants(restaurants.data);
        setLinksPaginateRestaurants(restaurants.links);
        return restaurants.links;
    }
    const fetchNextRestaurantsTable = (link) => {
        const url = new URL(link);

        setPageTableRestaurants(url.searchParams.get("page"));
    }



    return {
        setRestaurants, setLinksPaginateRestaurants, setPageTableRestaurants,
        getResteurantPaginate, fetchNextRestaurantsTable, linksPaginateRestaurants,
        restaurants, pageTableRestaurants

    };

}