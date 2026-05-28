import {
  Home,
  ShoppingBag,
  Gamepad2,
  Map,
  Settings
} from "lucide-react";

export default function BottomNav() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-white/90 backdrop-blur-lg border border-pink-100 p-4 rounded-[2.5rem] flex justify-around items-center shadow-xl shadow-pink-200/40 z-50">
      <Home className="text-pink-400 w-6 h-6" />
      <Map className="text-pink-200 w-6 h-6" />
      <ShoppingBag className="text-pink-200 w-6 h-6" />
      <Gamepad2 className="text-pink-200 w-6 h-6" />
      <Settings className="text-pink-200 w-6 h-6" />
    </div>
  );
}
