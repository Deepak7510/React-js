import React from 'react'
import { useId } from './useId';

const UseIdIndexPage = () => {
    const {getId}=useId();

  return (
    <div>{getId()}</div>
  )
}

export default UseIdIndexPage