import React, { useState, useEffect } from "react";

const ProgressBar = ({
  skill,
  percentage,
  colorClass = "bg-blue-600", // Classe Tailwind directement
  animationDelay = 0,
  bgClass = "bg-gray-50", // Arrière-plan personnalisable
  textClass = "text-gray-700", // Couleur du texte
  className = "", // Classes supplémentaires pour la barre
}) => {
  const [animatedWidth, setAnimatedWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedWidth(percentage);
    }, animationDelay);

    return () => clearTimeout(timer);
  }, [percentage, animationDelay]);

  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className={`text-sm font-medium ${textClass}`}>{skill}</span>
        <span className="text-sm text-gray-500">{animatedWidth}%</span>
      </div>

      <div className={`w-full rounded-full h-3 ${bgClass}`}>
        <div
          className={`h-3 rounded-full transition-all duration-2000 ease-out ${colorClass} ${className}`}
          style={{ width: `${animatedWidth}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
