import React from 'react'
import image1 from '../Asserts/BG_image.jpg';
import image2 from '../Asserts/hand.png';

const Home = () => {
  return (
    <div className=" md:h-[100vh] bg-fixed flex  " style={{backgroundImage:`url(${image1})`}}>
        <div className="text-white absolute text-6xl  top-40">Hi There! 
        </div>
        <img className ="ml-4 h-20 w-20  absolute left-60 top-40" src={image2} alt=" Description" />
        <div className="text-white absolute text-6xl top-60 ">I'm Kishore Tuggali</div>
    </div>
   
  )
}

export default Home