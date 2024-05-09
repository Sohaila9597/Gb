import mongoose from "mongoose";

const Schema= new mongoose.Schema ({
name:{
    type: String,
    unique: [true, 'name is required'],
    trim:true,
    required: true,
    minlenght: [2,'too short name']
},
email:{
    type: String,
    unique: [true, 'email is required'],
    trim:true,
    required: true,
},
password:{
    type: String,
    required: true,
},
isActive :{
    types:Boolean ,
    default: true
},
role:{
    type:string,
    enum:['admin' ,'Patient' , 'doctor'],
    default :'Patient'
}
}, { timestamps: true})
export const UserModel = mongoose.model('User',Schema)