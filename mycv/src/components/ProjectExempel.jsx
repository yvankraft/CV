import { div } from "framer-motion/client";
import React from "react";
import { FaGithub } from "react-icons/fa";

const ProjectExample = ({ title, description, technologies, image, link }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div>
        <div
          className="p-6 bg-center bg-base-100 bg-cover h-40 m-3 rounded-lg items-center flex flex-col text-center justify-center"
          style={{ backgroundImage: `url(${image})` }}
        >
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
        </div>
        <div className="p-6 flex flex-col items-center justify-center gap-1">
          <div className="flex flex-wrap justify-evenly gap-1">
            {technologies?.map((tech, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex justify-center items-center gap-2">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 mt-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                <FaGithub className="text-lg" />
                <span className="text-sm">see the code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectExample;
