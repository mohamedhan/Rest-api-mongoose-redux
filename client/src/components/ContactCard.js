import React from 'react'
import {Link} from "react-router-dom"
export default function ContactCard(props) {
    return (
        <div style={{border:"1px solid red",width:"300px", flexDirection:"column",alignItems:"center"}} >
            <p>{props.contact.name}</p>
            <p>{props.contact.email}</p>
            <p>{props.contact.phone}</p>
       <Link to="/edit-contact"> <button onClick={()=>props.getPerson(props.contact)} > Edit</button> </Link>
        <button onClick={()=>props.delete(props.contact._id)} >Delete</button>
        </div>
    )
}
