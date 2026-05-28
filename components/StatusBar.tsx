export default function StatusBar({
  label,
  value
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="mb-2">
      <div className="flex justify-between text-sm mb-1">
        <span>{label}</span>
        <span>{value}%</span>
      </div>

      <div className="w-full bg-pink-100 rounded-full h-3 overflow-hidden">
        <div
          className="bg-pink-400 h-3 rounded-full transition-all"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
