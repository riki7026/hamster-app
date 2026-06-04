"use client";

import { useHamsterStore } from "@/store/hamsterStore";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import HamsterCharacter from "../HamsterCharacter";

export default function ParkScene() {
  const { hamsters, addSeeds, feedHamster, petHamster } = useHamsterStore();
  const [selectedHamster, setSelectedHamster] = useState<number | null>(null);
  const [message, setMessage] = useState<{ id: number; text: string } | null>(null);

  const handleHamsterClick = (id: number, name: string) => {
    setSelectedHamster(id === selectedHamster ? null : id);
    const phrases = ["たのしいね！", "あそぼう！", "おなかすいた〜", "なでてなでて✨", "遊園地だいすき！"];
    setMessage({ id, text: phrases[Math.floor(Math.random() * phrases.length)] });
    setTimeout(() => setMessage(null), 2000);
  };

  return (
    <div className="relative w-full h-[600px] bg-sky-50 rounded-[3rem] border-8 border-white shadow-2xl overflow-hidden cursor-default">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-100 to-green-50 opacity-50" />
      
      {/* Ferris Wheel */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute -top-10 -right-10 text-[180px] opacity-20 select-none"
      >
        🎡
      </motion.div>

      {/* Clouds */}
      <motion.div 
        animate={{ x: [-20, 20, -20] }} 
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 text-6xl opacity-30"
      >
        ☁️
      </motion.div>
      <motion.div 
        animate={{ x: [20, -20, 20] }} 
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 right-40 text-5xl opacity-20"
      >
        ☁️
      </motion.div>

      {/* Park Assets */}
      <div className="absolute bottom-10 left-10 text-8xl opacity-40">🏰</div>
      <div className="absolute bottom-10 right-10 text-7xl opacity-40">🍦</div>
      <div className="absolute bottom-40 left-1/2 -translate-x-1/2 text-9xl opacity-10">🎪</div>

      {/* Hamsters Stage */}
      <div className="absolute inset-0 flex items-end justify-around pb-20 px-10">
        {hamsters.map((hamster, index) => (
          <div key={hamster.id} className="relative group">
            <AnimatePresence>
              {message?.id === hamster.id && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.5, y: -20 }}
                  className="absolute -top-16 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-2xl shadow-lg border-2 border-pink-100 text-sm font-bold text-gray-600 whitespace-nowrap z-30"
                >
                  {message.text}
                  <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-white" />
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div
              animate={{
                x: [0, index === 0 ? 30 : -30, 0],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5 + index,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <HamsterCharacter 
                type={hamster.id === 1 ? "punk" : "potato"}
                mood={selectedHamster === hamster.id ? "happy" : "idle"}
                onClick={() => handleHamsterClick(hamster.id, hamster.name)}
              />
              <div className="mt-2 text-center">
                <span className="bg-white/80 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-black text-gray-500 shadow-sm border border-white">
                  {hamster.name}
                </span>
              </div>
            </motion.div>

            {/* Interaction Menu */}
            <AnimatePresence>
              {selectedHamster === hamster.id && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute -top-32 -left-10 flex flex-col gap-2 z-40"
                >
                  <button 
                    onClick={(e) => { e.stopPropagation(); feedHamster(hamster.id); }}
                    className="bg-yellow-300 w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-2 border-white text-xl hover:scale-110 active:scale-90 transition-transform"
                  >
                    🍎
                  </button>
                  <button 
                    onClick={(e) => { e.stopPropagation(); petHamster(hamster.id); }}
                    className="bg-pink-300 w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-2 border-white text-xl hover:scale-110 active:scale-90 transition-transform"
                  >
                    ✋
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Floating HUD */}
      <div className="absolute top-6 left-6 flex items-center gap-3 z-50">
        <div className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-white flex items-center gap-2">
          <span className="text-xl">🌻</span>
          <span className="font-black text-yellow-600 tabular-nums">{useHamsterStore.getState().seeds}</span>
        </div>
      </div>
      
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-[10px] font-bold tracking-widest uppercase">
        Amusement Park Edition
      </div>
    </div>
  );
}
