import React, { Component } from "react";
import { BrowserRouter, Link,Route } from "react-router-dom";
import { connect } from "react-redux";
import {getContacts,addContact,deleteContact,putContact} from './redux/actions/actionContact'
import ContactCard from './components/ContactCard'
import AddContact from './components/AddContact'
 class App extends Component {
   state={
     name:"",
     phone:"",
     email:"",
     edit:false,
     id:""
   }

   getPerson=(contact)=>{
     this.setState({
       name:contact.name,
       phone:contact.phone,
       email:contact.email,
       id:contact._id,
       edit:true
     })
   }

   addCont=()=>{
     this.reset()
    this.props.addContact(this.state)
   }
   handleChange=(e)=>{this.setState({
     [e.target.name]:e.target.value
   })}
  componentDidMount=()=>{
      this.props.getContacts()
  }
reset=()=>{
  this.setState({
    name:"",
    phone:"",
    email:"",
    edit:false,
    id:""
  })
}

  putCont=()=>{
    this.reset()
      this.props.putContact(this.state.id,this.state)
  }
  render() {
    return (
      <BrowserRouter>
      <div>
        <center>
           <Link to="/contact-list"> <button>Contact list</button></Link>
          <Link to="/add-contact"><button>add Contact</button></Link> 
        </center>
      </div>

      <Route path="/contact-list" render={()=>(
        <div>
         {this.props.contacts.map(contact=>(
           <div>
             <ContactCard contact={contact} delete={this.props.deleteContact} getPerson={this.getPerson} />
           </div>
         ))}
        </div>
      )} />
      <Route path="/(add-contact|edit-contact)" render={()=>(
        <AddContact handleChange={this.handleChange} contact={this.state} handleAction={this.state.edit?this.putCont :this.addCont} />
      )} />
      </BrowserRouter>
    );
  }
}

const mapStateToProps=state=>({
  contacts:state.contacts
})
export default connect(mapStateToProps,{getContacts,addContact,deleteContact,putContact}) (App)
