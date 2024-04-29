'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  const image1 = 'https://i.pinimg.com/564x/d9/bc/1a/d9bc1abeb5be60f7e6075790946dfc01.jpg'
  const image2= 'https://i.pinimg.com/564x/aa/29/51/aa29513a29196803f09d43ad017e77e1.jpg'
  const image3= 'https://i.pinimg.com/564x/a9/01/eb/a901eb2d4a4b68d2aa17fd0f5015e92d.jpg'
  const image4= 'https://i.pinimg.com/564x/b4/07/12/b407128d032525dde0b6e389738ab040.jpg'
  const image5= 'https://i.pinimg.com/564x/d5/72/03/d57203255eb8cc74dc336313fc499586.jpg'

  const handleWaitlist = (e)=>{
    e.preventDefault()
    router.push('/form')
  }
  return (
    <div>
      <div className="text-center mt-10">
        <h2 className="text-slate-300 text-sm">Join the Community of Experts</h2>
        <h1 className="text-white mt-5 font-bold text-[1.5rem]">Are you willing to get home <br/> from innovative estate?</h1>
        <h2 className="text-slate-300 mt-5 text-sm">Nigeria most innovative real estate platform <br/> to simplify home sharing</h2>

        <button onClick={handleWaitlist} className="w-auto px-4 py-2 mt-10 rounded-md bg-white text-bgColor">Join the waitlist</button>

        <div className="md:flex block md:gap-x-4 mt-10 md:justify-between">
          <img src={image1}
          className="w-full mb-5 hover:translate-y-1 rounded-md md:h-60 h-72 border-2 border-white"
          />
          <img src={image3}
          className="w-full mb-5 hover:translate-y-1 rounded-md md:h-60 h-72 border-2 border-white"
          />
          <img src={image2}
          className="w-full mb-5 hover:translate-y-1 rounded-md md:h-60 h-72 border-2 border-white"
          />
          <img src={image5}
          className="w-full mb-5 hover:translate-y-1 rounded-md md:h-60 h-72 border-2 border-white"
          />
          <img src={image4}
          className="w-full mb-5 hover:translate-y-1 rounded-md md:h-60 h-72 border-2 border-white"
          />
          
        </div>
      </div>
    </div>
  );
}
