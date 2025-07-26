// pages/index.tsx

import Head from 'next/head';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { Geist, Geist_Mono } from 'next/font/google';
import StatCard from '@/components/StatCard';
import SalesChart from '@/components/SalesChart';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export default function Home() {
  return (
    <div className={`${geistSans.className} ${geistMono.className} font-sans flex h-screen`}>
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6 overflow-y-auto bg-[#f9fafb] space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <StatCard label="Total Sales" value="₹12,340" color="text-green-500" />
            <StatCard label="Active Stores" value="34" color="text-blue-500" />
            <StatCard label="Inventory Issues" value="7" color="text-red-500" />
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Sales Overview</h2>
            <SalesChart />
          </div>
        </main>
      </div>
    </div>
  );
}
