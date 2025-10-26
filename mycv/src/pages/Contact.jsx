import React from "react";
import Navbar from "../components/Navbar.jsx";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="max-w-[1800px] mx-auto grid grid-cols-6 ">
      <div className=" relative md:col-span-2  flex justify-center items-center ">
        <Navbar />
      </div>
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className=" md:p-4 md:flex md:flex-col md:items-center md:justify-center md:h-[95vh] md:text-center sm:space-y-6  col-span-4  md:w-[95%] w-full h-[100vh] flex flex-col justify-center text-center items-center "
      >
        <div className="bg-slate-200 rounded-xl shadow-xl h-auto w-full max-w-2xl text-2xl p-11 ">
          <p>
            Thank you for taking the time to reach this point. If you have any
            questions, please feel free to contact me. I would be very happy to
            receive your feedback through the links below.
          </p>
          <div className="justify-center hidden space-x-4 mb-10 sm:flex md:mb-5">
            <Link
              to="https://github.com/yvankraft"
              className="mt-10 text-center text-gray-700 hover:text-black text-sm"
            >
              <FaGithub className="inline-block w-12 h-12 mr-2" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/yvan-ngone-271b2b30b/"
              className="mt-10 text-center text-gray-700 hover:text-black text-sm"
            >
              <FaLinkedin className="inline-block w-12 h-12 mr-2" />
            </Link>
            <Link
              to="https://x.com/wildisyvan53?s=11"
              className="mt-10 text-center text-gray-700 hover:text-black text-sm"
            >
              <FaTwitter className="inline-block w-12 h-12 mr-2" />
            </Link>
            <Link
              to="mailto:yvanngone53@gmail.com"
              className="mt-10 text-center text-gray-700 hover:text-black text-sm"
            >
              <SiGmail className="inline-block w-12 h-12 mr-2 " />
            </Link>
          </div>
          <div>
            <div
              className="mt-4 bg bg-cover bg-center bg-no-repeat h-12 w-auto flex justify-center items-center mx-auto rounded-full p-2"
              style={{ backgroundImage: `url('../assets/email-bg.jpg')` }}
            >
              <span className="text-gray-700 hover:text-black text-sm">
                yvanngone53@gmail.com
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
