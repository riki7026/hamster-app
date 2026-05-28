"use client";

import { useHamsterStore } from "@/store/hamsterStore";
import { Home, Map, ShoppingBag, Settings } from "lucide-react";
import { Location } from "@/types/hamster";

export default function BottomNav() {
  const { currentLocation, setLocation } = useHamsterStore();

  const navItems: { loc: Location; icon: any; label: string }[] = [
    { loc: "Home", icon: Home, label: "おうち" },
    { loc: "Park", icon: Map, label: "おでかけ" },
    { loc: "Shop", icon: ShoppingBag, label: "ショップ" },
    { loc: "Settings", icon: Settings, label: "設定" },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-white/90 backdrop-blur-lg border border-pink-100 p-2 rounded-[2.5rem] flex justify-around items-center shadow-xl shadow-pink-200/40 z-50">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = currentLocation === item.loc;
        return (
          <button
            key={item.loc}
            onClick={() => setLocation(item.loc)}
            className={`flex flex-col items-center p-2 rounded-2xl transition-all ${
              isActive ? "bg-pink-100 text-pink-500 scale-110" : "text-pink-200 hover:text-pink-300"
            }`}
          >
            <Icon className="w-6 h-6" />
            <span className="text-[10px] font-bold mt-0.5">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}
