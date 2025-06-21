import { useEffect, useState } from "react";

export const useFetch = (url, Option = {}) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    async function getData() {
        setLoading(true)
        try {
            const response = await fetch(url, { ...Option })
            if (!response.ok) throw new Error(response.statusText)
            const result = await response.json();
            if (result) {
                setData(result);
                setLoading(false);
                setError(null)
            }
        } catch (error) {
            console.error(error);
            setLoading(false);
            setError(error)

        }
    }
    
    useEffect(() => {
        getData()
    }, [url])


    return { data, loading, error };

}