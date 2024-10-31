"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoClose } from "react-icons/io5";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={toggleSidebar}
        className={`fixed top-4 left-12 z-50 p-2 text-white bg-orange-500 rounded transform transition-transform duration-300 ${
          isOpen ? "translate-x-56" : "-translate-x-full"
        }`}
      >
        {isOpen ? <IoClose size={24} /> : <AiOutlineMenu size={24} />}
      </button>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-orange-500 text-white transform transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="p-4">
          <h2 className="text-xl font-semibold mb-4 p-2 border-b border-white">
            Menu
          </h2>
          <ul className="space-y-4">
            <li>
              <Link
                href="/"
                className="flex  gap-1 items-center hover:text-gray-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                </svg>
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="flex items-center gap-1 hover:text-gray-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
                Liked
              </Link>
            </li>
            <li>
              <Link
                href="/vacancy/1"
                className="flex items-center gap-1 hover:text-gray-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 6h4" />
                  <path d="M2 10h4" />
                  <path d="M2 14h4" />
                  <path d="M2 18h4" />
                  <rect width="16" height="20" x="4" y="2" rx="2" />
                  <path d="M9.5 8h5" />
                  <path d="M9.5 12H16" />
                  <path d="M9.5 16H14" />
                </svg>
                Vacancy
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-30"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

export default Sidebar;
