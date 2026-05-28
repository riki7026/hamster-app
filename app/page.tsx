"use client";

import { useHamsterStore } from "@/store/hamsterStore";
import HamsterCard from "@/components/HamsterCard";
import ActionButtons from "@/components/ActionButtons";
import BottomNav from "@/components/BottomNav";
import { motion } from "framer-motion";

export default function Home() {
  const { hamsters } = useHamsterStore();

  return (
    <main className="pb-24 pt-12 px-6 max-w-lg mx-auto min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-black text-pink-500 tracking-tight drop-shadow-sm flex items-center justify-center gap-2">
          <span>🐹</span>
          ハムスターのおうち
        </h1>
        <p className="text-gray-400 font-medium mt-2 italic">毎日をふわふわに。</p>
      </motion.div>

      <div className="space-y-12">
        {hamsters.map((hamster) => (
          <motion.div
            key={hamster.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: hamster.id * 0.1 }}
          >
            <HamsterCard hamster={hamster} />
            <ActionButtons id={hamster.id} />
          </motion.div>
        ))}
      </div>

      <BottomNav />
    </main>
  );
}
