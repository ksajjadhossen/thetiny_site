import { Outlet, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinkStyles = ({ isActive }) =>
    isActive
      ? "text-violet-600 font-semibold transition-colors"
      : "text-gray-700 hover:text-violet-600 transition-colors";

  return (
    <header className="w-full bg-white border-b border-black/15 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center">
          <NavLink
            to="/"
            className="text-xl font-black tracking-widest text-black uppercase"
          >
            THETINY.SITE
          </NavLink>
        </div>

        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <NavLink to="/" className={navLinkStyles}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkStyles}>
            About
          </NavLink>
          <NavLink to="/blog" className={navLinkStyles}>
            Blog
          </NavLink>
          <NavLink to="/terms" className={navLinkStyles}>
            Terms
          </NavLink>
        </nav>

        <div className="flex items-center space-x-4">
          <a
            href="#login"
            className="hidden sm:inline-block px-5 py-2.5 text-sm font-medium text-gray-800 border border-gray-300 rounded-xl hover:bg-gray-50 transition-all"
          >
            Log In
          </a>
          <a
            href="#get-started"
            className="px-5 py-2.5 text-sm font-medium text-white bg-violet-600 rounded-xl hover:bg-violet-700 shadow-sm transition-all"
          >
            Get Started Free
          </a>
        </div>
      </div>
    </header>
  );
};

const Footer = () => (
  <footer className="w-full bg-gray-900 text-white py-8 text-center text-sm">
    <p>&copy; 2026 thetiny.site. All rights reserved.</p>
  </footer>
);

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
