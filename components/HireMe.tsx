"use client";
import { useState } from "react";
import "../app/globals.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots } from '@fortawesome/free-regular-svg-icons'

export default function HireMe() {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  if (!isVisible) return null;

  const handleClick = () => {
    window.location.href =
      "mailto:annaboiko1@icloud.com?subject=Job Offer&body=Hello, Anna! I interested in your portfolio!";
    setIsVisible(false);
  };

  return (
    <div className="fixed bottom-28 right-6 z-1000 flex items-center gap-1">
      <button
        onClick={handleClick}
        className="w-25 h-10 gap-1 bg-primary-blue hover:bg-primary-red text-white rounded-full  transition-all duration-300 flex items-center justify-center p-0"
        title="Hire Me" 
        
      >
      <span className="text-gray-800 font-semibold text-sm whitespace-nowrap center ">
        Hire Me
      </span>
        <FontAwesomeIcon icon={faCommentDots}  size="2x" 
        className="w-8 h-8 bg-(--blue) rounded-[45%] text-(--purple) shadow-md hover:bg-(--purple) hover:text-(--blue) transition-colors duration-300" />
      </button>

      <button
        onClick={() => setIsVisible(false)}
        title="Close"
        style={{
        color: 'var(--blue)',
        transform: 'translate(-4px,-10px)'
        
      }}
      >
        ×
      </button>
    </div>
  );
}
