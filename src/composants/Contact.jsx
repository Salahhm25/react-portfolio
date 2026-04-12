import React from 'react'
import { useState } from 'react'
import './styles/contact.css'
import emailjs from '@emailjs/browser';


export default function Contact() {
    const [name, setName]=useState()
    const [email,setEmail]=useState()
    const [message,setMessage]=useState()
    const handleSubmit = (event)=>{
            event.preventDefault();
            emailjs.send(
                'service_gjvr3m9', 
                'template_ulakadg', 
                {
                    from_name: name,       
                    from_email: email,     
                    message: message       
                }, 
                'nfdan0cQqRsoau4mn'
            )
    }
  return (
    <>
        {/*
        service_gjvr3m9
        template_ulakadg
        nfdan0cQqRsoau4mn 
        */}
        <div className="contactmepage">
            <div className='formulaire'>
                <form onSubmit={handleSubmit} className='formitems'>
                    <input type="text" 
                        value={name}
                        placeholder='First Name' 
                        onChange={(e)=>setName(e.target.value)}
                    />
                    <input type="email"
                            placeholder='Email'
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}/>
                    <textarea name=""
                            id=""
                            placeholder='Message'
                            value={message}
                            onChange={(e)=>setMessage(e.target.value)}
                            ></textarea>
                    <input className='submit' type="submit" value="Submit"/>
                </form>
            </div>

        </div>
    </>
  )
}
