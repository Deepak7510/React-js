import React from 'react'
import { useCounter } from './useCounter'

const UseCounterIndexPage = () => {
    const {value,increment,decrement}=useCounter(2)
  return (
    <div>
        <button onClick={decrement}>Decrement</button>
        <span>{value}</span>
        <button onClick={increment}>Increment</button>
    </div>
  )
}

export default UseCounterIndexPage