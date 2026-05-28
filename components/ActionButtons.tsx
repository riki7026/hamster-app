"use client";

import { useHamsterStore } from "@/store/hamsterStore";
import { motion } from "framer-motion";

export default function ActionButtons({ id }: { id: number }) {
  const { feedHamster, petHamster, cleanHamster } = useHamsterStore();

  const buttonClass = "flex flex-col items-center justify-center p-4 rounded-[2rem] font-bold text-gray-700 shadow-lg shadow-black/5 border-b-4 transition-transform active:translate-y-1";

  return (
    <div className="grid grid-cols-3 gap-4 mt-6">
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => feedHamster(id)}
        className={`${buttonClass} bg-yellow-200 border-yellow-400 hover:bg-yellow-100`}
      >
        <span className="text-2xl mb-1">🍎</span>
        <span className="text-xs">ごはん</span>
      </motion.button>

      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => petHamster(id)}
        className={`${buttonClass} bg-pink-200 border-pink-400 hover:bg-pink-100`}
      >
        <span className="text-2xl mb-1">✋</span>
        <span className="text-xs">なでる</span>
      </motion.button>

      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => cleanHamster(id)}
        className={`${buttonClass} bg-cyan-200 border-cyan-400 hover:bg-cyan-100`}
      >
        <span className="text-2xl mb-1">🧼</span>
        <span className="text-xs">そうじ</span>
      </motion.button>
    </div>
  );
}
