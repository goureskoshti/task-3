// components/Sidebar.tsx
import { Home, BarChart2, Package, LogOut } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="w-[220px] bg-white border-r h-screen px-6 py-8 flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-10">Dcluttr</h2>
        <nav className="space-y-4">
          <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-indigo-600">
            <Home className="w-5 h-5" /> Dashboard
          </a>
          <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-indigo-600">
            <BarChart2 className="w-5 h-5" /> Insights
          </a>
          <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-indigo-600">
            <Package className="w-5 h-5" /> Inventory
          </a>
        </nav>
      </div>
      <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-red-500">
        <LogOut className="w-4 h-4" /> Logout
      </button>
    </aside>
  );
}

// components/Header.tsx
import { UserCircle } from 'lucide-react';

export function Header() {
  return (
    <header className="flex items-center justify-between bg-white px-6 py-4 shadow-sm border-b">
      <input
        type="text"
        placeholder="Search SKU, Brand, Store..."
        className="w-full max-w-md px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500"
      />
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
          <span className="font-semibold text-gray-600">GK</span>
        </div>
      </div>
    </header>
  );
}

// components/StatCard.tsx
interface StatCardProps {
  label: string;
  value: string;
  color?: string;
}

export function StatCard({ label, value, color = 'text-indigo-600' }: StatCardProps) {
  return (
    <div className="bg-white border rounded-lg shadow-sm p-6">
      <p className="text-sm text-gray-500 font-medium">{label}</p>
      <p className={`text-2xl font-bold mt-2 ${color}`}>{value}</p>
    </div>
  );
}

// components/SKUInsightTable.tsx
const data = [
  { sku: 'Haldiram Namkeen', brand: 'Haldiram', store: 'Andheri', qty: 45 },
  { sku: 'Nachos', brand: 'Too Yumm', store: 'Worli', qty: 18 },
  { sku: 'Lays Classic', brand: 'PepsiCo', store: 'Bandra', qty: 32 },
];

export function SKUInsightTable() {
  return (
    <div className="bg-white border rounded-lg shadow-sm">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold text-gray-800">Top Selling SKUs</h2>
      </div>
      <table className="min-w-full text-sm text-left">
        <thead className="bg-gray-50">
          <tr className="text-gray-500">
            <th className="px-6 py-3 font-semibold">SKU</th>
            <th className="px-6 py-3 font-semibold">Brand</th>
            <th className="px-6 py-3 font-semibold">Store</th>
            <th className="px-6 py-3 font-semibold">Qty Sold</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-t hover:bg-gray-50">
              <td className="px-6 py-4 text-gray-700">{item.sku}</td>
              <td className="px-6 py-4 text-gray-700">{item.brand}</td>
              <td className="px-6 py-4 text-gray-700">{item.store}</td>
              <td className="px-6 py-4 text-gray-700">{item.qty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
