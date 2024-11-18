"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Facebook, Instagram, Youtube, Menu, X, Linkedin } from "lucide-react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [nextPageToken, setNextPageToken] = useState<string | null>(null);
  
  const fetchVideos = async (pageToken?: string) => {
    try {
      setIsLoading(true);
      const url = pageToken 
        ? `/api/server?pageToken=${pageToken}`
        : '/api/server';
      
        const response = await fetch(url);
        const data = await response.json();
    
        if (!response.ok) {
          throw new Error(data.details || 'Veriler alınırken bir hata oluştu');
        }
      
      
      if (pageToken) {
        setVideos(prev => [...prev, ...data.items]);
      } else {
        setVideos(data.items);
      }
      
      setNextPageToken(data.nextPageToken);
    } catch (error) {
      console.error("Video Fetch Hatası:", error);
      // Kullanıcıya hata mesajını gösterebiliriz
      alert(error instanceof Error ? error.message : 'Bir hata oluştu');
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <>
      <Head>
        <title>Sağlık Turizmi Gündemi - Türkiye'nin İlk ve Tek Sağlık Turizmi Programı</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
      <div className="min-h-screen overflow-hidden pb-10 relative" 
        style={{
          backgroundImage: `linear-gradient(to bottom, #1580b6, #157fb9, #00a658, #02a35f)`,
        }}>
        
        {/* Ege TV Logo */}
        <div className="absolute right-[13rem] top-10 hidden md:block">
          <Image src="/images/egetv.png" alt="Ege TV Logo" width={150} height={150} />
        </div>
        
        {/* Navigation */}
<nav className="relative">
  {/* Hamburger Menu Button - Sadece mobile'da görünür */}
  <button 
    className="md:hidden fixed left-4 top-4 z-50 text-white bg-white/10 p-2 rounded-lg backdrop-blur-sm"
    onClick={() => setIsMenuOpen(!isMenuOpen)}
  >
    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
  </button>
  {/* Desktop Menu */}
  <div className="hidden md:block fixed left-6 top-[25%] z-40">
    <div className="relative">
      {/* Menu Header */}
      <div className="absolute -top-8 left-0">
        <div className="flex items-center gap-2 text-white/80 mb-2">
          <div className="w-6 h-[2px] bg-white/60"></div>
          <span className="text-xs font-light tracking-wider">MENU</span>
        </div>
      </div>
      {/* Menu Items */}
      <ul className="flex flex-col gap-3">
      <li>
          <a 
            href="https://www.saglikturizmir.com" 
            target="_blank"
            className="group flex items-center gap-3 relative"
          >
            <span className="absolute left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300"></span>
            <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center
                          group-hover:bg-white/20 transition-all duration-300">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-white/90 text-xs font-medium group-hover:text-white transition-colors duration-300">
                SağlıkTur İzmir
              </span>
              <span className="text-white/50 text-[10px] group-hover:text-white/70 transition-colors duration-300">
                Sağlık Turizmi
              </span>
            </div>
          </a>
        </li>
        <li>
          <a 
            href="https://www.saglikturizmitesvikleri.com.tr/" 
            target="_blank"
            className="group flex items-center gap-3 relative"
          >
            <span className="absolute left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300"></span>
            <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center
                          group-hover:bg-white/20 transition-all duration-300">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-white/90 text-xs font-medium group-hover:text-white transition-colors duration-300">
                Sağlık Turizm Teşvikleri
              </span>
              <span className="text-white/50 text-[10px] group-hover:text-white/70 transition-colors duration-300">
                Teşvik ve Destekler
              </span>
            </div>
          </a>
        </li>
        <li>
          <a 
            href="https://www.saglikhaberci.com/" 
            target="_blank"
            className="group flex items-center gap-3 relative"
          >
            <span className="absolute left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300"></span>
            <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center
                          group-hover:bg-white/20 transition-all duration-300">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-white/90 text-xs font-medium group-hover:text-white transition-colors duration-300">
                Sağlık Haberci
              </span>
              <span className="text-white/50 text-[10px] group-hover:text-white/70 transition-colors duration-300">
                Güncel Haberler
              </span>
            </div>
          </a>
        </li>
        <li>
          <a 
            href="https://ahmetkandemir.com.tr/" 
            target="_blank"
            className="group flex items-center gap-3 relative"
          >
            <span className="absolute left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300"></span>
            <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center
                          group-hover:bg-white/20 transition-all duration-300">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-white/90 text-xs font-medium group-hover:text-white transition-colors duration-300">
                Ahmet Kandemir
              </span>
              <span className="text-white/50 text-[10px] group-hover:text-white/70 transition-colors duration-300">
                Kişisel Web Sitesi
              </span>
            </div>
          </a>
        </li>
      </ul>
      {/* Menu Footer */}
      <div className="absolute -bottom-12 left-0">
        <div className="flex items-center gap-3">
          <a href="https://www.facebook.com/saglikturizmir" className="text-white/60 hover:text-white transition-colors duration-300">
            <Facebook size={14} />
          </a>
          <a href="https://www.linkedin.com/in/sa%C4%9Fl%C4%B1kturizmir/" className="text-white/60 hover:text-white transition-colors duration-300">
            <Linkedin size={14} />
          </a>
          <a href="https://www.youtube.com/@saglikturizmir" className="text-white/60 hover:text-white transition-colors duration-300">
            <Youtube size={14} />
          </a>
          <a href="https://www.instagram.com/saglikturizmir/" className="text-white/60 hover:text-white transition-colors duration-300">
            <Instagram size={14} />
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* Mobile Menu */}
  <div className={`
    fixed inset-0 bg-gradient-to-b from-[#1580b6] to-[#02a35f] z-40
    transform transition-transform duration-300 ease-in-out
    ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
    md:hidden
  `}>
    <div className="h-full flex flex-col justify-center items-center p-8">
      <div className="w-full max-w-sm">
        {/* Mobile Menu Logo */}
        <div className="mb-12 text-center">
          <Image 
            src="/images/saglikturizmirlogo.png" 
            alt="Logo" 
            width={300} 
            height={80}
            className="mx-auto"
          />
        </div>
        {/* Mobile Menu Items */}
        <ul className="space-y-1">
        <li>
            <a 
              href="https://www.saglikturizmir.com" 
              target="_blank"
              className="flex items-center gap-4 text-white hover:bg-white/10 p-4 rounded-lg transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
              </div>
              <div>
                <span className="block text-sm font-medium">SağlıkTur İzmir</span>
                <span className="block text-xs text-white/70">Sağlık Turizmi</span>
              </div>
            </a>
          </li>
          <li>
            <a 
              href="https://www.saglikturizmitesvikleri.com.tr/" 
              target="_blank"
              className="flex items-center gap-4 text-white hover:bg-white/10 p-4 rounded-lg transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
              </div>
              <div>
                <span className="block text-sm font-medium">Sağlık Turizm Teşvikleri</span>
                <span className="block text-xs text-white/70">Teşvik ve Destekler</span>
              </div>
            </a>
          </li>
          <li>
            <a 
              href="https://www.saglikhaberci.com/" 
              target="_blank"
              className="flex items-center gap-4 text-white hover:bg-white/10 p-4 rounded-lg transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
                </svg>
              </div>
              <div>
                <span className="block text-sm font-medium">Sağlık Haberci</span>
                <span className="block text-xs text-white/70">Güncel Haberler</span>
              </div>
            </a>
          </li>
          <li>
            <a 
              href="https://ahmetkandemir.com.tr/" 
              target="_blank"
              className="flex items-center gap-4 text-white hover:bg-white/10 p-4 rounded-lg transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
              </div>
              <div>
                <span className="block text-sm font-medium">Ahmet Kandemir</span>
                <span className="block text-xs text-white/70">Kişisel Web Sitesi</span>
              </div>
            </a>
          </li>
        </ul>
        {/* Mobile Menu Footer */}
        <div className="mt-12 flex justify-center gap-6">
          <a href="https://www.facebook.com/saglikturizmir" className="text-white/60 hover:text-white transition-colors duration-300">
            <Facebook size={20} />
          </a>
          <a href="https://www.linkedin.com/in/sa%C4%9Fl%C4%B1kturizmir/" className="text-white/60 hover:text-white transition-colors duration-300">
            <Linkedin size={20} />
          </a>
          <a href="https://www.youtube.com/@saglikturizmir" className="text-white/60 hover:text-white transition-colors duration-300">
            <Youtube size={20} />
          </a>
          <a href="https://www.instagram.com/saglikturizmir/" className="text-white/60 hover:text-white transition-colors duration-300">
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
       {/* Main Content */}
<div className="flex flex-col md:flex-row items-center md:items-end justify-center gap-[2rem] text-center mt-[1rem]">
  {/* Mobile Only - Ahmet Kandemir Image */}
  
  <div className="relative block md:hidden">
    <div className="absolute inset-0 bg-gradient-to-t from-[#1580b6]/50 to-transparent z-10"></div>
    <Image
      src="/images/ahmet.png"
      alt="Ahmet Kandemir"
      width={200}
      height={200}
      className="w-full h-[300px] object-cover object-top mask-image-gradient"
    />
  </div>
  <div className="flex flex-col items-center justify-center gap-[40px] md:gap-[100px]">
    <div className="relative">
      <Image 
        src="/images/saglikturizmirlogo.png" 
        alt="Sağlık Turizmi Gündemi Logo" 
        width={550} 
        height={500}
        className="w-[300px] md:w-[550px] h-auto"
      />
      <span className={`
        absolute -top-4 md:-top-7 left-4 md:left-7 
        text-2xl md:text-4xl 
        transform rotate-[1deg]
        font-dancing font-bold
        text-white/90
        drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]
      `}>
        Ahmet Kandemir ile
      </span>
    
    </div>
    <div className="flex flex-col h-[5rem] justify-center items-center gap-1 mb-3 md:mb-0">
      <div>
        <p className="text-white text-[1.2rem] md:text-[1.4rem] px-4 md:px-0">
          Türkiye'nin İlk ve Tek Sağlık Turizmi Programı
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-[20px] md:gap-[40px] font-extralight text-[1rem] md:text-[1.1rem] text-white">
        <div>
          <a href="https://www.saglikturizmir.com" className="hover:underline">
            www.saglikturizmir.com
          </a>
        </div>
        <div className="flex gap-1 items-center justify-center">
          <div className="flex item-center gap-2 md:gap-1">
            <span className="rounded-full border border-white p-2 md:p-1 hover:bg-white/10 transition-all duration-300">
              <Facebook size={13} />
            </span>
            <span className="rounded-full border border-white p-2 md:p-1 hover:bg-white/10 transition-all duration-300">
              <Linkedin size={13} />
            </span>
            <span className="rounded-full border border-white p-2 md:p-1 hover:bg-white/10 transition-all duration-300">
              <Youtube size={13} />
            </span>
            <span className="rounded-full border border-white p-2 md:p-1 hover:bg-white/10 transition-all duration-300">
              <Instagram size={13} />
            </span>
          </div>
          <div>
            <p>saglikturizmir</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Desktop Only - Ahmet Kandemir Image */}
  <div className="relative hidden md:block">
    <Image
      src="/images/ahmet.png"
      alt="Ahmet Kandemir"
      width={350}
      height={350}
      className="mask-image-gradient"
    />
  </div>
