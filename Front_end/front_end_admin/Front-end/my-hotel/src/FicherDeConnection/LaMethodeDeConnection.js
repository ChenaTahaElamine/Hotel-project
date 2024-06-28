import axios from "axios";
import ParammatreApi from "./LesParamatreDeApi";



const getRestaurants = async () => {
    const parammatreApi = new ParammatreApi("adminTest/index"); 
    try {
        const response = await axios.get(`${parammatreApi.getUrl()}${parammatreApi.getPath()}`);
        return response.data;
        
    } catch (error) {
        console.log(error);
    }
}



export default getRestaurants;