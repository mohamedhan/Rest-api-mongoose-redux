import React from 'react'
import {Link} from "react-router-dom"
export default function AddContact(props) {
    return (
        <div>
            <input type="text" placeholder="enter your name" name="name" onChange={props.handleChange} value={props.contact.name} />
            <input type="text" placeholder="enter your mail" name="email" onChange={props.handleChange} value={props.contact.email}/>
            <input type="text" placeholder="enter your number" name="phone" onChange={props.handleChange} value={props.contact.phone}/>
            <Link to="/contact-list"> <input type="button" value={props.contact.edit?"edit":"add"}  onClick={props.handleAction} /></Link>

            
        </div>
    )
}
