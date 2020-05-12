import { GET_CONTACTS } from "../constants/actionTypes"
import axios from 'axios'
export const getContacts=()=>dispatch=>{
    axios.get("http://localhost:5000/contacts")
    .then(res=>dispatch({type:GET_CONTACTS,payload:res.data}))
    // .then(res=>console.log(res))
    .catch(err=>console.log(err))
}

export const addContact=(newContact)=>dispatch=>{
    axios.post("http://localhost:5000/contacts/add",newContact)
    .then(res=>dispatch(getContacts()))
    // .then(res =>alert("user added"))
    .catch(err=>console.log(err))

}


export const deleteContact=(id)=>dispatch=>{
    axios.delete(`http://localhost:5000/contacts/${id}`)
    .then(res=>dispatch(getContacts()))
    .catch(err=>console.log(err))
}

export const putContact=(id,updatedContact)=>dispatch=>{
    axios.put(`http://localhost:5000/contacts/${id}`,updatedContact)
    .then(res=>dispatch(getContacts()))
    .catch(err=>console.log(err))
}
