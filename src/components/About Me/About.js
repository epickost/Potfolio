import React from "react";
import "../../styles/Aboutme.css"
import srcvideo from '../../assets/About-pictues/buffalo.mp4';
import srcvideo1 from '../../assets/About-pictues/niagara.mp4';
import { TypeAnimation } from "react-type-animation";
const About=()=>
{
  return (
   <div className="aboutme">
   <div className="second-layer">
     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',margin: '4%'}}>
  <TypeAnimation
    sequence={[
      'Welcome to my portfoliooo....',
      1000,
      'About mee....',
      1000,
    ]}
    speed={50}
    style={{ fontSize: '2em', textAlign: 'center' }}
    repeat={Infinity}
  />
</div>

     <div className="about-me">
      <div className="about-img">
        <img src={require('../../assets/pp1.jpg')} ></img>
      </div>
     <hr/>
     <div className="description">
           <div className="skills">
                <div class="summary">
       <p>
         Hi, I'm <span className="mee">Vamshi</span>, a passionate developer who loves to code and design. I came to the USA to pursue my master's degree 
         and continue my journey in software engineering. With a strong foundation in computer science and a knack for 
         problem-solving, I am enthusiastic about leveraging technology to create innovative solutions and make a positive 
         impact.
       </p>
     <p>Here are some details about me and memories I'd like to share...
    </p>

      </div>
      </div>
     </div>
     </div>
      

         <div className="about-me-1">
           <div className="vid"> 
         <video loop autoPlay muted className="video-mp4">
           <source  src={srcvideo} type="video/mp4">
            </source>
         </video>
        </div>
     <hr/>
     <div className="description">
           <div className="skills">
                <div class="summary">
       <p>
          I completed my master's degree at the <span class="blue"> University at Buffalo.</span> 
         Some of the courses I studied include Database Management Systems, 
          Introduction to Machine Learning, and Project Development. Despite the very cold winters, 
          I managed to get through them 🥶.
       </p>
      </div>
      </div>
     </div>
     </div>


         <div className="about-me">
      <div className="about-img">
        <img src={require('../../assets/About-pictues/nyc.jpg')} ></img>
      </div>
     <hr/>
     <div className="description">
           <div className="skills">
                <div class="summary">
       <p>
         <p>
       <p>
 <p>
  I have expertise in programming languages such as 
  <span class="blue"> Java </span>, 
  <span class="orange"> Python </span>, 
  <span class="purple"> C </span>, 
  <span class="red"> JavaScript </span>, and 
  <span class="blue"> Dart </span>, as well as frameworks and tools like 
  <span class="orange"> Spring Boot </span>, 
  <span class="purple"> Flask </span>, 
  <span class="red"> Postman </span>, 
  <span class="blue"> Git </span>, 
  <span class="orange"> ReactJS </span>, 
  <span class="purple"> Spring </span>, 
  <span class="red"> GraphQL </span>, 
  <span class="blue"> Flutter </span>, 
  <span class="orange"> HTML </span>, 
  <span class="purple"> CSS </span>, 
  <span class="red"> Node.js </span>, 
  <span class="blue"> Express.js </span>, 
  <span class="orange"> Streamlit </span>, and 
  <span class="purple"> Angular </span>. 
  My database skills include 
  <span class="red"> MySQL </span>, 
  <span class="blue"> PostgreSQL </span>, 
  <span class="orange"> MongoDB </span>, and 
  <span class="purple"> Oracle </span>. Additionally, I am experienced with DevOps and tools such as 
  <span class="red"> GitHub Workflows </span>, 
  <span class="blue"> Scrum/Agile </span>, 
  <span class="orange"> Jira </span>, 
  <span class="purple"> Confluence </span>, 
  <span class="red"> Jenkins </span>, 
  <span class="blue"> Code Analysis </span>, 
  <span class="orange"> AWS </span> (
  <span class="purple"> EC2 </span>, 
  <span class="red"> Lambda </span>, 
  <span class="blue"> S3 </span>), and 
  <span class="orange"> Asana </span>.
</p>

</p>

</p>

       </p>
      </div>
      </div>
     </div>
     </div>



        <div className="about-me-1">
          <div className="vid"> 
          <video loop autoPlay muted className="video-mp4">
           <source  src={srcvideo1} type="video/mp4">
            </source>
         </video>
         </div>
     <hr/>
     <div className="description">
         <div className="skills">
          <div class="summary">
       <p>
         My visit to Niagara Falls was an awe-inspiring experience. The sheer power and beauty of the falls left me speechless. Standing close to the roaring water, feeling the mist on my face, and witnessing the vibrant rainbows that formed in the spray was unforgettable. The surrounding nature was stunning, and the boat tour to the base of the falls offered a thrilling perspective. It was a breathtaking adventure that I will always cherish.
       </p>
      </div>
      </div>
     </div>
     </div>
     </div>
</div>
  )
}

export default About;
