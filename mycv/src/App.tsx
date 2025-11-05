import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Competences from "./pages/Competences";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center ">
      <div className=" px-4  sm:px-6 bg-slate-100 lg:px-8">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/competences" element={<Competences />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
