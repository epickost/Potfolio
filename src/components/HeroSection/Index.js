import React from "react";
import "../../styles/HeroSection.css";
import Typewriter from 'typewriter-effect';
import srcvideo from '../../assets/ALL-1.mp4';
import { FaLinkedinIn,FaGithub,faEnvelope, FaEnvelope} from "react-icons/fa";
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
       <p>I'm a CS grad with 2 years in Software Engineering, specializing in React.js, HTML, CSS, and Spring Boot for responsive web app development. I bring adaptability and a full-stack approach, eager to tackle diverse projects.</p>
       {/* <p>I am a CS grad with 2 years as a Software Engineer, skilled in React.js, HTML, CSS, and backend development using Spring Boot. 
          Experienced in creating responsive web apps. Adaptable, enthusiastic, and a full-stack developer ready for diverse projects.</p> */}
       <div className="links">
      <a href="https://linkedin.com/in/vamshi-j"><FaLinkedinIn style={{ fontSize: '30px', color: '#0077B5' ,alignItems:'center'}} /></a>
     <a href="https://github.com/jamalpurvamshi12" style={{ marginLeft: '20px' }}><FaGithub style={{ fontSize: '30px', color: '#000',alignItems:'center'}} /></a>
     <a href="mailto:vamshivj12@gmail.com" style={{ marginLeft: '10px' }}><FaEnvelope style={{ fontSize: '30px', color: '#000',alignItems:'center'}} /></a> 
   </div>

       </div>
       </div>
       </div>
}

export default HeroSection;