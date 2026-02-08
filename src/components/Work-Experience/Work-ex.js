// import React from "react";
// import {experiences} from "../../data/constant";
// import "../../styles/Experiences.css";

// const WorkExp=()=>
// {
//   return <div className="div_work">
//              <h1 style={{color:"black"}} >Work-Experience</h1>
//            {experiences.map((item,index) => 
//                <div key={index} className="all_items" style={{backgroundColor:"black"}}>
//                <div className="work_ex_items">
//                 {/* <div><img src={(item.img)} alt="work-exp" height={195} width={195}/> </div> */}
//                 <div>
//                 {item.company === "S2Global Solutions" ? (
//                   <img src={item.img} alt="work-exp" className="company-logo s2-logo float-logo" />
//                 ) : (
//                   <img src={item.img} alt="work-exp" height={195} width={195} className="float-logo" />
//                 )}
//               </div>
//                 <div className="work_ex_details">
//                  <div><h1 style={{color:"white"}}>{item.company}</h1></div>
//                  <div><h2>{item.role}</h2></div>
//                  <div ><h3 className="exp-h3">{item.date}</h3></div>
//                  {/* <div className="job-jd"><h4>{item.description}</h4></div> */}
//                   {/* <div className="job-jd">
//                   {item.description
//                     .trim()
//                     .split("\n")
//                     .filter(Boolean)
//                     .map((line, i) => (
//                       <h4 key={i}>
//                         {line.replace("•", "").trim()}
//                       </h4>
//                     ))}
//                 </div> */}
//                    <div className="job-jd">
//                   {/* CASE 1: S2Global with clients */}
//                   {item.clients && item.clients.map((client, cIdx) => (
//                     <div key={cIdx} style={{ marginBottom: "18px" }}>
//                       <h3 style={{ color: "white", fontWeight: 600 }}>
//                         Client: {client.name}
//                       </h3>

//                       {client.description
//                         .trim()
//                         .split("\n")
//                         .filter(Boolean)
//                         .map((line, i) => (
//                           <div key={i} style={{ display: "flex", gap: "10px" }}>
//                             <span>•</span>
//                             <h4>{line.replace("•", "").trim()}</h4>
//                           </div>
//                         ))}
//                     </div>
//                   ))}

//                   {/* CASE 2: Normal experience (Legato / Phygital) */}
//                   {!item.clients && item.description && (
//                     item.description
//                       .trim()
//                       .split("\n")
//                       .filter(Boolean)
//                       .map((line, i) => (
//                         <div key={i} style={{ display: "flex", gap: "10px" }}>
//                           <span>•</span>
//                           <h4>{line.replace("•", "").trim()}</h4>
//                         </div>
//                       ))
//                   )}

//                 </div>
//                </div>
//                </div>
//               </div>
//              )}
//          </div>
// }

// export default WorkExp;



import React from "react";
import { experiences } from "../../data/constant";
import "../../styles/Experiences.css";

const cleanLine = (s) =>
  s
    .replace(/^["']|["']$/g, "") // remove wrapping quotes
    .replace(/^•\s?/, "")        // remove leading bullet if present
    .replace(/\r/g, "")          // remove windows CR
    .trim();

const WorkExp = () => {
  return (
    <div className="div_work">
      <h1 style={{ color: "black" }}>Work-Experience</h1>

      {experiences.map((item, index) => (
        <div
          key={index}
          className="all_items"
          style={{ backgroundColor: "black" }}
        >
          <div className="work_ex_items">
            {/* Company logo */}
            <div>
              {item.company === "S2Global Solutions" ? (
                <img
                  src={item.img}
                  alt="work-exp"
                  className="company-logo s2-logo float-logo"
                />
              ) : (
                <img
                  src={item.img}
                  alt="work-exp"
                  height={195}
                  width={195}
                  className="float-logo"
                />
              )}
            </div>

            {/* Details */}
            <div className="work_ex_details">
              <h1 style={{ color: "white" }}>{item.company}</h1>
              <h2>{item.role}</h2>
              <h3 className="exp-h3">{item.date}</h3>

              <div className="job-jd">
                {/* CASE 1: Experience with clients */}
                {item.clients &&
                  item.clients.map((client, cIdx) => (
                    <div key={cIdx} style={{ marginBottom: "18px" }}>
                      <h3 style={{ color: "white", fontWeight: 600 }}>
                        Client: {client.name}
                      </h3>

                      {client.description
                        .trim()
                        .split(/\r?\n/)
                        .filter(Boolean)
                        .map((line, i) => (
                          <div key={i} className="bullet-row">
                            <span className="bullet-dot">•</span>
                            <p className="bullet-text">
                              {cleanLine(line)}
                            </p>
                          </div>
                        ))}
                    </div>
                  ))}

                {/* CASE 2: Normal experience */}
                {!item.clients && item.description &&
                  item.description
                    .trim()
                    .split(/\r?\n/)
                    .filter(Boolean)
                    .map((line, i) => (
                      <div key={i} className="bullet-row">
                        <span className="bullet-dot">•</span>
                        <p className="bullet-text">
                          {cleanLine(line)}
                        </p>
                      </div>
                    ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkExp;