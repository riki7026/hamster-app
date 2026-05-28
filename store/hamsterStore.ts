import { create } from "zustand";
import { Hamster } from "@/types/hamster";

type HamsterStore = {
  hamsters: Hamster[];
  feedHamster: (id: number) => void;
  petHamster: (id: number) => void;
  cleanHamster: (id: number) => void;
};

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
      image: "https://placehold.co/140x140/png?text=Punk"
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
      image: "https://placehold.co/140x140/png?text=Potato"
    }
  ],

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
    }))
}));
