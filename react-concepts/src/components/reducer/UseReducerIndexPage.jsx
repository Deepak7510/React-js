import React, { useReducer } from 'react'

const intialValue={
    showText:true
}

function reducer(state, action) {
    switch (action.type) {
        case 'SHOW':
            return { ...state, showText: true };  // ✅ Returning a new object
        case 'HIDE':
            return { ...state, showText: false }; // ✅ Returning a new object
        default:
            return state; // ✅ Always return the previous state if action is unknown
    }
}


const UseReducerIndexPage = () => {
    const [state,dispatch]=useReducer(reducer,intialValue)
    console.log(state.showText)


  return (
    <div style={{display:'flex',justifyContent:"center"}}>
       <div style={{textAlign:'center'}}>
       {state.showText && <div>Deepak Kumar Yadav</div>}
       <button onClick={()=>dispatch({type:'SHOW'})}>Show Text</button>
        <button onClick={()=>dispatch({type:'HIDE'})}>Hide Text</button>
       </div>
    </div>
  )
}

export default UseReducerIndexPage