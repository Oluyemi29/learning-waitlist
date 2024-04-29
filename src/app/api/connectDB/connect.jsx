import mongoose from 'mongoose';
import React from 'react'

const connectDB = async ()=>{
    try {
        const connect = await mongoose.connect(process.env.MONGODB)
        const connection = connect.connection.host
        console.log(connection);
    } catch (error) {
        console.log(error);
    }
}

export default connectDB
