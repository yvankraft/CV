import { div } from "framer-motion/client";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectExample = ({ title, description, technologies, image, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div>
        <div
          className="p-6 bg-center bg-base-100 bg-cover h-60 m-3 rounded-lg items-center flex flex-col text-center justify-center"
          style={{ backgroundImage: `url(${image})` }}
        >
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
        </div>
        <div className="p-6">
          <div className="flex flex-wrap gap-2">
            {technologies?.map((tech, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex ">
            <Link
              to={link}
              className="mt-2 text-center  hover:underline text-sm text-blue-600 "
            >
              {link}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectExample;
