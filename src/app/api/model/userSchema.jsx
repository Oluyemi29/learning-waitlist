import mongoose from 'mongoose'
import React from 'react'

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true,
        unique : true
    },
    number : {
        type : Number,
        require : true
    },
    imageInfo : {
        type : String,
        require : true
    }
},{timestamps : true})

const Users = mongoose.models.users || mongoose.model('users', userSchema)

export default Users
