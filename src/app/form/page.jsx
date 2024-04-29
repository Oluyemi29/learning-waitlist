'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaCamera } from "react-icons/fa";

const page = ()=>{
    const router = useRouter()
    const cloudPresetName = 'waitlist-start'
    const cloudName = 'devoluyemi'
    const [imageRaw, setImageRaw] = useState('')
    const [Alldetails, setAllDetails] = useState([])
    const [formData, setFormData] = useState({
        name : '',
        email : '',
        number : '',
        file : ''
    })
    const[previewImage, setPreviewImage] = useState('')

    const handleChange = (e)=>{
        const {name,value} = e.target

        setFormData((previousData)=>{
            return{
                ...previousData,
                [name]:value
            }
        })
    }

    const handleImage = (e)=>{
        const {name,value} = e.target

        setFormData((previousData)=>{
            return{
                ...previousData,
                [name]:value
            }
        })
        setPreviewImage(URL.createObjectURL(e.target.files[0]))
        setImageRaw(e.target.files[0])
        // console.log(imageRaw);
    }

    useEffect(()=>{
            const getInform = async()=>{
                const existUser = await fetch('/api/getUsers')

                const existData = await existUser.json()
                const existEmail = existData.res.map(user=>user.email)
                setAllDetails(existEmail)
            }
            getInform()
    },[])



    const handleSubmit = async(e)=>{
        const {name,email,number} = formData
        e.preventDefault()
        try {
                if(email && Alldetails.includes(email)){
                    toast.error(`${email} Already Waitlisted`)
                }else{
                    let imageInfo;
                    if(imageRaw && (imageRaw.type === 'image/jpeg'||imageRaw.type === 'image/jpg'||imageRaw.type === 'image/png')){
                        const images = new FormData()
                        images.append('file', imageRaw)
                        images.append('cloud_name',cloudName)
                        images.append('upload_preset', cloudPresetName)
                        const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
                        const response = await fetch(url,{
                            method : 'post',
                            body : images
                        })
                        const imageData = await response.json()
                        console.log(imageData);
                        imageInfo = imageData.url.toString()
        
                    }
                    if(!name){
                        toast.error('Name is required')
                    }else if(!email){
                        toast.error('Email is required')
                    }else if(!number){
                        toast.error('Number is required')
                    }else if(!imageInfo){
                        toast.error('A profile image is required')
                    }else{
                        const res = await fetch('/api/register',{
                            method : "POST",
                            headers :{
                                "Content-Type" : "application/json"
                            },
                            body : JSON.stringify({name,email,number,imageInfo})
                        })
                        if(res.ok){
                            const response = await res.json()
                            toast.success(response.message)
                            router.push('/')
                        }else{
                            const response = await res.json()
                            toast.error(response.message)
            
                        }
                    }

                }


            
        } catch (error) {
                console.log(`an error of ${error} happened`);
            }


    }

    const handleView = (e)=>{
        e.preventDefault()
        router.push('/allUsers')
    }

    return(
        <div className="py-8">
            <h2 className="text-white text-center text-xl mb-4">Registration Form</h2>

            
            <p className="text-slate-300 text-center">Kindly fill in your details correctly</p>
            <form className="w-full m-auto md:w-1/4 border-2 border-white p-5 rounded-md mt-5">
                <label className="text-white">Name</label> <br/>
                <input name="name" value={formData.name} onChange={handleChange} className="w-full h-12 mt-2 pl-3 mb-5 rounded-md" type="text" placeholder="Enter Your name"/> <br/>
                <label className="text-white">Email</label> <br/>
                <input name="email" value={formData.email} onChange={handleChange} className="w-full h-12 mt-2 pl-3 mb-5 rounded-md" type="email" placeholder="Enter Your email"/><br/>
                <label className="text-white">Number</label> <br/>
                <input name="number" value={formData.number} onChange={handleChange} className="w-full h-12 mt-2 pl-3 mb-5 rounded-md" type="number" placeholder="Enter Your number"/><br/>
                
                {previewImage && <>
                <Image 
                src={previewImage}
                alt="PREVIEW"
                width={300}
                height={300}
                className="rounded-md"
                />
                
                </>}
                <label className="text-white text-center">
                    
                    <div className="text-center mt-5 w-full rounded-md py-3 bg-slate-300"> 
                    <h3 className="text-bgColor">Input your profile pics</h3>
                        <FaCamera className="w-16 h-16 m-auto text-white"/>
                    </div>
                    <input name="file" accept="image/png, image/jpeg, image/jpg" value={formData.file} onChange={handleImage} className="w-full h-12 rounded-md hidden" type="file" placeholder="Enter Your name"/>
                </label>
                
                <button onClick={handleSubmit} className="w-full h-14 text-xl rounded-md border-2 border-white text-white bg-gbColor mt-10">Submit</button>
                <button onClick={handleView} className="w-full h-14 text-xl rounded-md border-2 border-white text-white bg-gbColor mt-5">Registered Users</button>
            </form>
        </div>
    )
}

export default page 