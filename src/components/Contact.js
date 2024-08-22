import React from 'react'
import image1 from '../Asserts/images.jpg';

const Contact = () => {
  return (
    <div className=" md:h-[100vh]  bg-fixed flex text-white justify-center" style={{backgroundImage:`url(${image1})`}}>
        <div className='flex justify-center items-center h-[500px] mt-20'>
            <a href="https://linktr.ee/Kishore_Tuggali" target="_blank" rel="noreferrer"
             className='bg-slate-800 text-4xl rounded italic py-4 px-4'> Contact Me</a>
        </div>
    </div>
    
  )
}

export default Contact