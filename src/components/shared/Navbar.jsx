const Navbar = () => {
  return (
    <header className="w-full bg-white border-b border-black/15 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* ১. লোগো (আপনার ইমেজ থাকলে এখানে <img /> ট্যাগ ব্যবহার করতে পারেন) */}
        <div className="flex items-center">
          <a
            href="/"
            className="text-xl font-black tracking-widest text-black uppercase"
          >
            THEVARS.SITE
            {/* যদি ইমেজ থাকে তবে নিচের মতো দিতে পারেন: */}
            {/* <img src="/images/logo.png" alt="Logo" className="h-8 w-auto" /> */}
          </a>
        </div>

        {/* ২. নেভিগেশন লিংকসমূহ (মাঝখানে) */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-700">
          <a
            href="#"
            className="text-violet-600 font-semibold transition-colors"
          >
            Home
          </a>
          <a href="#" className="hover:text-violet-600 transition-colors">
            About
          </a>
          <a href="#" className="hover:text-violet-600 transition-colors">
            Blog
          </a>
          <a href="#" className="hover:text-violet-600 transition-colors">
            Terms
          </a>
        </nav>

        {/* ৩. ডান পাশের বাটনগুলো (Log In & Get Started Free) */}
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

export default Navbar;
