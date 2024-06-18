import React, { useState } from "react";
import "../../styles/Navbar/Navbar.css";
import { FaBars } from 'react-icons/fa';
import { Link } from "react-router-dom";
// import { faGithub } from '@fortawesome/free-brands-svg-icons';
const Navbar=()=>
{
  const [open,setopen]=useState(false);

  const mobile_hamburger=()=>
  {
     setopen(!open);
   }

  return <div className="nav">
          <div className="nav_container">
          <div className="nav_items">
          <a className="nav_links" href={'/about'}>About</a>
          <a className="nav_links" href={"#workexp"}>Experience</a>
          <a className="nav_links" href={"#skills"}>Projects</a>
          </div>
          <div className="navbar_mobile" >
             <FaBars onClick={mobile_hamburger} size='30px'/>
          </div>
          {open==true ?
             (<div className="nav_mob_items">
               <a className="nav_mob_links" onClick={mobile_hamburger} href={'/about'}>About</a>
               <a className="nav_mob_links" onClick={mobile_hamburger} href={"#workexp"}>Experience</a>
               <a className="nav_mob_links" onClick={mobile_hamburger} href={"#skills"}>Projects</a>
           </div>): <div/>}
         </div>
        </div>
}

export default Navbar;