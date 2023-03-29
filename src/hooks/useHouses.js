import { useState, useEffect } from "react";
import loadingStatus from "@/helpers/loadingStatus";
import useGetRequests from "./useGetRequests";
const useHouses = () => {

    const [houses, setHouses] = useState([]);
    const { get, loadingState } = useGetRequests("/api/houses");

    useEffect(() => {
        const fetchHouses = async () => {
            const houses = await get();
            setHouses(houses);
        };
        fetchHouses();
    }, [get]);

    return { houses, setHouses, loadingState };
}

export default useHouses;