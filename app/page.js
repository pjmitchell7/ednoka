"use client";

import { useState, useEffect } from "react";

const films = [
  {
    title: "Tortoise",
    thumbnail: "/assets/film/thumbnails/tortoise_tn.png",
    video: "/assets/film/videos/tortoise.mp4",
  },
  {
    title: "Rain",
    thumbnail: "/assets/film/thumbnails/rain_tn.png",
    video: "/assets/film/videos/rain.mp4",
  },
  {
    title: "Clouds",
    thumbnail: "/assets/film/thumbnails/clouds_tn.png",
    video: "/assets/film/videos/clouds.mp4",
  },
  // add more films here...
];

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [selectedFilm, setSelectedFilm] = useState(films[0]);

  // Intro video timer
  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleIntroEnd = () => setShowIntro(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      {showIntro ? (
        // --- INTRO VIDEO ---
        <video
          autoPlay
          muted
          playsInline
          onEnded={handleIntroEnd}
          className="w-[600px] h-[340px] object-cover rounded-xl shadow-lg"
        >
          <source src="/assets/videos/popcorn.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        // --- MAIN FILM UI ---
        <div className="flex flex-col w-full max-w-5xl px-4">
          {/* Video Player */}
          <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-lg">
            <video
              key={selectedFilm.video}
              src={selectedFilm.video}
              controls
              autoPlay
              className="w-full h-full object-cover"
            />
          </div>

          {/* Thumbnails Row */}
          <div className="mt-6 overflow-x-auto">
            <div className="flex gap-4">
              {films.map((film, idx) => (
                <div
                  key={idx}
                  className={`flex-shrink-0 cursor-pointer transition-transform ${
                    film.title === selectedFilm.title
                      ? "scale-110 border-2 border-white"
                      : "hover:scale-105"
                  }`}
                  onClick={() => setSelectedFilm(film)}
                >
                  <img
                    src={film.thumbnail}
                    alt={film.title}
                    className="w-40 h-24 object-cover rounded-lg"
                  />
                  <p className="text-sm mt-1 text-center">{film.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
