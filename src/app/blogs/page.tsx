// src/app/blog/page.tsx
import { DevToArticle } from "@/types/DevToArticle";
import Link from "next/link";
async function fetchDevToBlogs() {
  const res = await fetch(
    "https://dev.to/api/articles?username=himanshusinghtomar&page=1&per_page=100",
    {
      cache: "no-store", // Ensure fresh data for every request
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch blogs from Dev.to");
  }

  return res.json(); // Returns the list of blogs
}

export default async function BlogPage() {
  const blogs = await fetchDevToBlogs();

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6">My Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogs.map((blog: DevToArticle) => (
          <Link
            key={blog.id}
            href={`/blog/${blog.id}`}
            className="block p-4 border rounded-lg hover:shadow-lg"
          >
            {blog.cover_image && (
              <img
                src={blog.cover_image}
                alt={blog.title}
                className="rounded-md mb-4 w-full h-48 object-cover"
              />
            )}
            <h2 className="text-2xl font-semibold">{blog.title}</h2>
            <p className="mt-2 text-gray-600">
              {blog.description || "No description available"}
            </p>
            <div className="mt-4 text-sm text-gray-500">
              Published on: {new Date(blog.published_at).toLocaleDateString()}
            </div>
            {/*  {blog.tags.join(", ")} */}
            <div className="mt-2 text-sm text-blue-500">Tags:</div>
            <div className="mt-2 text-sm text-gray-500">
              Reading time: {blog.reading_time_minutes} mins
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
