import React from "react";

type StatCardProps = {
  label: string;
  value: string;
  color: string;
};

const StatCard: React.FC<StatCardProps> = ({ label, value, color }) => {
  return (
    <div className="p-4 bg-white rounded-xl shadow-md space-y-2">
      <div className={`text-sm font-medium ${color}`}>{label}</div>
      <div className="text-2xl font-bold text-gray-900">{value}</div>
    </div>
  );
};

export default StatCard;
