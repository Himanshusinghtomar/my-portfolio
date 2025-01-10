// src/lib/fetchDevToBlogs.ts
import { DevToArticle } from "@/types/DevToArticle";

export async function fetchDevToBlogs(): Promise<DevToArticle[]> {
  const response = await fetch("https://dev.to/api/articles?username=himanshusinghtomar");

  if (!response.ok) {
    throw new Error("Failed to fetch blogs from Dev.to API");
  }

  const data: DevToArticle[] = await response.json();
  return data; // Ensure the fetched data matches the `DevToArticle` type
}
