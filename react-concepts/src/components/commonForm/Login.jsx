import React, { useState } from 'react'
import CommonForm from './CommonForm'
import { LoginFormContent } from '../../config'

const Login = () => {
  const [formData,setFormData]=useState({
    email:'',
    password:''
  })
  return <div>
    {
        <CommonForm formData={formData} setFormData={setFormData} fromContent={LoginFormContent} buttonName={'Login'} />
    }
  </div>
}

export default Login