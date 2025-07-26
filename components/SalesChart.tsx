// components/SalesChart.tsx
'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', sales: 2400 },
  { name: 'Tue', sales: 1398 },
  { name: 'Wed', sales: 9800 },
  { name: 'Thu', sales: 3908 },
  { name: 'Fri', sales: 4800 },
  { name: 'Sat', sales: 3800 },
  { name: 'Sun', sales: 4300 },
];

export default function SalesChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid stroke="#f0f0f0" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="sales" stroke="#6366f1" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
}
