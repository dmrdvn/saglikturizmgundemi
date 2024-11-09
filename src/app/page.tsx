"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Facebook, Twitter, Youtube } from "lucide-react";
import Head from "next/head";

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

export default function Home() {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    async function getVideos() {
      try {
        const response = await fetch("/api/server");
        if (!response.ok) throw new Error("Veriler alınırken bir hata oluştu");
        const data = await response.json();
        setVideos(data);
      } catch (error) {
        console.error(error);
      }
    }
    getVideos();
  }, []);

  return (
    <>
      <Head>
        <title>Sağlık Turizmi Gündemi - Türkiye'nin İlk ve Tek Sağlık Turizmi Programı</title>
        <meta name="description" content="Sağlık Turizmi Gündemi, Türkiye'nin ilk ve tek sağlık turizmi programı, en güncel sağlık haberleri ve doktor bilgileri ile sizlerle." />
        <meta name="keywords" content="sağlık turizmi, sağlık haberleri, Türkiye sağlık turizmi, doktorlar, sağlık rehberi" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Sağlık Turizmi Gündemi - Türkiye'nin İlk ve Tek Sağlık Turizmi Programı" />
        <meta property="og:description" content="Sağlık Turizmi Gündemi, Türkiye'nin ilk ve tek sağlık turizmi programı, en güncel sağlık haberleri ve doktor bilgileri ile sizlerle." />
        <meta property="og:image" content="/saglikturizmirlogo.png" />
        <meta property="og:url" content="https://www.saglikturizmir.com" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sağlık Turizmi Gündemi - Türkiye'nin İlk ve Tek Sağlık Turizmi Programı" />
        <meta name="twitter:description" content="Sağlık Turizmi Gündemi, Türkiye'nin ilk ve tek sağlık turizmi programı, en güncel sağlık haberleri ve doktor bilgileri ile sizlerle." />
        <meta name="twitter:image" content="/saglikturizmirlogo.png" />
      </Head>

      <div className="min-h-screen overflow-hidden pb-10 relative" style={{
    backgroundImage: `linear-gradient(to bottom, #1580b6, #157fb9, #00a658, #02a35f)`,}}>

        <div className="absolute right-[8rem] top-10">
          <Image
            src="/egetv.png"
            alt="Ege TV Logo"
            width={200}
            height={200}
          />
        </div>
        
        <nav className="flex justify-center items-center p-3">
          <ul className="flex gap-2 text-[1rem] justify-center items-center text-white">
            <li className="cursor-pointer bg-white text-black px-3 py-2 rounded-lg shadow-lg">
              <a href="https://www.saglikturizmitesvikleri.com.tr/" target="_blank">Sağlık Turizm Teşvikleri</a>
            </li>
            <li className="cursor-pointer bg-white text-black px-3 py-2 rounded-lg shadow-lg">
              <a href="https://www.saglikhaberci.com/" target="_blank">Sağlık Haberci</a>
            </li>
            <li className="cursor-pointer bg-white text-black px-3 py-2 rounded-lg shadow-lg">
              <a href="https://ahmetkandemir.com.tr/" target="_blank">Ahmet Kandemir</a>
            </li>
          </ul>
        </nav>

        <div className="flex flex-row items-end justify-center gap-[2rem] text-center mt-[1rem]">
          <div className="flex flex-col items-center justify-center gap-[80px]">
            <div className="relative">
              <Image
                src="/saglikturizmirlogo.png"
                alt="Sağlık Turizmi Gündemi Logo"
                width={550}
                height={500}
              />
              <span className="absolute -top-8 left-7 text-3xl transform rotate-[1deg] italic font-bold">Ahmet Kandemir ile</span>
            </div>

            <div className="flex flex-col h-[5rem] justify-center items-center gap-1 mb-5">
              <div>
                <p className="text-white text-[1.6rem]">
                  Türkiye'nin İlk ve Tek Sağlık Turizmi Programı
                </p>
              </div>
              <div className="flex justify-center items-center gap-[40px] font-extralight text-[1.4rem] text-white">
                <div>
                  <a href="https://www.saglikturizmir.com" className="hover:underline">
                    www.saglikturizmir.com
                  </a>
                </div>
                <div className="flex gap-1 items-center justify-center">
                  <div className="flex item-center gap-1">
                    <span className="rounded-full border border-white p-1"><Facebook size={15} /></span>
                    <span className="rounded-full border border-white p-1"><Twitter size={15} /></span>
                    <span className="rounded-full border border-white p-1"><Youtube size={15} /></span>
                  </div>
                  <div>
                    <p>saglikturizmir</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/ahmet.png"
              alt="Ahmet Kandemir"
              width={350}
              height={350}
              className="mask-image-gradient"
            />
          </div>
        </div>

        <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto max-w-5xl">
          {videos.map((video) => (
            <div key={video.id.videoId} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <iframe
                width="100%"
                height="180"
                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                title={video.snippet.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="p-3">
                <h2 className="text-sm text-[black]/50 font-semibold">{video.snippet.title}</h2>
                <p className="text-xs text-[#009946] mt-1">
                  {new Date(video.snippet.publishedAt).toLocaleDateString("tr-TR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
          ))}
        </main>
      </div>
    </>
  );
}
