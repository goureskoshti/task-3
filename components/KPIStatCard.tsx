// components/KPIStatCard.tsx
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

interface KPIStatCardProps {
  title: string;
  value: string;
  growth: string;
  growthPositive?: boolean;
}

export default function KPIStatCard({ title, value, growth, growthPositive = true }: KPIStatCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 border">
      <div className="text-xs text-gray-500 font-medium mb-1">{title}</div>
      <div className="flex items-end justify-between">
        <p className="text-lg font-semibold text-gray-900">{value}</p>
        <div className={`flex items-center text-sm font-medium ${growthPositive ? 'text-green-600' : 'text-red-500'}`}>
          {growthPositive ? <ArrowUpRight className="w-4 h-4 mr-1" /> : <ArrowDownRight className="w-4 h-4 mr-1" />}
          {growth}
        </div>
      </div>
    </div>
  );
}