</div>
        <div className="flex flex-col items-center">
          
{/* Videos Grid */}
<main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-5xl px-4 md:px-0 mt-8">
  {videos.map((video, index) => (
    <div 
      key={`${video.id.videoId}-${index}`} 
      className="bg-white rounded-2xl shadow-lg overflow-hidden mx-auto w-full max-w-[400px] md:max-w-none
                transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
    >
      <div className="relative pt-[56.25%]">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
          title={video.snippet.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="p-5">
        <h2 className="text-base text-[black]/70 font-medium line-clamp-2 leading-snug">
          {video.snippet.title}
        </h2>
        <div className="flex items-center gap-2 mt-3">
          <div className="w-1 h-1 rounded-full bg-[#009946]"></div>
          <p className="text-sm text-[#009946]">
            {new Date(video.snippet.publishedAt).toLocaleDateString("tr-TR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
      </div>
    </div>
  ))}
</main>
{nextPageToken && (
  <button
    onClick={() => fetchVideos(nextPageToken)}
    disabled={isLoading}
    className="mt-8 mb-4 px-8 py-4 bg-white text-[#1580b6] rounded-full shadow-lg 
               hover:shadow-xl transition-all duration-300 flex items-center gap-3
               disabled:opacity-50 disabled:cursor-not-allowed
               mx-4 md:mx-0 w-[calc(100%-2rem)] md:w-auto justify-center
               text-base font-medium"
  >
    {isLoading ? (
      <>
        <div className="w-5 h-5 border-2 border-[#1580b6] border-t-transparent rounded-full animate-spin" />
        <span>Yükleniyor...</span>
      </>
    ) : (
      <>
        <span>Daha Fazla Video</span>
        <svg 
          className="w-5 h-5 animate-bounce" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </>
    )}
  </button>
)}
        </div>
        
      </div>
    </>
  );
}
