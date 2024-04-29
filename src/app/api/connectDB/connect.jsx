import mongoose from 'mongoose';
import React from 'react'

const connectDB = async ()=>{
    try {
        const connect = await mongoose.connect('mongodb+srv://adedokunoluyemi1:Oluyemi29@cluster0.8mlzqy6.mongodb.net/anotherwaitlist')
        const connection = connect.connection.host
        console.log(connection);
    } catch (error) {
        console.log(error);
    }
}

export default connectDB
