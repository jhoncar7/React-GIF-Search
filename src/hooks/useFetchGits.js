import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";


export const useFetchGits = (category) => {

    const [state, setEstate] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs(category).then(imgs => {
            setEstate({
                data: imgs,
                loading: false
            });
        });
    }, [category])

    return state;
}
