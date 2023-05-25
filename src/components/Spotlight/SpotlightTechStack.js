import React from "react";
import "./SpotlightTechStack.css";
import {
  DiReact,
  DiNodejs,
  DiPython,
  DiJava,
  DiPostgresql,
  DiGit
} from "react-icons/di";
// import './DeviconGrid.css'; // Create a separate CSS file for styling if desired

const SpotlightTechStack = () => {
  const icons = [
    { name: "React", icon: <DiReact /> },
    { name: "Node.js", icon: <DiNodejs /> },
    { name: "Python", icon: <DiPython /> },
    { name: "Java", icon: <DiJava /> },
    { name: "PostgreSQL", icon: <DiGit /> },
    { name: "PostgreSQL", icon: <DiPostgresql /> }
  ];

  const doHover = () => {
    // TODO lert("hovered");
  };
  return (
    <div className="devicon-grid">
      {icons.map((item, index) => (
        <div className="devicon-item" key={index}>
          {item.icon}
        </div>
      ))}
    </div>
  );
};

export default SpotlightTechStack;
