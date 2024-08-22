import React from 'react'
import image1 from '../Asserts/images.jpg';
const About = () => {
  return (

    <div className=" md:h-[100vh]  bg-fixed flex  text-white" style={{backgroundImage:`url(${image1})`}}>
      <div>About Me </div>
    </div>

  )
}

export default About