import {React,useEffect} from "react";
import { useLocation } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import "../../styles/EachProject.css";
import {FaGithub} from "react-icons/fa";
const EachProject=()=>
{

  useEffect(()=>{
  window.scrollTo(0, 0);
},[])


   const location = useLocation();
  const { item } = location.state || {}
  return <div >
   <div className="borders">
   <div className="headers">
   <h1 style={{textAlign:'center'}}>{item?.projectname}</h1>  
   {item.gitlink &&  <a href={item.gitlink} style={{ marginLeft: '10px' }}>
    <FaGithub style={{ fontSize: '25px', color: '#000',alignSelf:'center'}} /></a>}
  </div>
    {item && (
         <>
       {item.imglink1 &&  <img src={item?.imglink1} alt="Project Screenshot" style={{ maxWidth:'70%',alignSelf:'center' }} />} 
          <ReactMarkdown>
            {item.Wholedescription}
          </ReactMarkdown>
         </>
        )}
  </div>
  </div>
}

export default EachProject;


