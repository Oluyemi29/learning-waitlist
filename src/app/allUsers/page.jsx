'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const MyComponent = () => {
    const router = useRouter()
    const [allData, setAllData] = useState([])

    useEffect(()=>{
        const getAllUser = async()=>{
            const Data = await fetch('/api/getAllUsers')
            const AllDatainfo =await Data.json()
            setAllData(AllDatainfo.AllUsers)
        }
        getAllUser()
    },[])

    const handleView = ()=>{
        router.push('/')
    }
  return (
    <div className=''>
        <div className='flex justify-end'>
            <button onClick={handleView} className="w-auto px-4 py-2 text-xl rounded-md border-2 border-white text-white bg-gbColor mt-5">Back</button>
        </div>
        <h1 className='text-center text-white mt-10 mb-10 text-2xl font-bold'>Registered Users</h1>
      <div className='flex flex-row mt-3 mb-3 gap-5 text-white'>
        <h3>Name</h3>
        <h3>Email</h3>
        <h3>Number</h3>
        <h3>Image</h3>
      </div>
      {allData.map((all)=>{
        return(
            <>
            <div key={all._id} className='flex mt-3 mb-3 w-auto flex-row gap-5 text-white'>
                <h1>{all.name}</h1>
                <h1>{all.email.slice(0,4)}....{all.email.slice(-4)}</h1>
                <h1>{all.number}</h1>
                <img 
                src={all.imageInfo}
                className='md:w-25 md:h-25 rounded-md w-12 h-12'
                />
            </div>
            </>
        )
      })}
    </div>
  )
}

export default MyComponent
