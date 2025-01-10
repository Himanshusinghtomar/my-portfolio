// src/pages/blog.tsx

import { fetchDevToBlogs } from "@/lib/fetchDevToBlogs";
import Image from "next/image";
import { DevToArticle } from "@/types/DevToArticle";

export default function TestPage({ blogs }: { blogs: DevToArticle[] }) {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6">My Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogs.map((blog) => (
          <a
            key={blog.id}
            href={blog.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border rounded-lg hover:shadow-lg"
          >
            {blog.cover_image && (
              <Image
                width={128}
                height={128}
                src={blog.cover_image}
                alt={blog.title}
                className="rounded-md mb-4 w-full object-cover"
                style={{ height: "200px" }}
              />
            )}
            <h2 className="text-2xl font-semibold">{blog.title}</h2>
            <p className="mt-2 text-gray-600">
              {blog.description || "No description available"}
            </p>
            <div className="mt-4 text-sm text-gray-500">
              Published on: {new Date(blog.published_at).toLocaleDateString()}
            </div>
            <div className="mt-2 text-sm text-blue-500">
              Tags: {blog.tags.join(", ")}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

// Server-side rendering
export async function getServerSideProps() {
  try {
    const blogs = await fetchDevToBlogs();
    return {
      props: {
        blogs,
      },
    };
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return {
      props: {
        blogs: [],
      },
    };
  }
}
