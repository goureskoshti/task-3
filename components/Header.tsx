export default function Header() {
  return (
    <div className="w-full flex justify-between items-center px-6 py-4 bg-white border-b">
      <input
        type="text"
        placeholder="Search SKU, Brand, Store..."
        className="w-1/3 px-4 py-2 border border-gray-300 rounded-md text-sm"
      />
      <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center font-semibold text-sm text-gray-800">
        GK
      </div>
    </div>
  );
}
