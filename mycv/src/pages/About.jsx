import React from "react";
import Navbar from "../components/Navbar.jsx";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="ml-110 p-4">
        <h1>About me</h1>
        <p>
          My name is Yvan Wildis Ngone Tchinda and I study at a university of
          applied science of Südwestfalen. I'm a Junior FullStack Developer with
          a passion for creating dynamic and responsive web applications. My
          skills include HTML, CSS, JavaScript, and React for front-end
          development, as well as Node.js and MongoDB for back-end development.
        </p>
      </div>
    </div>
  );
};

export default About;
