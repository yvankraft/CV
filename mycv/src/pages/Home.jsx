import React from "react";
import Navbar from "../components/Navbar.jsx";
import { motion } from "framer-motion";
import cv from "../assets/Ohne Titel.pdf";

const Home = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = cv; // Chemin vers le fichier importé
    link.download = "Ohne Titel.pdf"; // Nom du fichier téléchargé
    document.body.appendChild(link); // Ajout temporaire au DOM
    link.click(); // Simule un clic
    document.body.removeChild(link); // Supprime le lien après le clic
  };
  return (
    <div className="max-w-[1800px] mx-auto grid grid-cols-6 ">
      <div className=" relative md:col-span-2  flex justify-center items-center ">
        <Navbar />
      </div>
      <div className=" md:p-20 md:flex md:flex-col md:items-center md:justify-center md:h-[95vh] md:text-center sm:space-y-6 p-0 col-span-4  w-full h-auto flex flex-col justify-center text-center items-center sm:grid-cols-4 ">
        {/* Animation depuis la gauche */}
        <motion.h1
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-slate-500"
        >
          YVAN WILDIS NGONE TCHINDA
        </motion.h1>
        {/* Animation depuis la droite */}
        <motion.p
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Junior Full Stack Developer
        </motion.p>

        {/* Animation depuis le bas */}
        <motion.button
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.8, delay: 0.3, ease: "easeOut" }}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300 shadow-xl"
          onClick={handleDownload}
        >
          Download CV
        </motion.button>
      </div>
    </div>
  );
};

export default Home;
