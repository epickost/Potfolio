import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import "../../styles/EachProject.css";
import { FaGithub } from "react-icons/fa";

const EachProject = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const location = useLocation();
  const { item } = location.state || {};

  return (
    <div className="project-page">
      <div className="project-shell">
        {/* Header */}
        <div className="project-header">
          <h1 style={{ textAlign: "center", color: "#fff" }}>
            {item?.projectname}
          </h1>

          {item?.gitlink && (
            <a
              className="project-github"
              href={item.gitlink}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Link"
            >
              <FaGithub />
            </a>
          )}
        </div>

        {/* Scrollable content (IMAGE + TEXT together) */}
        {item?.Wholedescription && (
          <div className="project-markdown">
            {/* Image scrolls with text */}
            {item?.imglink1 && (
              <div className="project-imageWrap">
                <img
                  className="project-image"
                  src={item.imglink1}
                  alt="Project Screenshot"
                />
              </div>
            )}

            <ReactMarkdown
              components={{
                h1: ({ node, ...props }) => <h4 {...props} />,
                h2: ({ node, ...props }) => <h4 {...props} />,
                h3: ({ node, ...props }) => <h4 {...props} />,
                h4: ({ node, ...props }) => <h4 {...props} />,
                h5: ({ node, ...props }) => <h4 {...props} />,
                h6: ({ node, ...props }) => <h4 {...props} />,
                
              }}
            >
              {item.Wholedescription}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
};

export default EachProject;