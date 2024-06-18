import {React} from "react";
import {web_projects} from "../../data/constant";
import "../../styles/Skills.css";
import { useInView } from 'react-intersection-observer';
 import { useNavigate } from 'react-router-dom';

const Skills = () => {

  const navigate = useNavigate();
  const SkillCard = ({ item, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, 
  });


const ProjectSkills = (item) => 
{
      navigate('/each-project', { state: { item } });
};


  return (

    <div ref={ref}  onClick={() => ProjectSkills(item)} className={`skills_details ${inView ? (index % 2 === 0 ? "skill_l_r" : "skill_r_l") : ""}`}>
      <div>
        <h1>{item.projectname}</h1>
      </div>
      <div className="All_Skills">
        <div className="skills_section">
          <h2 style={{ color: 'black' }}>{item.description}</h2>
        </div>
      </div>
    </div>);
};


  return (
    <div className="skill_container">
      <h1>Projects</h1>
      <div className="skills_card">
        {web_projects.map((item, index) => (
          <SkillCard key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Skills;



