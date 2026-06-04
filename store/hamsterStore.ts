import { create } from "zustand";
import { Hamster, Location, Item } from "@/types/hamster";

type HamsterStore = {
  hamsters: Hamster[];
  seeds: number;
  inventory: Item[];
  currentLocation: Location;
  
  // Actions
  feedHamster: (id: number) => void;
  petHamster: (id: number) => void;
  cleanHamster: (id: number) => void;
  setLocation: (loc: Location) => void;
  buyItem: (item: Item) => void;
  useItem: (hamsterId: number, itemId: string) => void;
  addSeeds: (amount: number) => void;
};

export const SHOP_ITEMS: Item[] = [
  { id: "premium_seed", name: "特選ひまわりの種", icon: "🌻", price: 10, effect: { hunger: 30, happiness: 10 } },
  { id: "strawberry", name: "あまおう苺", icon: "🍓", price: 25, effect: { happiness: 40, energy: 10 } },
  { id: "gold_nut", name: "黄金のクルミ", icon: "🥜", price: 50, effect: { hunger: 50, happiness: 50, energy: 50 } },
];

export const useHamsterStore = create<HamsterStore>((set) => ({
  hamsters: [
    {
      id: 1,
      name: "パンク",
      breed: "ジャンガリアン",
      personality: "活発",
      hunger: 80,
      energy: 90,
      happiness: 85,
      cleanliness: 70,
      friendship: 75,
      image: "" // Not used anymore
    },
    {
      id: 2,
      name: "ポテト",
      breed: "パールホワイト",
      personality: "のんびり",
      hunger: 75,
      energy: 80,
      happiness: 95,
      cleanliness: 88,
      friendship: 90,
      image: "" // Not used anymore
    }
  ],
  seeds: 100,
  inventory: [],
  currentLocation: "Park", // Default to Park for the new game experience

  feedHamster: (id) =>
    set((state) => ({
      hamsters: state.hamsters.map((hamster) =>
        hamster.id === id
          ? {
              ...hamster,
              hunger: Math.min(100, hamster.hunger + 10),
              happiness: Math.min(100, hamster.happiness + 5)
            }
          : hamster
      )
    })),

  petHamster: (id) =>
    set((state) => ({
      hamsters: state.hamsters.map((hamster) =>
        hamster.id === id
          ? {
              ...hamster,
              friendship: Math.min(100, hamster.friendship + 10),
              happiness: Math.min(100, hamster.happiness + 8)
            }
          : hamster
      )
    })),

  cleanHamster: (id) =>
    set((state) => ({
      hamsters: state.hamsters.map((hamster) =>
        hamster.id === id
          ? {
              ...hamster,
              cleanliness: 100
            }
          : hamster
      )
    })),

  setLocation: (currentLocation) => set({ currentLocation }),

  addSeeds: (amount) => set((state) => ({ seeds: state.seeds + amount })),

  buyItem: (item) => set((state) => {
    if (state.seeds < item.price) return state;
    return {
      seeds: state.seeds - item.price,
      inventory: [...state.inventory, item]
    };
  }),

  useItem: (hamsterId, itemId) => set((state) => {
    const itemIndex = state.inventory.findIndex(i => i.id === itemId);
    if (itemIndex === -1) return state;

    const item = state.inventory[itemIndex];
    const newInventory = [...state.inventory];
    newInventory.splice(itemIndex, 1);

    return {
      inventory: newInventory,
      hamsters: state.hamsters.map(h => h.id === hamsterId ? {
        ...h,
        hunger: Math.min(100, h.hunger + (item.effect.hunger || 0)),
        happiness: Math.min(100, h.happiness + (item.effect.happiness || 0)),
        energy: Math.min(100, h.energy + (item.effect.energy || 0)),
      } : h)
    };
  })
}));
