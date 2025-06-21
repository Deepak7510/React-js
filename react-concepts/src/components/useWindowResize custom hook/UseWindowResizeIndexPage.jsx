import React from 'react'
import { useWindowResize } from './useWindowResize';

const UseWindowResizeIndexPage = () => {
    const screenSize=useWindowResize();

    console.log(screenSize)
  return (
    <div>
        <div>width: {screenSize.width}</div>
        <div>height: {screenSize.height}</div>
    </div>
  )
}

export default UseWindowResizeIndexPage