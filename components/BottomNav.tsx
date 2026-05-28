import {
  Home,
  ShoppingBag,
  Gamepad2,
  Map,
  Settings
} from "lucide-react";

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-3 flex justify-around">
      <Home />
      <Map />
      <ShoppingBag />
      <Gamepad2 />
      <Settings />
    </div>
  );
}
