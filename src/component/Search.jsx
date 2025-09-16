import {
  Box,
  Button,
  ChevronDownIcon,
  Dialog,
  Flex,
  Select,
  TextField,
} from "@radix-ui/themes";
import React from "react";
import { useState } from "react";

export default function Search() {
  const [showFilter, setShowFilter] = useState(false);

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [province, setProvince] = useState("");

  const handleSearch = () => {
    console.log("Filter Values:", {
      minPrice,
      maxPrice,
      province,
    });
  };
  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col justify-center w-full max-w-2xs md:max-w-4xl">
        <TextField.Root
          className=""
          radius="full"
          size="3"
          placeholder="Filter Pencarian…"
        >
          <TextField.Slot pl="30px" pr="15px">
            <div
              className="cursor-pointer"
              onClick={() => setShowFilter(!showFilter)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="#000"
                  stroke-width="1.5"
                  d="M19 3H5c-1.414 0-2.121 0-2.56.412S2 4.488 2 5.815v.69c0 1.037 0 1.556.26 1.986s.733.698 1.682 1.232l2.913 1.64c.636.358.955.537 1.183.735c.474.411.766.895.898 1.49c.064.284.064.618.064 1.285v2.67c0 .909 0 1.364.252 1.718c.252.355.7.53 1.594.88c1.879.734 2.818 1.101 3.486.683S15 19.452 15 17.542v-2.67c0-.666 0-1 .064-1.285a2.68 2.68 0 0 1 .899-1.49c.227-.197.546-.376 1.182-.735l2.913-1.64c.948-.533 1.423-.8 1.682-1.23c.26-.43.26-.95.26-1.988v-.69c0-1.326 0-1.99-.44-2.402C21.122 3 20.415 3 19 3Z"
                />
              </svg>
            </div>
            <div></div>
          </TextField.Slot>
        </TextField.Root>
        {showFilter && (
          <div className="mt-3 p-4 border-[1px] border-solid border-[#e5e7eb] rounded-xl bg-white">
            <div className="flex flex-col gap-3">
              <h2 className="text-center text-lg font-medium">
                Filter Pencarian
              </h2>
              {/* Harga Minimal */}
              <div className="relative w-full">
                <select
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  className="w-full rounded-lg border border-blue-400 bg-gray-50 px-4 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none pr-10"
                >
                  <option value="">Harga Minimal</option>
                  <option value="100000">Rp 100.000</option>
                  <option value="200000">Rp 200.000</option>
                  <option value="300000">Rp 300.000</option>
                </select>
                <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 w-5 h-5" />
              </div>

              {/* Harga Maximal */}
              <div className="relative w-full">
                <select
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="w-full rounded-lg border border-blue-400 bg-gray-50 px-4 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none pr-10"
                >
                  <option value="">Harga Maximal</option>
                  <option value="100000">Rp 100.000</option>
                  <option value="200000">Rp 200.000</option>
                  <option value="300000">Rp 300.000</option>
                </select>
                <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 w-5 h-5" />
              </div>

              {/* Provinsi */}
              <div className="relative w-full">
                <select
                  value={province}
                  onChange={(e) => setProvince(e.target.value)}
                  className="w-full rounded-lg border border-blue-400 bg-gray-50 px-4 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none pr-10"
                >
                  <option value="">Provinsi</option>
                  <option value="Jakarta">Jakarta</option>
                  <option value="Jawa Timur">Jawa Timur</option>
                  <option value="Jawa Barat">Jawa Barat</option>
                  <option value="Yogyakarta">Yogyakarta</option>
                </select>
                <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 w-5 h-5" />
              </div>
              <Button onClick={handleSearch}>Mulai Cari</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
