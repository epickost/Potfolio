import React from "react";
import "../../styles/HeroSection.css";
import Typewriter from 'typewriter-effect';
import srcvideo from '../../assets/ALL-1.mp4';
import { FaLinkedinIn,FaGithub,FaEnvelope} from "react-icons/fa";
const HeroSection=()=>
{
   return <div className="hero_section" >
       <div className="hero_container">
       {/* <div className="hero_img">
       <img src={require('../../assets/pp1.jpg')} >
      </img>
       </div> */}
        <div className="vid"> 
         <video loop autoPlay muted className="video-mp4">
           <source  src={srcvideo} type="video/mp4">
            </source>
         </video>
        </div>
       <div className="hero_intro">
       <div className="hero_name">
         {/* <Bg_Animations/> */}
       <h1>Hi, I'm
       <div className="typewriter_container">
        <Typewriter options={{  strings: ["Vamshi J.",],autoStart: true,loop:true}}/>
      </div>
      </h1>
      </div>
      <p>
        Software Engineer with 3+ years of experience building scalable full-stack and backend systems using React, Angular, and Spring Boot. Focused on performance, reliability, and clean system design.
      </p>
       <div className="links">
      <a href="https://www.linkedin.com/in/vam3457/"><FaLinkedinIn style={{ fontSize: '30px', color: '#0077B5' ,alignItems:'center'}} /></a>
     <a href="https://github.com/epickost" style={{ marginLeft: '20px' }}><FaGithub style={{ fontSize: '30px', color: '#000',alignItems:'center'}} /></a>
     <a href="mailto:vamshiub2022@gmail.com" style={{ marginLeft: '10px' }}><FaEnvelope style={{ fontSize: '30px', color: '#000',alignItems:'center'}} /></a> 
   </div>

       </div>
       </div>
       </div>
}

export default HeroSection;