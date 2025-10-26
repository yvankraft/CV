import React from "react";
import Navbar from "../components/Navbar.jsx";
import ProgressBar from "../components/ProgressBar.jsx";
import { motion } from "framer-motion";
import { FaBasketballBall, FaCode, FaGamepad } from "react-icons/fa";

const About = () => {
  return (
    <div className="max-w-[1800px] mx-auto grid grid-cols-7 ">
      <div className=" relative md:col-span-2  flex justify-center items-center ">
        <Navbar />
      </div>
      <div className="col-span-5 w-full h-[100vh] flex flex-col gap-2 justify-center text-center items-center md:h-[95vh] p-4">
        <div className="grid grid-cols-6 h-[100%] w-full gap-2 ">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-slate-100 p-6 rounded-xl shadow-xl col-span-4 border border-slate-200"
          >
            <h1>Skills</h1>
            <div className="grid grid-cols-4">
              <div className="col-span-2 mb-4 p-4">
                <h1>Frontend </h1>
                <ProgressBar
                  skill="HTML/CSS"
                  percentage={90}
                  colorClass="bg-slate-400"
                  bgClass="bg-slate-200"
                />

                <ProgressBar
                  skill="JavaScript/JSX/TSX"
                  percentage={70}
                  colorClass="bg-slate-400"
                  bgClass="bg-slate-200"
                />
                <ProgressBar
                  skill="Tailwind CSS"
                  percentage={60}
                  colorClass="bg-slate-400"
                  bgClass="bg-slate-200"
                />
                <ProgressBar
                  skill="React"
                  percentage={75}
                  colorClass="bg-slate-400"
                  bgClass="bg-slate-200"
                />
                <ProgressBar
                  skill="React Native"
                  percentage={45}
                  colorClass="bg-slate-400"
                  bgClass="bg-slate-200"
                />
              </div>
              <div className="ml-2 col-span-2 p-4">
                <h1>Backend </h1>
                <ProgressBar
                  skill="Node.js"
                  percentage={70}
                  colorClass="bg-slate-400"
                  bgClass="bg-slate-200"
                />
                <ProgressBar
                  skill="Express"
                  percentage={60}
                  colorClass="bg-slate-400"
                  bgClass="bg-slate-200"
                />
                <ProgressBar
                  skill="MongoDB"
                  percentage={90}
                  colorClass="bg-slate-400"
                  bgClass="bg-slate-200"
                />
              </div>
            </div>
            <div>
              <h1>Tools</h1>
              <p className="hover:scale-110 transition-all duration-300">
                Git & GitHub
              </p>
              <p className="hover:scale-110 transition-all duration-300">
                Visual Studio Code
              </p>
              <p className="hover:scale-110 transition-all duration-300">
                Postman
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className=" p-6 rounded-xl shadow-xl col-span-2 bg-slate-200"
          >
            <h2>objective</h2>
            <p>
              I would like to become a DevOps Engineer. To reach this goal, I am
              focusing on improving my technical and operational skills. I am
              currently learning C# to create cross-platform applications using
              .NET, while also gaining experience with DevOps tools and
              practices such as automation, CI/CD pipelines, and cloud
              deployment. This project helps me build a solid foundation for
              integrating development and operations efficiently.
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.8, delay: 0.3, ease: "easeOut" }}
          className="bg-slate-100 p-6 rounded-2xl shadow-2xl h-[100%] flex flex-col"
        >
          <div className="h-[100%] w-[100%]">
            <h1>About me</h1>
            <p>
              About Me My name is Yvan Wildis Ngone Tchinda, and I am currently
              studying at the University of Applied Sciences of Südwestfalen.
              I’m a Junior Full-Stack Developer passionate about building
              dynamic, responsive, and user-focused web applications. My skill
              set includes HTML, CSS, JavaScript, and React for front-end
              development, as well as Node.js and MongoDB for the back end. I
              started my journey in web development a few months ago, and since
              then, I’ve been continuously learning, exploring new technologies,
              and refining my skills. I enjoy working on projects that challenge
              me and help me grow as a developer.
            </p>
          </div>
          <div className="h-[100%] flex gap-4   ">
            <div className="h-[100%] w-[100%] bg-slate-200 mb-4 p-6 rounded-2xl">
              <h1 className="font-bold">Language</h1>

              <ProgressBar
                skill="French"
                percentage={100}
                colorClass="bg-slate-400"
                bgClass="bg-slate-200"
              />
              <ProgressBar
                skill="English"
                percentage={45}
                colorClass="bg-slate-400"
                bgClass="bg-slate-200"
              />
              <ProgressBar
                skill="German"
                percentage={70}
                colorClass="bg-slate-400"
                bgClass="bg-slate-200"
              />
            </div>
            <div className="h-[100%] w-[100%] bg-slate-400  p-6 rounded-2xl flex flex-col justify-between text-white">
              <h1 className="font-bold">Hobbies</h1>
              <div className="flex justify-center items-center gap-3">
                <FaBasketballBall className="text-xl" />
                <p>Basketball</p>
              </div>
              <div className="flex justify-center items-center gap-3">
                <FaCode className="text-xl" />
                <p>Coding</p>
              </div>
              <div className="flex justify-center items-center gap-3">
                <FaGamepad className="text-xl" />
                <p>Video games</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
