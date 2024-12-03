import {useEffect, useState} from "react";
import axios from "axios";
import getApiEndpoint from "../utils/getApiEndpoint.ts";

const useFetchData = <T>(path:string, initialValue:T) => {
    const [data, setData] = useState<T>(initialValue);

    const endpoint = getApiEndpoint(path);

    const fetchData = () => {
        axios.get(endpoint).then((response) => {
            setData(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        fetchData();
    }, [path])

    return [data, fetchData] as const;
}

export default useFetchData;