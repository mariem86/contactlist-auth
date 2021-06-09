const mongoose=require('mongoose')
const Schema=mongoose.Schema
const ContactSchema=new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "user"
      },
    name:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:Number
    },
})
module.exports=Contact=mongoose.model('contacts',ContactSchema)