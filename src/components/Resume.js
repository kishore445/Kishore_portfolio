import React from 'react'
import image1 from '../Asserts/images.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons';
const Resume = () => {
  return (
    <div className=" md:h-[100vh]  bg-fixed  flex justify-center" style={{backgroundImage:`url(${image1})`,backgroundSize: 'cover',}}>
        <div className='flex  items-center h-[500px] mt-[150px] ml-[165px]'>
        
        <a href="/Kishore_Tuggali.pdf" download="Resume.pdf"className='fixed rounded-xl text-blue-700 bg-cyan-300 text-2xl rounded italic py-4 px-4'><h3><FontAwesomeIcon icon={faDownload} />  DownLoad Resume  </h3></a>
        </div>

        
        
    </div>
 
  )
}

export default Resume