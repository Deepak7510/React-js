import { useState } from "react"

export const useSessionStorage = (key) => {
    const [sessionValue, setSessionValue] = useState(() => {
        try {
            const value = sessionStorage.getItem(key);
            return value ? JSON.parse(value) : []
        } catch (error) {
            console.error(error)
            return []; 
        }
    });

    function setValue(value){
        const newData=[...sessionValue,value]
        setSessionValue(newData);
        sessionStorage.setItem(key,JSON.stringify(newData));
    }

    function removeValue(){
        sessionStorage.removeItem(key)
        setSessionValue([]);
    }

    return {sessionValue,setValue,removeValue}
}