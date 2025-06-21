import React from 'react'
const input = 'input'
const textarea = 'textarea'


const CommonForm = ({ fromContent, buttonName, formData, setFormData }) => {
    
    function GetInput(inputDetails) {
        let content = null;
        switch (inputDetails.componentType) {
            case input:
                content = <div key={inputDetails.id}>
                    <label htmlFor={inputDetails.id}>{inputDetails.label}</label>
                    <input type={inputDetails.type} value={formData[inputDetails.name]} onChange={(e) => setFormData({ ...formData, [inputDetails.name]: e.target.value })} placeholder={inputDetails.placeholder} name={inputDetails.name} id={inputDetails.id} />
                </div>
                break;
            case textarea:
                content = <div>
                    <label htmlFor={inputDetails.id}>{inputDetails.label}</label>
                    <textarea type={inputDetails.type} placeholder={inputDetails.placeholder} onChange={(e) => setFormData({ ...formData, [inputDetails.name]: e.target.value })} name={inputDetails.name} id={inputDetails.id} >{formData[inputDetails.name]}</textarea>
                </div>
                break;
            default:
                content = <div>
                    <label htmlFor={inputDetails.id}>{inputDetails.label}</label>
                    <input type={inputDetails.type} placeholder={inputDetails.placeholder} name={inputDetails.name} id={inputDetails.id} />
                </div>
                break;
        }
        return content;
    }
    return (
        <form>
            {fromContent && fromContent.length > 0 ? fromContent.map(item => {
                return GetInput(item);
            }) : null
            }
            <div>
                <button>{buttonName ? buttonName : 'Submit'}</button>
            </div>
        </form>
    )
}

export default CommonForm