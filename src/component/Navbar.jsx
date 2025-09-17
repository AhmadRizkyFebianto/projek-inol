import Logo from "../assets/logo.png";
import { React, useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="shadow">
        <div className="flex justify-between items-center px-7 py-2.5">
          <img src={Logo} width="50" height="40" />

          <div className="block md:hidden lg:hidden">
            <div onClick={() => setMenuOpen(true)} aria-label="Open Menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#000"
                  d="M3.75 6.5a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75m0 5.5a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75m0 5.5a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75"
                />
              </svg>
            </div>
          </div>

          <ul className="lg:flex md:flex hidden gap-5 items-center text-gray-700">
            <li>
              <a href="" className="hover:text-gray-900">
                Chatbot
              </a>
            </li>
            <li>
              <a href="" className="hover:text-gray-900">
                Beli Rumah
              </a>
            </li>
            <li>
              <a href="" className="hover:text-gray-900">
                Hitung KPR
              </a>
            </li>
            <li>
              <a href="" className="hover:text-gray-900">
                Masuk
              </a>
            </li>
            <div className="bg-black w-0.5 h-7" />
            <li>
              <a href="" className="hover:text-gray-900">
                Daftar
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-gray-700 opacity-40 md:fixed lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-64 transform bg-white shadow-lg transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <div className="flex justify-end p-4">
          <div onClick={() => setMenuOpen(false)} aria-label="Close Menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 24 24"
            >
              <path
                fill="#000"
                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-col space-y-6 p-6 font-medium text-gray-700">
          <a href="" className="hover:text-gray-900">
            Chatbot
          </a>
          <a href="" className="hover:text-gray-900">
            Beli Rumah
          </a>
          <a href="" className="hover:text-gray-900">
            Hitung KPR
          </a>
          <div className="flex gap-5">
            <a href="" className="hover:text-gray-900">
              Masuk
            </a>
            <div className="bg-black w-0.5 h-7" />
            <a href="" className="hover:text-gray-900">
              Daftar
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
