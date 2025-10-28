import React from "react";
import { NavLink, Link } from "react-router-dom";
import profileImage from "../assets/IMG_0458.jpeg";
import { HomeIcon, UserIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { FaCode } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.div
      initial={{ y: -200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed bottom-0 left-0 right-0 z-20 flex flex-row justify-around items-center rounded-2xl m-2
sm:bottom-4 sm:left-4 sm:right-4 sm:rounded-2xl
md:absolute md:top-0 md:left-0 md:right-auto md:bottom-auto md:h-[95%] md:flex-col md:justify-between md:w-80
bg-slate-50/95 shadow-2xl rounded-t-3xl md:rounded-3xl md:m-2"
    >
      <div className="flex items-center mb-4 md:mb-1 h-full justify-evenly">
        <div className="h-40 w-40 sm:w-40 sm:h-40 md:h-48 md:w-48 lg:w-60 lg:h-60 rounded-full overflow-hidden border-4  hidden md:flex border-slate-200 shadow-lg">
          <img
            src={profileImage}
            alt="Profile Avatar"
            className="w-full h-full object-cover "
          />
        </div>
      </div>
      <h1 className="text-center text-slate-500 hidden md:block">
        Yvan Wildis Ngone Tchinda
      </h1>
      <nav className=" text-slate-500 gap-8 mt-8 mb-10 flex flex-row md:flex-col md:mb-0  ">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive
              ? "text-slate-800 border-b-2 md:border-b-2 md:border-slate-800 w-fit flex flex-col md:flex-row items-center "
              : "hover:text-slate-800 flex flex-col md:flex-row items-center"
          }
        >
          <div className="flex flex-col text-[12px] md:flex-row md:text-2xl items-center">
            <HomeIcon className="w-5 h-5 md:mr-3" />
            <p>Home</p>
          </div>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-slate-800 border-b-2 border-slate-800 w-fit"
              : "hover:text-slate-800"
          }
        >
          <div className="flex flex-col text-[12px] md:flex-row md:text-2xl items-center">
            <UserIcon className="inline-block w-5 h-5 mr-3" />
            <p>About</p>
          </div>
        </NavLink>
        <NavLink
          to="/competences"
          className={({ isActive }) =>
            isActive
              ? "text-slate-800 border-b-2 border-slate-800 w-fit"
              : "hover:text-slate-800"
          }
        >
          <div className="flex flex-col text-[12px] md:flex-row md:text-2xl items-center">
            <FaCode className="inline-block w-5 h-5 mr-3" /> <p>Project</p>
          </div>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-slate-800 border-b-2 border-slate-800 w-fit"
              : "hover:text-slate-800"
          }
        >
          <div className="flex flex-col text-[12px] md:flex-row md:text-2xl items-center">
            <EnvelopeIcon className="inline-block w-5 h-5 mr-3" />
            <p>Contact</p>
          </div>
        </NavLink>
      </nav>
      <div className="justify-center hidden space-x-4 mb-10 sm:flex md:mb-5">
        <Link
          to="https://github.com/yvankraft"
          className="mt-10 text-center text-slate-400 hover:text-slate-800 text-sm"
        >
          <FaGithub className="inline-block w-12 h-12 mr-2" />
        </Link>
        <Link
          to="https://www.linkedin.com/in/yvan-ngone-271b2b30b/"
          className="mt-10 text-center text-slate-400 hover:text-slate-800 text-sm"
        >
          <FaLinkedin className="inline-block w-12 h-12 mr-2" />
        </Link>
        <Link
          to="https://x.com/wildisyvan53?s=11"
          className="mt-10 text-center text-slate-400 hover:text-slate-800 text-sm"
        >
          <FaTwitter className="inline-block w-12 h-12 mr-2" />
        </Link>
      </div>
      <div className="mt-auto">
        <p className="text-center text-slate-400 hidden md:block text-sm">
          &copy; 2025 Yvan Wildis Ngone Tchinda
        </p>
      </div>
    </motion.div>
  );
};

export default Navbar;
