import React from "react";
import './Contact.css'

function Contact() {
    const onSubmit = () => {
        alert("Submit")
    }
    return (
        <form onSubmit={onSubmit}>
            <div className='contact-container'>
                <input type='text' placeholder={'Your Name'} className='contact-name contact-item'/>
                <textarea placeholder='Your Message' rows={12} className='contact-message contact-item'/>
                <div className='contact-button-container'>
                    <button as={"div"} className={'contact-button'} type={'submit'}>Submit</button>
                </div>
            </div>
        </form>
    )
}

export default Contact;
