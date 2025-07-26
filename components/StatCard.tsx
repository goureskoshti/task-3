// components/StatCard.tsx

interface StatCardProps {
  label: string;
  value: string;
  color?: string;
}

export default function StatCard({ label, value, color = 'text-indigo-600' }: StatCardProps) {
  return (
    <div className="bg-white border rounded-lg shadow-sm p-6">
      <p className="text-sm text-gray-500 font-medium">{label}</p>
      <p className={`text-2xl font-bold mt-2 ${color}`}>{value}</p>
    </div>
  );
}
