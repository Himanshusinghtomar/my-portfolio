// src/types/DevToArticle.ts
export interface DevToArticle {
  id: number;
  title: string;
  description: string;
  url: string;
  cover_image: string | null;
  tags: string[];
  published_at: string;
  reading_time_minutes: string;
  body_html: string;
}
