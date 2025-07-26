import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { Geist, Geist_Mono } from 'next/font/google';


const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export default function Home() {
  return (
    <div className={`${geistSans.className} ${geistMono.className} font-sans flex h-screen`}>
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6 overflow-y-auto bg-[#f9fafb]">
          {/* KPIs, Charts, Tables here */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <div className="bg-white shadow-sm rounded-lg p-4">
              <h3 className="text-gray-600">Total Sales</h3>
              <p className="text-2xl font-bold text-green-500">₹12,340</p>
            </div>
            <div className="bg-white shadow-sm rounded-lg p-4">
              <h3 className="text-gray-600">Active Stores</h3>
              <p className="text-2xl font-bold text-blue-500">34</p>
            </div>
            <div className="bg-white shadow-sm rounded-lg p-4">
              <h3 className="text-gray-600">Inventory Issues</h3>
              <p className="text-2xl font-bold text-red-500">7</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
