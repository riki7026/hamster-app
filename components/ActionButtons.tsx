"use client";

import { useHamsterStore } from "@/store/hamsterStore";

export default function ActionButtons({ id }: { id: number }) {
  const { feedHamster, petHamster, cleanHamster } = useHamsterStore();

  return (
    <div className="grid grid-cols-3 gap-2 mt-4">
      <button
        onClick={() => feedHamster(id)}
        className="bg-yellow-300 rounded-2xl p-3 font-bold"
      >
        ごはん
      </button>

      <button
        onClick={() => petHamster(id)}
        className="bg-pink-300 rounded-2xl p-3 font-bold"
      >
        なでる
      </button>

      <button
        onClick={() => cleanHamster(id)}
        className="bg-cyan-300 rounded-2xl p-3 font-bold"
      >
        掃除
      </button>
    </div>
  );
}
