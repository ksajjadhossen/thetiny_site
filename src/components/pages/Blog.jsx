export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Getting Started with Tailwind CSS v4",
      date: "Nov 10, 2026",
      desc: "Explore the latest features and performance improvements in Tailwind CSS.",
    },
    {
      id: 2,
      title: "Why React Router is Essential for SPAs",
      date: "Nov 08, 2026",
      desc: "Learn how to manage layouts and dynamic navigation efficiently.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">
        Latest Articles
      </h1>
      <div className="grid gap-8 md:grid-cols-2">
        {posts.map((post) => (
          <div
            key={post.id}
            className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
          >
            <span className="text-xs font-semibold text-violet-600">
              {post.date}
            </span>
            <h2 className="text-xl font-bold text-gray-900 mt-2 mb-3">
              {post.title}
            </h2>
            <p className="text-gray-600 text-sm mb-4">{post.desc}</p>
            <a
              href="#"
              className="text-sm font-semibold text-violet-600 hover:underline"
            >
              Read More &rarr;
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
