import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa";

function Card() {

  const [val, setVal] = useState(false)
  
  return (
    <div className='w-full h-screen bg-zinc-300 flex justify-center items-center '>
      <div className='relative rounded-md w-60 h-32 bg-zinc-900 flex overflow-hidden'>
        <img className={`shrink-0 transition-transform duration-700 ease-in-out ${val ? "translate-x-[0%]" : "translate-x-[100%]"} w-full h-full object-cover rounded-md`} src="https://plus.unsplash.com/premium_photo-1672116453187-3aa64afe04ad?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" />
        <img className={`shrink-0 transition-transform duration-700 ease-in-out ${val ? "translate-x-[100%]" : "translate-x-[0%]"} w-full h-full object-cover rounded-md`} src="https://plus.unsplash.com/premium_photo-1676637000058-96549206fe71?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGltYWdlfGVufDB8fDB8fHww" alt="" />
        <span onClick={()=>setVal(()=>!val)} className='w-8 h-8 flex items-center justify-center bg-[#dadada7b] rounded-full absolute bottom-[0%] left-1/2 -translate-x-[50%] -translate-y-[50%]'>
          <FaArrowRight size={".7em"}/>
        </span>
      </div>
    </div>
  )
}

export default Card
