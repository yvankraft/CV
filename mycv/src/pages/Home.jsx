import React from "react";
import Navbar from "../components/Navbar.jsx";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="ml-110 p-4 flex flex-col items-center justify-center h-[95vh]">
        <h1 className="text-4xl font-bold text-slate-500">
          Junior FullStack Developer
        </h1>
        <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300">
          Download CV
        </button>
      </div>
    </div>
  );
};

export default Home;
