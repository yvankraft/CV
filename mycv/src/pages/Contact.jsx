import React from "react";
import Navbar from "../components/Navbar.jsx";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import { useState } from "react";
import { SiX } from "react-icons/si";

const Contact = () => {
  const [copiedStates, setCopiedStates] = useState({
    github: false,
    linkedin: false,
    twitter: false,
    email: false,
  });

  const copyToClipboard = (text, platform) => {
    navigator.clipboard.writeText(text);
    setCopiedStates((prev) => ({ ...prev, [platform]: true }));
    setTimeout(() => {
      setCopiedStates((prev) => ({ ...prev, [platform]: false }));
    }, 2000);
  };
  return (
    <div className="max-w-[1800px] mx-auto grid grid-cols-6 ">
      <div className=" relative md:col-span-2  flex justify-center items-center ">
        <Navbar />
      </div>
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className=" lg:p-40 md:items-center md:justify-center  md:text-center  col-span-4   w-auto h-[95vh] md:grid md:col-span-4 flex flex-col justify-center text-center items-center "
      >
        <div className="bg-slate-200 rounded-xl shadow-xl h-auto w-full max-w-2xl md:text-2xl p-4 sm:p-20 ">
          <p>
            Thank you for taking the time to reach this point. If you have any
            questions, please feel free to contact me. I would be very happy to
            receive your feedback through the links below.
          </p>
          <div className="mt-8 sm:space-y-6">
            <div className="flex justify-evenly items-center sm:gap-8 flex-wrap">
              {/* GitHub */}
              <div
                onClick={() =>
                  copyToClipboard("https://github.com/yvankraft", "github")
                }
                className="text-center text-gray-700 hover:text-black text-sm hover:underline cursor-pointer relative p-4"
              >
                <FaGithub className="inline-block w-8 h-8 mr-2" />
                <span className="text-gray-700 hover:text-blue-600 text-sm">
                  GitHub
                </span>

                {/* Pop-up GitHub */}
                {copiedStates.github && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full mb-2 bg-white text-black px-4 py-2 rounded-lg shadow-lg z-20"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg">✓</span>
                      <span className="font-medium"> Copied!</span>
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
                  </motion.div>
                )}
              </div>

              {/* LinkedIn */}
              <div
                onClick={() =>
                  copyToClipboard(
                    "https://www.linkedin.com/in/yvan-ngone-271b2b30b/",
                    "linkedin"
                  )
                }
                className=" text-center text-gray-700 hover:text-black text-sm hover:underline cursor-pointer relative"
              >
                <FaLinkedin className="inline-block w-8 h-8 mr-2" />
                <span className="text-gray-700 hover:text-blue-600 text-sm">
                  LinkedIn
                </span>

                {/* Pop-up LinkedIn */}
                {copiedStates.linkedin && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full mb-2 bg-white text-black px-4 py-2 rounded-lg shadow-lg z-20"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg text-black">✓</span>
                      <span className="font-medium text-black"> Copied!</span>
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
                  </motion.div>
                )}
              </div>

              {/* X */}
              <div
                onClick={() =>
                  copyToClipboard("https://x.com/wildisyvan53?s=11", "x")
                }
                className=" text-center text-gray-700 hover:text-black text-sm hover:underline cursor-pointer relative"
              >
                <SiX className="inline-block w-8 h-8 mr-2" />
                <span className="text-gray-700 hover:text-blue-600 text-sm">
                  https://x.com/wildisyvan53?s=11
                </span>

                {/* Pop-up X */}
                {copiedStates.x && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full mb-2 bg-white text-white px-4 py-2 rounded-lg shadow-lg z-20"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg text-black">✓</span>
                      <span className="font-medium text-black">Copied!</span>
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Section Email */}
            <div className=" text-center text-gray-700 hover:text-black text-sm relative">
              <SiGmail className="inline-block w-8 h-8 mr-2" />
              <span
                onClick={() =>
                  copyToClipboard("yvanngone53@gmail.com", "email")
                }
                className="text-gray-700 hover:text-blue-600 text-sm hover:underline cursor-pointer"
              >
                yvanngone53@gmail.com
              </span>

              {/* Pop-up Email */}
              {copiedStates.email && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full mb-2 bg-white text-white px-4 py-2 rounded-lg shadow-lg z-20"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-lg text-black">✓</span>
                    <span className="font-medium text-black">Copied!</span>
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
