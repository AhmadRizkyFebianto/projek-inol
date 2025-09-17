import Sidebar from "../component/Sidebar";
import Navbar from "../component/navbar";
import Footer from "../component/Footer";

export default function KprPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar di atas */}
      <Navbar />

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Konten utama */}
        <main className="flex-1 p-6 bg-white">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="w-full overflow-hidden bg-white rounded-lg shadow-md"
              >
                <div className="flex items-center justify-center h-32 bg-gray-200">
                  <span className="text-gray-400">Image</span>
                </div>
                <div className="p-3">
                  <h3 className="font-semibold">Perumahan Griya</h3>
                  <p className="text-sm text-gray-500">Jakarta Timur</p>
                  <p className="text-xs text-gray-500">
                    LT 97m² | LB 78m² | L1
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="px-2 py-1 font-bold text-black bg-yellow-400 rounded">
                      Rp 2.589.500
                    </span>
                    <button className="text-xs text-gray-500 hover:underline">
                      Transaksi
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Footer di bawah */}
      <Footer />
    </div>
  );
}
