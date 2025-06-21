import React, { useState } from 'react'
import { useSessionStorage } from './useSession'

const UseSessionIndexPage = () => {
    const [userName,setUserName]=useState('')
    const {sessionValue,setValue,removeValue}=useSessionStorage('User')

    function handleSubmit(e){
        e.preventDefault();
        setValue({
            userName
        })
        setUserName('')
    }
  return (
    <div>
        <div>Session Storage</div>
        <div>{sessionValue && sessionValue.length>0?sessionValue.map((item,index)=>{
return <div key={index}>{item.userName}</div>
        }):null
            }</div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="userName" id="" value={userName} onChange={(e)=>setUserName(e.target.value)} />
        </form>
        <button onClick={removeValue}>Remove All</button>
    </div>
  )
}

export default UseSessionIndexPage