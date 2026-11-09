import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-black sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center overflow-hidden">
          <NavLink to="/" className="flex items-center">
            <img
              src="https://thetiny.site/storage/settings/only-logo-6ace061694a80.png"
              alt="thetiny.site"
              style={{ height: "64px", width: "auto" }}
              className="object-contain"
            />
          </NavLink>
        </div>

        <nav className="hidden md:flex items-center space-x-8 text-sm">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `py-1.5 font-medium relative transition-colors ${isActive ? "text-indigo-600 font-semibold" : "text-gray-600 hover:text-gray-900"}`
            }
          >
            {({ isActive }) => (
              <>
                Home
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-indigo-600 rounded-full"></span>
                )}
              </>
            )}
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `py-1.5 font-medium relative transition-colors ${isActive ? "text-indigo-600 font-semibold" : "text-gray-600 hover:text-gray-900"}`
            }
          >
            {({ isActive }) => (
              <>
                About
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-indigo-600 rounded-full"></span>
                )}
              </>
            )}
          </NavLink>

          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `py-1.5 font-medium relative transition-colors ${isActive ? "text-indigo-600 font-semibold" : "text-gray-600 hover:text-gray-900"}`
            }
          >
            {({ isActive }) => (
              <>
                Blog
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-indigo-600 rounded-full"></span>
                )}
              </>
            )}
          </NavLink>

          <NavLink
            to="/terms"
            className={({ isActive }) =>
              `py-1.5 font-medium relative transition-colors ${isActive ? "text-indigo-600 font-semibold" : "text-gray-600 hover:text-gray-900"}`
            }
          >
            {({ isActive }) => (
              <>
                Terms
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-indigo-600 rounded-full"></span>
                )}
              </>
            )}
          </NavLink>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <a
            href="#login"
            className="px-4 py-2 text-sm font-semibold text-gray-800 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-all"
          >
            Log In
          </a>
          <a
            href="#get-started"
            className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-all shadow-sm"
          >
            Get Started Free
          </a>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 rounded-xl text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none transition-transform duration-200 active:scale-95"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-black px-4 pt-3 pb-6 space-y-2 shadow-xl transition-all duration-300 ease-in-out transform ${
          isOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-3 invisible pointer-events-none"
        }`}
      >
        <NavLink
          to="/"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            isActive
              ? "text-indigo-600 font-semibold block py-2.5 px-4 rounded-lg bg-indigo-50 transition-all"
              : "text-gray-700 hover:text-gray-900 font-medium block py-2.5 px-4 rounded-lg hover:bg-gray-50 transition-all"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            isActive
              ? "text-indigo-600 font-semibold block py-2.5 px-4 rounded-lg bg-indigo-50 transition-all"
              : "text-gray-700 hover:text-gray-900 font-medium block py-2.5 px-4 rounded-lg hover:bg-gray-50 transition-all"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/blog"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            isActive
              ? "text-indigo-600 font-semibold block py-2.5 px-4 rounded-lg bg-indigo-550 transition-all"
              : "text-gray-700 hover:text-gray-900 font-medium block py-2.5 px-4 rounded-lg hover:bg-gray-50 transition-all"
          }
        >
          Blog
        </NavLink>
        <NavLink
          to="/terms"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            isActive
              ? "text-indigo-600 font-semibold block py-2.5 px-4 rounded-lg bg-indigo-50 transition-all"
              : "text-gray-700 hover:text-gray-900 font-medium block py-2.5 px-4 rounded-lg hover:bg-gray-50 transition-all"
          }
        >
          Terms
        </NavLink>

        <div className="pt-4 mt-2 flex flex-col space-y-3 border-t border-gray-100">
          <a
            href="#login"
            className="w-full text-center py-2.5 text-sm font-semibold text-gray-800 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-all"
          >
            Log In
          </a>
          <a
            href="#get-started"
            className="w-full text-center py-2.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-all shadow-sm"
          >
            Get Started Free
          </a>
        </div>
      </div>
    </header>
  );
}
