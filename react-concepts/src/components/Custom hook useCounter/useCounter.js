import { useState } from "react"

export const useCounter=(setIncremntvalue=1)=>{
    const [value,setValue]=useState(0);
    function increment(){
        setValue(value+setIncremntvalue)
    }
    function decrement(){
        if(value>0){
            setValue(value-setIncremntvalue)
        }
    }
return {value,increment,decrement}
}