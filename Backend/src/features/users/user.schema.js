import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    first_name:{
        type: String,
        required : true,
    },
    last_name:{
        type: String,
        required : true,
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: true,
        match: [/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/]
    },
    password:{
        type: String
    }
})

export const userModel = mongoose.model('users', userSchema);