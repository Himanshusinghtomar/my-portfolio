"use client"; // Required for client components

import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Use useParams from next/navigation
import DOMPurify from "dompurify";
import { DevToArticle } from "@/types/DevToArticle";

async function fetchBlogById(id: string) {
  const res = await fetch(`https://dev.to/api/articles/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch blog");
  }
  return res.json();
}

export default function BlogDetailPage() {
  const { id } = useParams(); // Extract the dynamic route parameter
  const [blog, setBlog] = useState<DevToArticle>();

  useEffect(() => {
    if (id) {
      fetchBlogById(id).then(setBlog).catch(console.error);
    }
  }, [id]);

  if (!blog) return <div>Loading...</div>;
  const sanitizedHTML = DOMPurify.sanitize(blog.body_html);
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>
      {blog.cover_image && (
        <img
          src={blog.cover_image}
          alt={blog.title}
          className="rounded-md mb-4 w-full h-48 object-cover"
        />
      )}
      <p className="text-lg">
        {blog.description || "No description available"}
      </p>
      <div className="mt-4 text-sm text-gray-500">
        Published on: {new Date(blog.published_at).toLocaleDateString()}
      </div>

      <div
        className="mt-4 prose"
        dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
      />
    </div>
  );
}
