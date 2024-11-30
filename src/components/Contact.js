import React from 'react'
import image1 from '../Asserts/Contact.jpg';

const Contact = () => {
  return (
    <div className=" md:h-[100vh]  bg-fixed  flex justify-center" style={{backgroundImage:`url(${image1})`,backgroundSize: 'cover',}}>
        <div className=' h-[500px] mt-20 '>
            <a href="https://topmate.io/tuggali_kishore" target="_blank" rel="noreferrer"
             className='bg-blue-400 text-4xl rounded-xl text-blue-800  py-4 px-4 fixed flex justify-center  top-[400px] left-[700px] font-bold '> Get in Touch</a>
        </div>
    </div>
    
  )
}

export default Contact