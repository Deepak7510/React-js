import React, { useState } from 'react'
import CommonForm from './CommonForm'
import { SugnupFormContent } from '../../config'

const SIgnup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })
    return (
        <div>
            <CommonForm fromContent={SugnupFormContent} formData={formData} setFormData={setFormData} buttonName={'Sign Up'} />
        </div>
    )
}
export default SIgnup