// components/StatCard.tsx
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  isPositive?: boolean;
}

export default function StatCard({ title, value, change, isPositive = true }: StatCardProps) {
  return (
    <div className="bg-white rounded-lg border p-4 shadow-sm">
      <p className="text-xs text-gray-500 mb-2">{title}</p>
      <div className="flex items-center justify-between">
        <p className="text-xl font-semibold">{value}</p>
        <span className={`flex items-center text-sm ${isPositive ? 'text-green-600' : 'text-red-500'}`}>
          {isPositive ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
          {change}
        </span>
      </div>
    </div>
  );
}
