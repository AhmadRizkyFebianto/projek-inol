import React from "react";

export default function Sidebar() {
  return (
    <aside className="flex flex-col w-1/4 gap-6 p-6 bg-yellow-50">
      <button className="w-full py-3 text-white !bg-green-600 rounded-lg hover:!bg-green-700">
        Hitung KPR
      </button>
      <button className="w-full py-3 text-white !bg-green-600 rounded-lg hover:!bg-green-700">
        Simulasi KPR
      </button>
    </aside>
  );
}
