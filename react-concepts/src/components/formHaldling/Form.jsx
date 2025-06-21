import React, { useState } from 'react'

const intialValue={
    email:'',
    password:''

}

const Form = () => {
    const [formData,setFormData]=useState(intialValue)

    function handleChange(e){
        setFormData({...formData,[e.target.name]:e.target.value})

    }

    function handleSubmit(event){
        event.preventDefault()
    }

  return (
    <div style={{height:'100vh',width:"100%",display:'flex',justifyContent:'center',alignItems:"center"}}>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email"></label>
                <input value={formData.email} onChange={handleChange}  type="email" name="email" placeholder='Enter the Email' id="email" />
            </div>
            <br />
            <div>
                <label htmlFor="passowrd"></label>
                <input value={formData.password} onChange={handleChange} type="password" placeholder='Enter the Password' name="password" id="password" />
            </div>
            <br />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Form