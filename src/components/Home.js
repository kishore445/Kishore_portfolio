import React from 'react'
import image1 from '../Asserts/Home.jpg';
import image2 from '../Asserts/hand.png';
import image3 from '../Asserts/Pic.png';


const Home = () => {
  return (
    <div className=" md:h-[100vh] bg-fixed flex  " style={{backgroundImage:`url(${image1})`,backgroundSize: '50%',}}>
      
        <div className="w-1/2 p-2 ml-5 " >
      <span class=" fixed block text-sm font-medium  text-blue-500 left-2"> Need Something ? 
      <input 
    class="border border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 
    contrast-more:placeholder-slate-500 w-2/2 mt-2 p-2 rounded-md  text-black ml-4 bg-fixed"
    placeholder="Type here..." />
      </span> 
        </div>
      
      <div >
           <div className=" text-blue-500 fixed top-40 left-2 text-black text-3xl">Hi There!
             </div>
           <img className ="fixed bottom-20 left-[270px] h-10 w-10" src={image2} alt=" Description" />
           <div className="text-blue-500 fixed bottom-20 left-2 text-black text-3xl ">I'm Kishore Tuggali
             </div>
           <div className="text-blue-500 fixed bottom-5 left-2 text-black text-3xl">Senior Software Test Engineer
             </div>
         </div>
      <div  className=" w-1/2 bg-cover flex justify-end fixed bg-cover h-screen right-0"style={{ backgroundImage: `url(${image3})`}}>   </div>       
        
    </div>
  )
}

export default Home