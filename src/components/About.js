import React from 'react'
import image1 from '../Asserts/images.jpg';
const About = () => {
  return (

    <div className=" md:h-[100vh]  bg-fixed flex  text-white" style={{backgroundImage:`url(${image1})`}}>
      <div className='flex py-20'><h3 className='text-xl'>
      I am a skilled and dedicated software engineer with a strong background frontend development and in automation testing. With over 5 years of experience, including 1.5 year of frontend experience in React.js, Node.js, and JavaScript, I have a deep understanding of testing methodologies and have proven success in delivering high-quality, reliable software products.

In my current role, I am responsible for developing and maintaining automated test suites for a BT-Openreach Telecommunication application. Additionally, I actively contribute to frontend development tasks using React.js, Node.js, and JavaScript. Collaborating closely with development teams, I ensure that testing is seamlessly integrated into the software development process. By leveraging my frontend expertise, I help identify and address critical issues in both frontend and backend components, ensuring a robust and user-friendly application.
        </h3>
         </div>
    </div>

  )
}

export default About