"use client";

import { useHamsterStore } from "@/store/hamsterStore";
import { motion, AnimatePresence } from "framer-motion";

export default function Inventory() {
  const { inventory, hamsters, useItem } = useHamsterStore();

  if (inventory.length === 0) return null;

  return (
    <div className="mt-12 bg-white/60 backdrop-blur-sm rounded-[2rem] p-6 border border-white/40 shadow-lg">
      <h3 className="text-xl font-black text-gray-700 mb-4 flex items-center gap-2">
        <span>🎒</span>
        もちもの
      </h3>
      <div className="grid grid-cols-2 gap-4">
        {inventory.map((item, index) => (
          <motion.div
            key={`${item.id}-${index}`}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white p-3 rounded-2xl border border-pink-50 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">{item.icon}</span>
              <span className="text-xs font-bold text-gray-600 leading-tight">{item.name}</span>
            </div>
            <div className="flex gap-1">
              {hamsters.map((hamster) => (
                <button
                  key={hamster.id}
                  onClick={() => useItem(hamster.id, item.id)}
                  className="flex-1 text-[10px] font-bold py-1 px-1 bg-pink-100 text-pink-500 rounded-lg hover:bg-pink-200 transition-colors"
                >
                  {hamster.name.slice(0, 2)}
                </button>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
