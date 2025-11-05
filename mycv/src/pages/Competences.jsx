import React from "react";
import Navbar from "../components/Navbar.jsx";
import ProjectExample from "../components/ProjectExempel.jsx";
import { motion } from "framer-motion";
import { li } from "framer-motion/client";

const Competences = () => {
  const [filterOpen, setFilterOpen] = React.useState(false);
  const projects = [
    {
      id: 1,
      title: "CV React",
      description: "A modern resume developed with React and Tailwind CSS",
      category: "React, Tailwind CSS, TypeScript",
      link: "https://github.com/yvankraft/CV",
    },
    {
      id: 2,
      title: "Chat App",
      description: "Full application with authentication and database",
      category: "React, Node.js, Tailwind CSS, MongoDB, Express",
      link: "https://github.com/yvankraft/chat-app",
    },
    {
      id: 3,
      title: "Drawing App",
      description: "Drawing application with tools and features",
      category: "React Native, React, canvas",
      link: "https://github.com/yvankraft/draw-App",
    },
    {
      id: 4,
      title: "Portefolio.com",
      description: "Personal website to showcase my projects and skills",
      category: "Html/CSS, JavaScript",
      link: "https://github.com/yvankraft/javascript",
    },
    {
      id: 5,
      title: "Gestion Game",
      description: "investment portfolio management simulation games",
      category: "React Native, Tailwind CSS, node.js, TypeScript, MongoDB",
      link: "https://github.com/yvankraft/jeux-de-gestion-de-porte-feuille-rich-man--",
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
    <div className="max-w-[1800px] mx-auto sm:grid sm:grid-cols-7 ">
      <div className=" relative md:col-span-2  flex justify-center items-center ">
        <Navbar />
      </div>
      <div className="sm:col-span-5 p-4 pb-20 sm:pb-0 sm:h-full overflow-auto">
        {/* Filtrage des projets */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="navbar bg-white top-0 left-0 right-0 h-auto p-4 mb-2 rounded-2xl flex items-center shadow-lg"
        >
          {/* Mobile: bouton + titre */}

          <div className="flex items-center sm:hidden w-full">
            <button
              className="btn btn-circle btn-lg mr-2"
              onClick={() => setFilterOpen((open) => !open)}
              aria-label="Show filters"
            >
              <svg
                aria-label="New poll"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="size-6"
              >
                <path d="M3 4.75a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6.25 3a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5h-7ZM6.25 7.25a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5h-7ZM6.25 11.5a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5h-7ZM4 12.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM3 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
              </svg>
            </button>{" "}
            <span className="font-semibold text-lg">Filter</span>
          </div>
          {/* Mobile: menu déroulant */}
          {filterOpen && (
            <div className="flex flex-wrap gap-2 mt-4 sm:hidden w-full">
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
          )}
          {/* Desktop/tablette: filtres toujours visibles */}
          <div className="hidden sm:flex flex-wrap gap-2 w-full justify-evenly items-center">
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
        </motion.div>
        {/* Grille responsive : 1 colonne sur mobile, 2 sur tablet, 3 sur desktop */}
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => (
            <ProjectExample
              key={project.id}
              title={project.title}
              description={project.description}
              technologies={project.category.split(", ")}
              link={project.link}
              className={project.title.replace(/\s+/g, "")}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Competences;
