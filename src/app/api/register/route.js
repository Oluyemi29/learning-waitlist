import {v2 as cloudinary} from 'cloudinary'
import { NextResponse } from 'next/server';
import connectDB from '../connectDB/connect';
import Users from '../model/userSchema';

export async function POST(req){
        try {
            await connectDB()
            const{name,email,number,imageInfo} = await req.json()

            console.log(name,email,number,imageInfo);

            await new Users({name,email,number,imageInfo}).save()
            return NextResponse.json({message : 'Waitlisted Successfuly'}, {status : 200})

        } catch (error) {
            console.log(`an error of ${error}`);
            return NextResponse.json({message : `an error of ${error} occured`},{status : 500})
        }
    
}