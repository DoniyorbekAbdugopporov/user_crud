import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-blue-500 text-white shadow-lg fixed w-full z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-3xl font-extrabold tracking-wide">
          <NavLink to="/" className="hover:opacity-90">
            User<span className="text-yellow-300">CRUD</span>
          </NavLink>
        </div>

        <div className="hidden md:flex gap-8 items-center">
          <NavLink
            to="/users"
            className={({ isActive }) =>
              `text-lg font-semibold ${
                isActive
                  ? "text-yellow-300 underline underline-offset-4"
                  : "hover:text-yellow-200 transition duration-200"
              }`
            }
          >
            Users
          </NavLink>
          <NavLink
            to="/create"
            className={({ isActive }) =>
              `text-lg font-semibold ${
                isActive
                  ? "text-yellow-300 underline underline-offset-4"
                  : "hover:text-yellow-200 transition duration-200"
              }`
            }
          >
            Create User
          </NavLink>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white"
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </nav>

      <div
        className={`md:hidden bg-blue-500 text-white shadow-lg transform transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="flex flex-col items-center gap-6 py-6">
          <NavLink
            to="/users"
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) =>
              `text-lg font-semibold ${
                isActive
                  ? "text-yellow-300 underline underline-offset-4"
                  : "hover:text-yellow-200 transition duration-200"
              }`
            }
          >
            Users
          </NavLink>
          <NavLink
            to="/create"
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) =>
              `text-lg font-semibold ${
                isActive
                  ? "text-yellow-300 underline underline-offset-4"
                  : "hover:text-yellow-200 transition duration-200"
              }`
            }
          >
            Create User
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
