import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import { faHouse ,faUser,faDiagramProject,faFile} from '@fortawesome/free-solid-svg-icons';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row sticky top-0 space-x-40   items-center pl-9 py-9 bg-blue-700 ">
         <Link to="/">
         <h3 className="text-white hover:scale-110 duration-100 my-2 md:my-0 top-5   ">
         <FontAwesomeIcon icon={faHouse}className="mr-2" />  Home</h3></Link>

        <Link to="/About">
        <h3 className="text-white hover:scale-110 duration-100   my-2  md:my-0 top-5 ">
            <FontAwesomeIcon icon={faUser}className="mr-2" /> About</h3></Link>

        <Link to="/Projects">
        <h3 className="text-white hover:scale-110 duration-100  my-2 md:my-0  top-5 ">
            <FontAwesomeIcon icon={faDiagramProject} className="mr-2"/> Projects</h3></Link>

        <Link to="/Resume">
        <h3 className="text-white hover:scale-110 duration-100 my-2 md:my-0 top-5 ">
            <FontAwesomeIcon icon={faFile} className="mr-2"/> Resume</h3></Link>

       <Link to="/Contact">
        <h3 className="text-white hover:scale-110 duration-100 my-2  md:my-0 top-5 ">
        <FontAwesomeIcon icon={faAddressBook} className="mr-2" /> Contact me</h3></Link> 
      

        <Link to="https://github.com/kishore445/IMDB_Clone.git " target="_blank" rel="noreferrer" className='mt-4 md:mt-0 md:ml-auto'>
        <button className="text-white absolute top-5 right-20 text-2xl  "><FontAwesomeIcon icon={faGithub} /></button>
        </Link>
     
        
        
    </div>
  )
}

export default Navbar