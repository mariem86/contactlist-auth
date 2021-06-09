
const express=require("express")

const router=express.Router()
const Contact=require('../models/Contact')
const User=require("../models/User")
const isAuthorizerole=require('../middlewares/isAuthrizerole')
const isAuth=require('../middlewares/isAuth')

// test
//localhost:500/api/contacts/test
//@ path
//test route
//public/private


// add contact
router.post('/addContact',isAuth,isAuthorizerole(['client']),(req,res)=>{
    const user =req.user.id
    const{name, email,phone}=req.body
    const newContact= new Contact({user,
        name,email,phone
    })
    newContact.save()
    .then(contacts=>res.send(contacts))
    .catch(err=>console.log(err))
})
    //get contact
    router.get("/all",isAuth,isAuthorizerole(['client']),(req,res)=>{
        Contact.find()
    .then(contacts=>res.send(contacts))
    .catch(err=>console.log(err))
    })
// delete contact
router.delete("/deleteContact/:_id",isAuth,isAuthorizerole(['client']),(req,res)=>{
    const {_id}=req.params
    
    Contact.findOneAndDelete({user:req.user.id,_id})
    .then(contacts=>res.send(contacts))
    .catch(err=>console.log(err))

})

// edit contact
router.put("/editContact/:_id",isAuth,isAuthorizerole(['client']),(req,res)=>{
    const {_id}=req.params
    const {name,email,phone}=req.body

    Contact.findOneAndUpdate({user: req.user.id,_id},{$set:{name,email,phone}})
    .then(contacts=>res.send(contacts))
    .catch(err=>console.log(err))
})


module.exports=router