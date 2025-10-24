import React from "react";
import Navbar from "../components/Navbar.jsx";
import ProjectExample from "../components/ProjectExempel.jsx";

const Competences = () => {
  return (
    <div className="max-w-[1800px] mx-auto grid grid-cols-6 ">
      <div className=" relative md:col-span-2  flex justify-center items-center ">
        <Navbar />
      </div>
      <div className="col-span-4 p-4 h-[100vh] overflow-y-auto">
        {/* Grille responsive : 1 colonne sur mobile, 2 sur tablet, 3 sur desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectExample
            title="CV Interactif React"
            description="Un CV moderne développé avec React et Tailwind CSS"
            technologies={["React", "Tailwind CSS", "JavaScript"]}
            link="https://github.com/yvankraft"
          />
          <ProjectExample
            title="Chat App"
            description="Application complète avec authentification et base de données"
            technologies={[
              "Node.js",
              "MongoDB",
              "Express",
              "React",
              "Tailwind CSS",
            ]}
            link="https://github.com/yvankraft"
          />
          <ProjectExample
            title="Drawing App"
            description="Application de dessin avec outils et fonctionnalités"
            technologies={["React", "Fabric.js", "Node.js"]}
            link="https://github.com/yvankraft"
          />
          <ProjectExample
            title="Portefolio.com"
            description="Site web personnel pour présenter mes projets et compétences"
            technologies={["Html", " CSS", "JavaScript"]}
            link="https://github.com/yvankraft"
          />
          <ProjectExample
            title="Dashboard Analytics"
            description="Interface d'analyse avec graphiques et métriques"
            technologies={["React", "Chart.js", "TypeScript"]}
            link="https://github.com/yvankraft"
          />
        </div>
      </div>
    </div>
  );
};

export default Competences;
