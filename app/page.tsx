"use client";

import { useState } from "react";

export default function Home() {
  const [punkHunger, setPunkHunger] = useState(50);
  const [punkHappy, setPunkHappy] = useState(50);
  const [potatoHunger, setPotatoHunger] = useState(50);
  const [potatoHappy, setPotatoHappy] = useState(50);

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100 p-5">
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-pink-600">
          🐹 ハムスター育成ゲーム
        </h1>

        {/* パンク */}
        <div className="bg-white p-6 rounded-3xl shadow-lg mb-6 border-2 border-pink-200">
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-orange-200 to-brown-300 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
              🐹
            </div>
            <h2 className="text-2xl font-bold text-gray-700 mb-4">パンク</h2>
            <p className="text-sm text-gray-500 mb-4">ジャンガリアンハムスター</p>
            
            <div className="mb-6 space-y-3">
              <div className="flex justify-between items-center bg-pink-50 p-3 rounded-xl">
                <span className="font-medium">おなか</span>
                <span className="text-xl font-bold text-pink-600">{punkHunger}/100</span>
              </div>
              <div className="flex justify-between items-center bg-purple-50 p-3 rounded-xl">
                <span className="font-medium">きげん</span>
                <span className="text-xl font-bold text-purple-600">{punkHappy}/100</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setPunkHunger(Math.min(100, punkHunger + 10))}
                className="flex-1 bg-yellow-300 hover:bg-yellow-400 text-gray-700 font-bold py-3 px-4 rounded-xl transition-colors"
              >
                🍎 ごはん
              </button>
              <button
                onClick={() => setPunkHappy(Math.min(100, punkHappy + 10))}
                className="flex-1 bg-pink-300 hover:bg-pink-400 text-gray-700 font-bold py-3 px-4 rounded-xl transition-colors"
              >
                ✋ なでる
              </button>
            </div>
          </div>
        </div>

        {/* ポテト */}
        <div className="bg-white p-6 rounded-3xl shadow-lg border-2 border-purple-200">
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
              🐹
            </div>
            <h2 className="text-2xl font-bold text-gray-700 mb-4">ポテト</h2>
            <p className="text-sm text-gray-500 mb-4">パールホワイト</p>
            
            <div className="mb-6 space-y-3">
              <div className="flex justify-between items-center bg-pink-50 p-3 rounded-xl">
                <span className="font-medium">おなか</span>
                <span className="text-xl font-bold text-pink-600">{potatoHunger}/100</span>
              </div>
              <div className="flex justify-between items-center bg-purple-50 p-3 rounded-xl">
                <span className="font-medium">きげん</span>
                <span className="text-xl font-bold text-purple-600">{potatoHappy}/100</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setPotatoHunger(Math.min(100, potatoHunger + 10))}
                className="flex-1 bg-yellow-300 hover:bg-yellow-400 text-gray-700 font-bold py-3 px-4 rounded-xl transition-colors"
              >
                🍎 ごはん
              </button>
              <button
                onClick={() => setPotatoHappy(Math.min(100, potatoHappy + 10))}
                className="flex-1 bg-pink-300 hover:bg-pink-400 text-gray-700 font-bold py-3 px-4 rounded-xl transition-colors"
              >
                ✋ なでる
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}