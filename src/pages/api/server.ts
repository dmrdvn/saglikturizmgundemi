// src/pages/api/server.ts

import type { NextApiRequest, NextApiResponse } from 'next';

export interface Video {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    publishedAt: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
  };
}

async function fetchVideos(): Promise<Video[]> {
  try {
    const maxResults = 6;
    const API_KEY = process.env.YOUTUBE_API_KEY;
    const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;


    if (!API_KEY || !CHANNEL_ID || !maxResults) {
      throw new Error("Gerekli çevresel değişkenlerden biri eksik.");
    }

    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&order=date&maxResults=${maxResults}`
    );

    if (!res.ok) {
      throw new Error(`YouTube API isteği başarısız oldu: ${res.status} - ${res.statusText}`);
    }

    const data = await res.json();
    return data.items ? (data.items as Video[]) : [];
  } catch (error) {
    console.error("fetchVideos Hatası:", error);
    throw error;
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const videos = await fetchVideos();
    res.status(200).json(videos);
  } catch (error) {
    console.error("API Hatası:", error);
    res.status(500).json({ error: "Veriler alınırken bir hata oluştu" });
  }
}
