"use client";

import { useHamsterStore } from "@/store/hamsterStore";
import HamsterCard from "@/components/HamsterCard";
import ActionButtons from "@/components/ActionButtons";
import BottomNav from "@/components/BottomNav";
import ShopScene from "@/components/scenes/ShopScene";
import ParkScene from "@/components/scenes/ParkScene";
import Inventory from "@/components/Inventory";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const { hamsters, currentLocation } = useHamsterStore();

  const renderScene = () => {
    switch (currentLocation) {
      case "Shop":
        return <ShopScene />;
      case "Park":
        return <ParkScene />;
      case "Home":
      default:
        return (
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
            <Inventory />
          </div>
        );
    }
  };

  return (
    <main className="pb-32 pt-12 px-6 max-w-lg mx-auto min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-black text-pink-500 tracking-tight drop-shadow-sm flex items-center justify-center gap-2">
          <span>🐹</span>
          {currentLocation === "Home" && "ハムスターのおうち"}
          {currentLocation === "Shop" && "ハムショップ"}
          {currentLocation === "Park" && "はむはむ遊園地"}
        </h1>
        <p className="text-gray-400 font-medium mt-2 italic">
          {currentLocation === "Home" && "毎日をふわふわに。"}
          {currentLocation === "Shop" && "ひまわりの種でお買い物！"}
          {currentLocation === "Park" && "みんなでおでかけ！"}
        </p>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentLocation}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {renderScene()}
        </motion.div>
      </AnimatePresence>

      <BottomNav />
    </main>
  );
}
