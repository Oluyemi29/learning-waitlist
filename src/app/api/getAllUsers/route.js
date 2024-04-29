import { NextResponse } from "next/server";
import connectDB from "../connectDB/connect";
import Users from "../model/userSchema";

export async function GET(){
    try {
        await connectDB()
        const AllUsers = await Users.find()
        return NextResponse.json({AllUsers})
    } catch (error) {
        console.log(`an error of ${error} occured`);
        return NextResponse.json({message : `an error od ${error} occured`},{status : 500})
    }
}