"use client";

import { useHamsterStore, SHOP_ITEMS } from "@/store/hamsterStore";
import { motion } from "framer-motion";

export default function ShopScene() {
  const { seeds, buyItem } = useHamsterStore();

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-yellow-50 border-2 border-yellow-200 rounded-[2rem] p-6 text-center shadow-lg"
      >
        <h2 className="text-2xl font-bold text-yellow-700 mb-2">ハムショップ 🌻</h2>
        <p className="text-yellow-600 font-medium">ひまわりの種でお買い物しよう！</p>
        <div className="mt-4 inline-flex items-center gap-2 bg-white px-6 py-2 rounded-full shadow-inner border border-yellow-100">
          <span className="text-xl">🌻</span>
          <span className="text-2xl font-black text-yellow-600">{seeds}</span>
        </div>
      </motion.div>

      <div className="grid gap-4">
        {SHOP_ITEMS.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-3xl p-4 flex items-center justify-between shadow-md border border-pink-50"
          >
            <div className="flex items-center gap-4">
              <div className="text-4xl bg-pink-50 w-16 h-16 flex items-center justify-center rounded-2xl shadow-inner">
                {item.icon}
              </div>
              <div>
                <h3 className="font-bold text-gray-700">{item.name}</h3>
                <div className="flex gap-2 mt-1">
                  {item.effect.hunger && <span className="text-xs bg-orange-100 text-orange-500 px-2 py-0.5 rounded-full">おなか+{item.effect.hunger}</span>}
                  {item.effect.happiness && <span className="text-xs bg-pink-100 text-pink-500 px-2 py-0.5 rounded-full">きげん+{item.effect.happiness}</span>}
                </div>
              </div>
            </div>

            <button
              onClick={() => buyItem(item)}
              disabled={seeds < item.price}
              className={`px-6 py-3 rounded-2xl font-bold transition-all ${
                seeds >= item.price
                  ? "bg-yellow-300 text-yellow-800 shadow-md active:scale-95"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
              }`}
            >
              {item.price} 🌻
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
