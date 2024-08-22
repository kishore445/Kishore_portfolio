import React from 'react'
import image1 from '../Asserts/images.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons';
const Resume = () => {
  return (
    <div className=" md:h-[100vh]  bg-fixed text-white flex justify-center" style={{backgroundImage:`url(${image1})`}}>
        <div className='flex justify-center items-center h-[500px] mt-20'>
        
        <a href="/Kishore_Tuggali.pdf" download="Resume.pdf"className='bg-slate-800 text-4xl rounded italic py-4 px-4'><h3><FontAwesomeIcon icon={faDownload} />  DownLoad Resume  </h3></a>
        </div>

        
        
    </div>
 
  )
}

export default Resume