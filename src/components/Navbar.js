import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
const Navbar = () => {
  return (
    <div className="flex flex-row  relative  items-center pl-9 py-9 bg-black ">
         <Link to="/"><h3 className="text-white hover:scale-110 duration-100  top-5 px-20  right-80 absolute">Home</h3></Link>
        <Link to="/"><h3 className="text-white hover:scale-110 duration-100 px-20  right-60 top-5 absolute">About</h3></Link>
        <Link to="/"><h3 className="text-white hover:scale-110 duration-100  px-20  right-40 top-5 absolute">Projects</h3></Link>
        <Link to="/"><h3 className="text-white hover:scale-110 duration-100 px-20  right-20  top-5 absolute">Resume</h3></Link>
        <Link to="https://github.com/kishore445/IMDB_Clone.git" target="_blank">
        <button className="text-white absolute right-10 top-5 px-20 "><FontAwesomeIcon icon={faGithub} /></button>
        </Link>
     
        
        
    </div>
  )
}

export default Navbar