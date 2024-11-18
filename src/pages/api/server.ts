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
async function fetchVideos(pageToken?: string): Promise<any> {
  try {
    const maxResults = 6;
    const API_KEY = process.env.YOUTUBE_API_KEY;
    const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;

    // Environment değişkenlerini kontrol edelim
    console.log('API Key:', API_KEY?.slice(0, 5) + '...');
    console.log('Channel ID:', CHANNEL_ID);

    if (!API_KEY || !CHANNEL_ID) {
      throw new Error("Gerekli çevresel değişkenler eksik: " + 
        (!API_KEY ? 'API_KEY ' : '') + 
        (!CHANNEL_ID ? 'CHANNEL_ID' : '')
      );
    }
    
    let url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&order=date&maxResults=${maxResults}`;
    if (pageToken) {
      url += `&pageToken=${pageToken}`;
    }

    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`YouTube API isteği başarısız oldu: ${res.status} - ${res.statusText}`);
    }
    
    const data = await res.json();
    return {
      items: data.items || [],
      nextPageToken: data.nextPageToken
    };
  } catch (error) {
    console.error("fetchVideos Hatası:", error);
    throw error;
  }
}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { pageToken } = req.query;
    const response = await fetchVideos(pageToken as string);
    // API yanıtını kontrol edelim
    console.log('API Response:', response);

    res.status(200).json(response);
  } catch (error) {
    console.error("API Hatası Detayı:", error);
    res.status(500).json({ 
      error: "Veriler alınırken bir hata oluştu",
      details: error instanceof Error ? error.message : 'Bilinmeyen hata'
    });
  }
}