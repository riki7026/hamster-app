"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import StatusBar from "./StatusBar";
import { Hamster } from "@/types/hamster";

export default function HamsterCard({ hamster }: { hamster: Hamster }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-3xl p-5 shadow-xl"
    >
      <div className="flex flex-col items-center">
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <Image
            src={hamster.image}
            alt={hamster.name}
            width={140}
            height={140}
          />
        </motion.div>

        <h2 className="text-2xl font-bold mt-3">{hamster.name}</h2>

        <p className="text-gray-500 text-sm">
          {hamster.breed} ・ {hamster.personality}
        </p>
      </div>

      <div className="mt-5">
        <StatusBar label="おなか" value={hamster.hunger} />
        <StatusBar label="元気" value={hamster.energy} />
        <StatusBar label="きげん" value={hamster.happiness} />
        <StatusBar label="清潔" value={hamster.cleanliness} />
        <StatusBar label="なかよし" value={hamster.friendship} />
      </div>
    </motion.div>
  );
}
