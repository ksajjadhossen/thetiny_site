export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider text-violet-600 uppercase bg-violet-50 rounded-full border border-violet-100">
        ✨ Welcome to The Tiny Site
      </span>
      <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 tracking-tight">
        Build and share your content <br />
        <span className="text-violet-600">faster than ever.</span>
      </h1>
      <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
        A lightweight and responsive platform designed to streamline your daily
        workflow with ultimate simplicity.
      </p>
      <div className="mt-10 flex justify-center gap-4">
        <button className="px-8 py-3.5 text-sm font-semibold text-white bg-violet-600 rounded-xl hover:bg-violet-700 shadow-lg shadow-violet-200 transition-all">
          Get Started Free
        </button>
        <button className="px-8 py-3.5 text-sm font-semibold text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200 transition-all">
          Learn More
        </button>
      </div>
    </div>
  );
}
