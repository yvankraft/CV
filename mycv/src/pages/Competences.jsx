import React from "react";
import Navbar from "../components/Navbar.jsx";
import ProjectExample from "../components/ProjectExempel.jsx";
import { motion } from "framer-motion";

const Competences = () => {
  const projects = [
    {
      id: 1,
      title: "CV React",
      description: "A modern resume developed with React and Tailwind CSS",
      category: "React, Tailwind CSS, TypeScript,",
    },
    {
      id: 2,
      title: "Chat App",
      description: "Full application with authentication and database",
      category: "React, node.js, Tailwind CSS, mongodb, Express",
    },
    {
      id: 3,
      title: "Drawing App",
      description: "Drawing application with tools and features",
      category: "React Native, React, canvas",
    },
    {
      id: 4,
      title: "Portefolio.com",
      description: "Personal website to showcase my projects and skills",
      category: "Html/CSS, JavaScript",
    },
    {
      id: 5,
      title: "jeux de gestion",
      description: "jeux de gestion",
      category: "React/Tailwind, node.js, TypeScript",
    },
  ];

  const [filteredProjects, setFilteredProjects] = React.useState(projects); // Initialisé avec tous les projets
  const [activeFilter, setActiveFilter] = React.useState("Tous");

  const allProjects = () => {
    setFilteredProjects(projects);
    setActiveFilter("Tous");
  };
  const filterReact = () => {
    const filtered = projects.filter((project) =>
      project.category.includes("React")
    );
    setFilteredProjects(filtered);
    setActiveFilter("React");
  };
  const filterTailwind = () => {
    const filtered = projects.filter((project) =>
      project.category.includes("Tailwind")
    );
    setFilteredProjects(filtered);
    setActiveFilter("Tailwind");
  };
  const filterHtmlCss = () => {
    const filtered = projects.filter((project) =>
      project.category.includes("Html/CSS")
    );
    setFilteredProjects(filtered);
    setActiveFilter("Html/CSS");
  };
  const filterReactNative = () => {
    const filtered = projects.filter((project) =>
      project.category.includes("React Native")
    );
    setFilteredProjects(filtered);
    setActiveFilter("React Native");
  };
  const filterNodeJs = () => {
    const filtered = projects.filter((project) =>
      project.category.includes("Node.js")
    );
    setFilteredProjects(filtered);
    setActiveFilter("Node.js");
  };
  const filterJavaScript = () => {
    const filtered = projects.filter((project) =>
      project.category.includes("JavaScript")
    );
    setFilteredProjects(filtered);
    setActiveFilter("JavaScript");
  };
  const filterTypeScript = () => {
    const filtered = projects.filter((project) =>
      project.category.includes("TypeScript")
    );
    setFilteredProjects(filtered);
    setActiveFilter("TypeScript");
  };

  return (
    <div className="max-w-[1800px] mx-auto grid grid-cols-6 ">
      <div className=" relative md:col-span-2  flex justify-center items-center ">
        <Navbar />
      </div>
      <div className="col-span-4 p-4 h-[100vh] overflow-y-auto">
        {/* Filtrage des projets */}
        <div className="navbar bg-white top-0 left-0 right-0 h-auto p-4 mb-2 mt-1 rounded-2xl flex justify-evenly items-center shadow-lg">
          <button
            onClick={allProjects}
            className={activeFilter === "Tous" ? "active" : ""}
          >
            <input
              type="radio"
              name="radio-1"
              className="radio"
              defaultChecked
            />
            <span className="ml-2">all</span>
          </button>
          <button
            onClick={filterReact}
            className={activeFilter === "React" ? "active" : ""}
          >
            <input type="radio" name="radio-1" className="radio" />
            <span className="ml-2">React</span>
          </button>
          <button
            onClick={filterTailwind}
            className={activeFilter === "Tailwind" ? "active" : ""}
          >
            <input type="radio" name="radio-1" className="radio" />
            <span className="ml-2">Tailwind</span>
          </button>
          <button
            onClick={filterHtmlCss}
            className={activeFilter === "Html/CSS" ? "active" : ""}
          >
            <input type="radio" name="radio-1" className="radio" />
            <span className="ml-2">html/css</span>
          </button>
          <button
            onClick={filterReactNative}
            className={activeFilter === "React Native" ? "active" : ""}
          >
            <input type="radio" name="radio-1" className="radio" />
            <span className="ml-2">React Native</span>
          </button>
          <button
            onClick={filterNodeJs}
            className={activeFilter === "Node.js" ? "active" : ""}
          >
            <input type="radio" name="radio-1" className="radio" />
            <span className="ml-2">Node.js</span>
          </button>
          <button
            onClick={filterJavaScript}
            className={activeFilter === "JavaScript" ? "active" : ""}
          >
            <input type="radio" name="radio-1" className="radio" />
            <span className="ml-2">JavaScript</span>
          </button>
          <button
            onClick={filterTypeScript}
            className={activeFilter === "TypeScript" ? "active" : ""}
          >
            <input type="radio" name="radio-1" className="radio" />
            <span className="ml-2">TypeScript</span>
          </button>
        </div>
        {/* Grille responsive : 1 colonne sur mobile, 2 sur tablet, 3 sur desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectExample
              key={project.id}
              title={project.title}
              description={project.description}
              technologies={project.category.split(", ")}
              link="https://github.com/yvankraft"
              className={project.title.replace(/\s+/g, "")}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Competences;
