import { useState } from "react";
import Chambre from "./Chambre";
import AuthUser from "../AuthUser";

export default function ChambreIndex() {
    //----< hokes
    const [chambres, setChambres] = useState(null);
    const [linksPaginateChambres, setLinksPaginateChambres] = useState(null);
    const [pageTableChambres, setPageTableChambres] = useState(1);
    const { index } = Chambre();
    const { getToken } = AuthUser();
    // ----------->

    const getChambrePaginate = async () => {
        const token = getToken();
        const chambres = await index(token, pageTableChambres);
        setChambres(chambres.data);
        setLinksPaginateChambres(chambres.links);
        return chambres.links;
    }
    const fetchNextChambresTable = (link) => {
        const url = new URL(link);

        setPageTableChambres(url.searchParams.get("page"));
    }



    return {
        setChambres, setLinksPaginateChambres, setPageTableChambres,
        getChambrePaginate, fetchNextChambresTable, linksPaginateChambres,
        chambres, pageTableChambres
    };

}