const express=require('express')
const router=express.Router()

const Contact=require('../models/Contact')


router.post("/add",(req,res)=>{
    const {name,email,phone}=req.body
    const newContact=new Contact({
        name,email,phone
    })
    newContact.save()
    .then(contacts=>res.send(contacts))
    .catch(err=>console.log(err))
})


router.get("/",(req,res)=>{
    Contact.find()
    .then(contacts=>res.send(contacts))
    .catch(err=>console.log(err))
})


router.get("/:_id",(req,res)=>{
    const {_id}=req.params
    Contact.findOne({_id})
      .then(contacts=>res.send(contacts))
    .catch(err=>console.log(err))
})



router.delete("/:_id",(req,res)=>{
    const {_id}=req.params
    Contact.findOneAndDelete({_id:_id})
    .then(contacts=>res.send("success"))
    .catch(err=>console.log(err))
})


router.put("/:_id",(req,res)=>{
    const {_id}=req.params
    const {name,email,phone}=req.body
    Contact.findOneAndUpdate({_id},{$set:{name,email,phone}})
    .then(contacts=>res.send("contact Updated"))
    .catch(err=>console.log(err))
})

module.exports=router