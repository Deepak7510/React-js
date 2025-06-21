import React from 'react'
import { useFetch } from './UseFetch'

const UseFetchIndexPage = () => {
    const {data,loading,error}=useFetch('https://jsonplaceholder.typicode.com/posts')
    if(loading){
        return <div>Loading........</div>
    }

    if(error){
      return <div>{error}</div>
    }

  return (
    <div style={{display:'flex',gap:'5px',flexWrap:'wrap'}}>
      {data && data.length>0?data.map(item=>{
        return <div style={{width:'300px',border:'2px solid black'}} key={item.id}>{item.title}</div>
      }):null}
    </div>
  )
}

export default UseFetchIndexPage