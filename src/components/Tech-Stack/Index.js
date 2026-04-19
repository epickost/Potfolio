import React from "react";
import { FaJava } from "react-icons/fa";
import {
  SiAngular,
  SiAmazonaws,
  SiApachekafka,
  SiDocker,
  SiGit,
  SiGithubactions,
  SiGraphql,
  SiJenkins,
  SiJavascript,
  SiKubernetes,
  SiMongodb,
  SiMysql,
  SiOracle,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSpringboot,
  SiStreamlit,
} from "react-icons/si";
import "../../styles/TechStack.css";

const skillGroups = [
  {
    title: "Backend",
    caption: "Services, APIs, data pipelines, and enterprise systems.",
    skills: [
      { name: "Java", icon: FaJava, color: "#ea5b2a" },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6db33f" },
      { name: "Python", icon: SiPython, color: "#3776ab" },
      { name: "Kafka", icon: SiApachekafka, color: "#111111" },
      { name: "GraphQL", icon: SiGraphql, color: "#e10098" },
      { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
    ],
  },
  {
    title: "Frontend",
    caption: "Interfaces for investigation workflows, dashboards, and products.",
    skills: [
      { name: "React", icon: SiReact, color: "#61dafb" },
      { name: "Angular", icon: SiAngular, color: "#dd0031" },
      { name: "Streamlit", icon: SiStreamlit, color: "#ff4b4b" },
    ],
  },
  {
    title: "Cloud, DevOps, Data",
    caption: "Shipping, scaling, and supporting production systems.",
    skills: [
      { name: "AWS", icon: SiAmazonaws, color: "#ff9900" },
      { name: "Docker", icon: SiDocker, color: "#2496ed" },
      { name: "Kubernetes", icon: SiKubernetes, color: "#326ce5" },
      { name: "Git", icon: SiGit, color: "#f05032" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "#2088ff" },
      { name: "Jenkins", icon: SiJenkins, color: "#d24939" },
      { name: "MySQL", icon: SiMysql, color: "#4479a1" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169e1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
      { name: "Oracle", icon: SiOracle, color: "#f80000" },
    ],
  },
];

const TechStack = () => {
  return (
    <div className="tech-stack-shell">
      <div className="tech-stack-heading">
        <p className="tech-stack-kicker">Core Stack</p>
        <h1>Skills I Use Across Production Projects</h1>
        <p className="tech-stack-intro">
          A focused snapshot of the tools I use most across backend services,
          frontend applications, cloud delivery, and data systems.
        </p>
      </div>

      <div className="tech-stack-groups">
        {skillGroups.map((group) => (
          <section key={group.title} className="tech-stack-group">
            <div className="tech-stack-group-header">
              <h2>{group.title}</h2>
              <p>{group.caption}</p>
            </div>

            <div className="tech-stack-grid">
              {group.skills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <article key={skill.name} className="tech-skill-card">
                    <span
                      className="tech-skill-icon"
                      style={{ color: skill.color }}
                      aria-hidden="true"
                    >
                      <Icon />
                    </span>
                    <span className="tech-skill-name">{skill.name}</span>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
