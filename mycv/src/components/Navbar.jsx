import React from "react";
import { NavLink, Link } from "react-router-dom";
import profileImage from "../assets/IMG_0458.jpeg";
import {
  HomeIcon,
  UserIcon,
  AcademicCapIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className=" top-0 fixed h-[95vh] z-10 flex flex-col bg-slate-50 w-100 p-10 shadow-2xl rounded-3xl m-5 text-lg md:text-xl lg:text-2xl font-bold font-stretch-semi-condensed ">
      <div className="flex justify-center items-center mb-4">
        <div className="sm:w-40 sm:h-40 md:h-60 md:w-60 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-slate-200 shadow-lg">
          <img
            src={profileImage}
            alt="Profile Avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <h1 className="text-center text-slate-500 mb-6">
        Yvan Wildis Ngone Tchinda
      </h1>
      <nav className="flex flex-col text-slate-500 gap-8 mt-8 mb-6">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive
              ? "text-slate-800 border-b-2 border-slate-800 w-fit"
              : "hover:text-slate-800"
          }
        >
          <HomeIcon className="inline-block w-5 h-5 mr-1 " /> Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-slate-800 border-b-2 border-slate-800 w-fit"
              : "hover:text-slate-800"
          }
        >
          <UserIcon className="inline-block w-5 h-5 mr-1" /> About
        </NavLink>
        <NavLink
          to="/competences"
          className={({ isActive }) =>
            isActive
              ? "text-slate-800 border-b-2 border-slate-800 w-fit"
              : "hover:text-slate-800"
          }
        >
          <AcademicCapIcon className="inline-block w-5 h-5 mr-1" /> Competences
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-slate-800 border-b-2 border-slate-800 w-fit"
              : "hover:text-slate-800"
          }
        >
          <EnvelopeIcon className="inline-block w-5 h-5 mr-1" /> Contact
        </NavLink>
      </nav>
      <div className="flex justify-center space-x-4">
        <Link
          to="https://github.com/yvankraft"
          className="mt-10 text-center text-slate-400 hover:text-slate-800 text-sm"
        >
          <FaGithub className="inline-block sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 mr-2" />
        </Link>
        <Link
          to="https://www.linkedin.com/in/yvan-ngone-271b2b30b/"
          className="mt-10 text-center text-slate-400 hover:text-slate-800 text-sm"
        >
          <FaLinkedin className="inline-block sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 mr-2" />
        </Link>
        <Link
          to="https://x.com/wildisyvan53?s=11"
          className="mt-10 text-center text-slate-400 hover:text-slate-800 text-sm"
        >
          <FaTwitter className="inline-block sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 mr-2" />
        </Link>
      </div>
      <div className="mt-auto">
        <p className="text-center text-slate-400 text-sm">
          &copy; 2025 Yvan Wildis Ngone Tchinda
        </p>
      </div>
    </div>
  );
};

export default Navbar;
