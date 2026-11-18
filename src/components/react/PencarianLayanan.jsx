import { useState } from 'react';
import { daftarLayanan } from '../../data/layanan';

export default function PencarianLayanan() {
  const [kataKunci, setKataKunci] = useState("");

  const layananTersaring = daftarLayanan.filter((layanan) =>
    layanan.nama.toLowerCase().includes(kataKunci.toLowerCase())
  );

  return (
    <div className="mb-10 max-w-xl mx-auto">
      <input
        type="text"
        placeholder="Cari layanan (misal: Web, Mobile)..."
        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-colors"
        value={kataKunci}
        onChange={(e) => setKataKunci(e.target.value)}
      />
      
      <div className="mt-4 space-y-2">
        {kataKunci && layananTersaring.length > 0 ? (
          layananTersaring.map((layanan) => (
            <div key={layanan.id} className="p-3 bg-blue-50 dark:bg-gray-700 rounded-md border border-blue-100 dark:border-gray-600">
              <strong className="text-blue-700 dark:text-blue-400">{layanan.nama}</strong>
            </div>
          ))
        ) : kataKunci && layananTersaring.length === 0 ? (
          <p className="text-red-500 text-center">Layanan tidak ditemukan.</p>
        ) : null}
      </div>
    </div>
  );
}