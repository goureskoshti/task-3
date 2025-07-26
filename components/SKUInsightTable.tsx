const tableData = [
  { sku: 'Haldiram Namkeen', brand: 'Haldiram', store: 'Andheri', qty: 45 },
  { sku: 'Nachos', brand: 'Too Yumm', store: 'Worli', qty: 18 },
  { sku: 'Lays Classic', brand: 'PepsiCo', store: 'Bandra', qty: 32 },
];

export default function SKUInsightTable() {
  return (
    <div className="bg-white mt-6 p-6 rounded-lg shadow-sm border">
      <h3 className="text-lg font-semibold mb-4">Top Selling SKUs</h3>
      <table className="w-full text-sm">
        <thead className="text-left text-gray-500 border-b">
          <tr>
            <th className="py-2">SKU</th>
            <th>Brand</th>
            <th>Store</th>
            <th>Qty Sold</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, idx) => (
            <tr key={idx} className="border-b hover:bg-gray-50">
              <td className="py-2">{item.sku}</td>
              <td>{item.brand}</td>
              <td>{item.store}</td>
              <td>{item.qty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
