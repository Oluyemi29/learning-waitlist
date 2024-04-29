import { NextResponse } from "next/server"
import connectDB from "../connectDB/connect"
import Users from "../model/userSchema"

export async function GET(){
    try {
        await connectDB()
        
        const res = await Users.find()
        return NextResponse.json({res})
    } catch (error) {
        console.log(error);
    }
}