import React, { useContext } from 'react'
import { GlobalContext } from './GlobalContextState'
const IndexComponent = () => {
    const { theme,handleTheme } = useContext(GlobalContext)

    return <div style={{height:'100vh',width:"100vw",background: theme === 'light' ? 'white' : 'black' }}>
        <div style={{ display: 'felx', justifyContent: "end" }}>
            <button onClick={handleTheme} style={{ background: theme === 'light' ? 'black' : 'white',color:theme === 'light' ? 'white' : 'black' }} >{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</button>
        </div>
    </div>
}

export default IndexComponent