import React, { useEffect, useState } from "react";
import "../../styles/HeroSection.css";
import Typewriter from 'typewriter-effect';
import srcvideo from '../../assets/ALL-1.mp4';
import { FaLinkedinIn,FaGithub,FaEnvelope} from "react-icons/fa";
import { web_projects } from "../../data/constant";

const impactStats = [
  {
    target: 3,
    step: 1,
    suffix: "+",
    label: "Years of Experience",
  },
  {
    target: web_projects.length,
    step: 1,
    suffix: "+",
    label: "Projects Built",
  },
  {
    target: 500000,
    step: 10000,
    suffix: "+",
    label: "Disputes / Month",
  },
  {
    target: 6000000,
    step: 100000,
    suffix: "+",
    label: "Transactions Handled",
  },
];

const formatStatValue = (value) => {
  if (value >= 1000000) {
    const millions = value / 1000000;
    return `${Number.isInteger(millions) ? millions : millions.toFixed(1)}M`;
  }

  if (value >= 1000) {
    const thousands = value / 1000;
    return `${Number.isInteger(thousands) ? thousands : thousands.toFixed(1)}K`;
  }

  return `${value}`;
};

const RollingStat = ({ target, step, suffix, label }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let frameId;
    let startTime;
    const duration = 1400;

    const tick = (time) => {
      if (!startTime) {
        startTime = time;
      }

      const progress = Math.min((time - startTime) / duration, 1);
      const nextValue = Math.min(
        target,
        Math.max(step, Math.round((target * progress) / step) * step)
      );

      setValue(nextValue);

      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick);
      }
    };

    frameId = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(frameId);
  }, [step, target]);

  return (
    <article className="hero-stat-card">
      <span className="hero-stat-value">{`${formatStatValue(value)}${suffix}`}</span>
      <span className="hero-stat-label">{label}</span>
    </article>
  );
};

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
      <div className="hero-stats">
        {impactStats.map((stat) => (
          <RollingStat key={stat.label} {...stat} />
        ))}
      </div>
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
