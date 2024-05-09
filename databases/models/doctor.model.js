import mongoose from "mongoose";

const Schema= new mongoose.Schema ({
name:{
    type: String,
    unique: [true, 'name is required'],
    trim:true,
    required: true,
    minlenght: [2,'too short name']
},
email: {
    type: String,
    required: true,
    unique: true,  
    lowercase: true, 
    trim: true, 
}, 
password: {
    type: String,
    required: true,
    minlength: 8,
},
phoneNumber: {
    type: String,
    required: true
},
patientCount: {
    type: Number,
    default: 0
},
rateCount: {
    type: Number,
    default: 0
},
rateAvg: {
    type: Number,
    Max :5,
    Min :0,
},
specialization: {
    type: String,
    required: true
},
gender: {
    type: String,
    enum: ['male', 'female']
}, 
role:{
    type:string,
    enum:['admin' ,'Patient' , 'doctor'],
    default :'Patient'
}
}, { timestamps: true})
export const doctorModel = mongoose.model('doctor',Schema)