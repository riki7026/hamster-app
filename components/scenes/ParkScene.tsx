"use client";

import { useHamsterStore } from "@/store/hamsterStore";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function ParkScene() {
  const { hamsters, addSeeds } = useHamsterStore();
  const [foundSeed, setFoundSeed] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (Math.random() > 0.8) {
        setFoundSeed(true);
        addSeeds(5);
        setTimeout(() => setFoundSeed(false), 3000);
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [addSeeds]);

  return (
    <div className="relative min-h-[500px] bg-green-50 rounded-[3rem] p-8 border-4 border-green-100 overflow-hidden">
      <div className="text-center relative z-10">
        <h2 className="text-3xl font-black text-green-600 mb-2">はむはむ遊園地 🎡</h2>
        <p className="text-green-500 font-bold">みんなで楽しく遊ぼう！</p>
      </div>

      {/* Decorative Park Elements */}
      <div className="absolute bottom-12 left-8 text-6xl opacity-20">🌳</div>
      <div className="absolute top-24 right-12 text-6xl opacity-20">🎡</div>
      <div className="absolute bottom-24 right-8 text-6xl opacity-20">🌸</div>

      <div className="flex flex-wrap justify-around items-center mt-20 gap-8 relative z-10">
        {hamsters.map((hamster, index) => (
          <motion.div
            key={hamster.id}
            animate={{
              x: [0, 20, -20, 0],
              y: [0, -30, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 4 + index,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="flex flex-col items-center"
          >
            <div className="relative">
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-full text-xs font-bold text-green-600 shadow-sm whitespace-nowrap">
                たのしい！✨
              </div>
              <Image
                src={hamster.image}
                alt={hamster.name}
                width={120}
                height={120}
                className="drop-shadow-xl"
              />
            </div>
            <span className="mt-2 font-bold text-green-700 bg-white/50 px-4 py-1 rounded-full backdrop-blur-sm">
              {hamster.name}
            </span>
          </motion.div>
        ))}
      </div>

      {foundSeed && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-yellow-300 px-6 py-3 rounded-full shadow-lg font-black text-yellow-800 flex items-center gap-2 z-20"
        >
          <span>🌻 ひまわりの種をみつけた！ +5</span>
        </motion.div>
      )}
      
      <div className="mt-12 text-center text-sm text-green-400 font-medium">
        ※ ここにいる間は「きげん」が少しずつ回復するよ！
      </div>
    </div>
  );
}
