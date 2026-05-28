"use client";

import { motion } from "framer-motion";

type HamsterProps = {
  type: "punk" | "potato";
  mood: "happy" | "idle" | "eating" | "sleeping";
  onClick?: () => void;
};

export default function HamsterCharacter({ type, mood, onClick }: HamsterProps) {
  const isPunk = type === "punk";
  const mainColor = isPunk ? "#FBBF24" : "#FFFFFF"; // Orange-yellow for Punk, White for Potato
  const earColor = isPunk ? "#D97706" : "#FEE2E2"; // Darker orange for Punk, Light pink for Potato
  
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="cursor-pointer relative inline-block"
    >
      <svg
        width="120"
        height="120"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-lg"
      >
        {/* Ears */}
        <circle cx="30" cy="30" r="12" fill={earColor} stroke="#5a4a4a" strokeWidth="3" />
        <circle cx="70" cy="30" r="12" fill={earColor} stroke="#5a4a4a" strokeWidth="3" />
        
        {/* Body */}
        <motion.ellipse 
          cx="50" cy="60" rx="40" ry="35" 
          fill={mainColor} stroke="#5a4a4a" strokeWidth="3" 
          animate={mood === "idle" ? { ry: [35, 33, 35] } : {}}
          transition={{ repeat: Infinity, duration: 2 }}
        />
        
        {/* Belly */}
        <ellipse cx="50" cy="72" rx="25" ry="18" fill="white" opacity="0.6" />

        {/* Eyes */}
        <motion.g
          animate={mood === "idle" ? { scaleY: [1, 0.1, 1] } : {}}
          transition={{ repeat: Infinity, duration: 4, times: [0, 0.1, 1] }}
        >
          <circle cx="35" cy="55" r="4" fill="#5a4a4a" />
          <circle cx="65" cy="55" r="4" fill="#5a4a4a" />
        </motion.g>

        {/* Blushed Cheeks */}
        <circle cx="25" cy="65" r="6" fill="#FDA4AF" opacity="0.4" />
        <circle cx="75" cy="65" r="6" fill="#FDA4AF" opacity="0.4" />

        {/* Nose & Mouth */}
        <path d="M48 62 Q50 64 52 62" stroke="#5a4a4a" strokeWidth="2" strokeLinecap="round" />
        
        {/* Hands */}
        <motion.circle 
          cx="30" cy="80" r="5" fill={mainColor} stroke="#5a4a4a" strokeWidth="2" 
          animate={mood === "happy" ? { y: [0, -5, 0] } : {}}
          transition={{ repeat: Infinity, duration: 0.5 }}
        />
        <motion.circle 
          cx="70" cy="80" r="5" fill={mainColor} stroke="#5a4a4a" strokeWidth="2" 
          animate={mood === "happy" ? { y: [0, -5, 0] } : {}}
          transition={{ repeat: Infinity, duration: 0.5, delay: 0.1 }}
        />
      </svg>
      
      {/* Mood indicators */}
      {mood === "happy" && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1.2, y: -20 }}
          className="absolute -top-4 left-1/2 -translate-x-1/2 text-3xl"
        >
          ✨
        </motion.div>
      )}
    </motion.div>
  );
}
