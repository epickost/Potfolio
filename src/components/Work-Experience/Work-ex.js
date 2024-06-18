import React from "react";
import {experiences} from "../../data/constant";
import "../../styles/Experiences.css";

const WorkExp=()=>
{
  return <div className="div_work">
             <h1 style={{color:"black"}} >Here comes work-ex</h1>
           {experiences.map((item,index) => 
               <div key={index} className="all_items" style={{backgroundColor:"black"}}>
               <div className="work_ex_items">
                <div><img src={(item.img)} alt="work-exp" height={195} width={195}/> </div>
                <div className="work_ex_details">
                 <div><h1 style={{color:"white"}}>{item.company}</h1></div>
                 <div><h2>{item.role}</h2></div>
                 <div ><h3 className="exp-h3">{item.date}</h3></div>
                 <div className="job-jd"><h4>{item.description}</h4></div>
               </div>
               </div>
              </div>
             )}
         </div>
}

export default WorkExp;