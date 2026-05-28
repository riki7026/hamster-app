export default function StatusBar({
  label,
  value
}: {
  label: string;
  value: number;
}) {
  const getIcon = (label: string) => {
    switch (label) {
      case "おなか": return "🍎";
      case "元気": return "⚡";
      case "きげん": return "✨";
      case "清潔": return "🧼";
      case "なかよし": return "💖";
      default: return "🐾";
    }
  };

  const getBarColor = (label: string) => {
    switch (label) {
      case "おなか": return "bg-orange-300";
      case "元気": return "bg-yellow-300";
      case "きげん": return "bg-pink-300";
      case "清潔": return "bg-cyan-300";
      case "なかよし": return "bg-red-300";
      default: return "bg-pink-300";
    }
  };

  return (
    <div className="mb-3">
      <div className="flex justify-between text-sm mb-1 px-1">
        <span className="flex items-center gap-1 font-bold text-gray-600">
          <span>{getIcon(label)}</span>
          {label}
        </span>
        <span className="font-bold text-gray-500">{value}%</span>
      </div>

      <div className="w-full bg-white/60 backdrop-blur-sm rounded-full h-4 overflow-hidden border border-pink-100 shadow-inner">
        <div
          className={`${getBarColor(label)} h-full rounded-full transition-all duration-500 ease-out`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
