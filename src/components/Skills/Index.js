import { React } from "react";
import { FaGithub } from "react-icons/fa";
import { web_projects } from "../../data/constant";
import "../../styles/Skills.css";
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const SkillCard = ({ item, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, 
  });

  return (
    <div
      ref={ref}
      className={`skills_details ${inView ? (index % 2 === 0 ? "skill_l_r" : "skill_r_l") : ""}`}
    >
      <div>
        <h2 className="project-title">{item.projectname}</h2>
      </div>
      <div className="All_Skills">
        <div className="skills_section">
          <h2 style={{ color: 'white' }}>{item.description}</h2>
        </div>
      </div>
      <div className="project-hover-card">
        <p className="project-hover-summary">{item.summary || item.description}</p>
        {item.gitlink && (
          <a
            className="project-hover-link"
            href={item.gitlink}
            target="_blank"
            rel="noreferrer"
            onClick={(event) => event.stopPropagation()}
            aria-label={`${item.projectname} GitHub repository`}
          >
            <FaGithub />
            <span>GitHub</span>
          </a>
        )}
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

