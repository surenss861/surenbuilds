export default function MetricChip({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <span className="text-xs px-2 py-1 rounded-full bg-black/30 border border-white/10 whitespace-nowrap">
      {label}: <span className="font-semibold">{value}</span>
    </span>
  );
}

