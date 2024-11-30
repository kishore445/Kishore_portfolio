import React from 'react'

import image2 from '../Asserts/About.jpg';
const About = () => {
  return (

    <div className=" md:h-[100vh]  bg-fixed   text-white" style={{backgroundImage:`url(${image2})`,backgroundSize: 'cover',backgroundPosition: 'center',}}>
      <div className='flex py-20 '>
        <div>
      <p
    className=" fixed text first-line:uppercase  first-letter:float-left mb-4 text-blue-700 font-bold top-[70px] left-[920px]" >
    Experienced Software <br /> Test Engineer with 5+  years <br />of strong background in <br />building robust automation<br /> frameworks from scratch. </p>
 <p className=" fixed mt-4 clear-both  text-blue-700   top-[70px] text left-[593px] ">
    Successfully developed and  <br />implemented a comprehensive <br /> automation framework for regression  <br />testing, with a focus on GUI testing  <br />using Cypress, Selenium, and<br /> API testing for back-end HTTP <br />requests. Additionally, proficient in<br /> using tools like Selenium and cypress<br /> for test coverage.
     </p>
  </div>
    </div>
       </div>

  )
}

export default About