import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import { faHouse ,faUser,faDiagramProject,faFile} from '@fortawesome/free-solid-svg-icons';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className="flex flex-row sticky top-0 space-x-60    items-center pl-9 py-9 bg-blue-700 ">
         <Link to="/">
         <h3 className="text-white hover:scale-110 duration-100  top-5  absolute">
         <FontAwesomeIcon icon={faHouse} />  Home</h3></Link>

        <Link to="/About">
        <h3 className="text-white hover:scale-110 duration-100    top-5 absolute">
            <FontAwesomeIcon icon={faUser} /> About</h3></Link>

        <Link to="/Projects">
        <h3 className="text-white hover:scale-110 duration-100     top-5 absolute">
            <FontAwesomeIcon icon={faDiagramProject} /> Projects</h3></Link>

        <Link to="/Resume">
        <h3 className="text-white hover:scale-110 duration-100  top-5 absolute">
            <FontAwesomeIcon icon={faFile} /> Resume</h3></Link>

       <Link to="/Contact">
        <h3 className="text-white hover:scale-110 duration-100  top-5 absolute">
        <FontAwesomeIcon icon={faAddressBook} /> Contact me</h3></Link> 

        <Link to="https://github.com/kishore445/IMDB_Clone.git " target="_blank" rel="noreferrer">
        <button className="text-white absolute top-5 right-20 text-2xl "><FontAwesomeIcon icon={faGithub} /></button>
        </Link>
     
        
        
    </div>
  )
}

export default Navbar