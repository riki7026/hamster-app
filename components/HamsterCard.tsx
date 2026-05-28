"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import StatusBar from "./StatusBar";
import { Hamster } from "@/types/hamster";

export default function HamsterCard({ hamster }: { hamster: Hamster }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white/80 backdrop-blur-md rounded-[2.5rem] p-6 shadow-2xl shadow-pink-100/50 border border-white/20"
    >
      <div className="flex flex-col items-center">
        <motion.div
          animate={{ 
            y: [0, -8, 0],
            rotate: [0, 2, 0, -2, 0]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 4,
            ease: "easeInOut"
          }}
          className="relative"
        >
          <div className="absolute inset-0 bg-pink-100 rounded-full blur-2xl opacity-40 scale-150" />
          <Image
            src={hamster.image}
            alt={hamster.name}
            width={160}
            height={160}
            className="relative z-10 drop-shadow-lg"
          />
        </motion.div>

        <h2 className="text-3xl font-bold mt-4 text-gray-700">{hamster.name}</h2>

        <p className="bg-pink-50 text-pink-400 px-4 py-1 rounded-full text-sm font-medium mt-2">
          {hamster.breed} ・ {hamster.personality}
        </p>
      </div>

      <div className="mt-8 bg-white/40 p-4 rounded-3xl border border-pink-50">
        <StatusBar label="おなか" value={hamster.hunger} />
        <StatusBar label="元気" value={hamster.energy} />
        <StatusBar label="きげん" value={hamster.happiness} />
        <StatusBar label="清潔" value={hamster.cleanliness} />
        <StatusBar label="なかよし" value={hamster.friendship} />
      </div>
    </motion.div>
  );
}
