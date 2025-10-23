import React from "react";
import Navbar from "../components/Navbar.jsx";

const Contact = () => {
  return (
    <div className="max-w-[1800px] mx-auto grid grid-cols-6 ">
      <div className=" relative md:col-span-2  flex justify-center items-center ">
        <Navbar />
      </div>
      <div className=" md:p-4 md:flex md:flex-col md:items-center md:justify-center md:h-[95vh] md:text-center sm:space-y-6  col-span-4  md:w-[95%] w-full h-[100vh] flex flex-col justify-center text-center items-center ">
        <p>This is the contact page.</p>
      </div>
    </div>
  );
};

export default Contact;
