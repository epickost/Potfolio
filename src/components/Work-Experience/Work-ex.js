import React from "react";
import { experiences } from "../../data/constant";
import "../../styles/Experiences.css";

const WorkExp = () => {
  return (
    <div className="div_work">
      <h1 style={{ color: "black" }}>Work-Experience</h1>
      <div className="experience-timeline">
        {experiences.map((item, index) => (
          <article key={index} className="experience-item">
            <div className="experience-rail" aria-hidden="true">
              <span
                className={`experience-marker${
                  item.latest ? " experience-marker-latest" : ""
                }`}
              />
            </div>

            <div className="experience-timeline-copy">
              <div className="experience-meta">
                <span className="experience-date">{item.date}</span>
                {item.latest && (
                  <span className="experience-latest">Latest</span>
                )}
              </div>

              <div className="experience-card">
                <div className="experience-card-top">
                  <img
                    src={item.img}
                    alt={`${item.company} logo`}
                    className="company-logo float-logo"
                  />
                </div>

                <div className="experience-copy">
                  <p className="experience-role">{item.role}</p>
                  <h2 className="experience-company">{item.company}</h2>
                </div>

                {item.projects && (
                  <div className="experience-projects">
                    {item.projects.map((project) => (
                      <span key={project} className="experience-project-chip">
                        {project}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default WorkExp;
