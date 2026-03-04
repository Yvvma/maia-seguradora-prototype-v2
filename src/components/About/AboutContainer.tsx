import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import {motion} from 'framer-motion';

export default function AboutSection() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const videoRefs = useRef([]);

  const mediaItems = [
    {
      type: "video",
      src: "/videos/wallpaper-natasha-v1.mp4",
      alt: "video-natasha-01",
    },
    {
      type: "video",
      src: "/performer/live/funk-generation_kslupb.mp4",
      alt: "video-natasha-02",
    },
    {
      type: "video",
      src: "videos/IMG_9185_qogqyj.mov",
      alt: "video-natasha-03",
    },
  ];

  const totalItems = mediaItems.length;

  // Autoplay
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalItems);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalItems]);

  // Controlar vídeos
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index === currentIndex) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [currentIndex]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  const handleDotClick = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const getItemStyle = (index) => {
    const angle = (360 / totalItems) * (index - currentIndex);
    const radius = 350;
    const cosAngle = Math.cos((angle * Math.PI) / 180);
    const isFront = cosAngle > 0;
    const isCenter = index === currentIndex;

    return {
      transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
      opacity: isCenter ? 1 : isFront ? 0.6 : 0.3,
      zIndex: isCenter ? 20 : isFront ? 10 : 1,
      transition: "transform 0.7s ease, opacity 0.7s ease",
    };
  };

  return (
    <div className="w-full py-16 px-8 md:px-32 flex flex-col gap-12 bg-black min-h-screen">
      <div className="flex flex-col gap-8 ">
        <div className="w-full flex justify-center items-center">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-4xl w-full">
        <motion.div 
        initial={{ opacity: 0, x:-48 }}
          whileInView={{ opacity: 1, x:0 }}
          transition={{ duration: 1 }}
        className="max-w-4xl mx-auto text-left text-base sm:text-lg   font-[AppliedRegular] tracking-tight text-white">
          {t("about.text-01")}
        </motion.div>
    
        </div>
        </div>

        {/* 3D Carousel */}
        <div className="relative flex justify-center items-center py-12 overflow-hidden">
          <div
            className="relative w-96 h-96 flex items-center justify-center"
            style={{ perspective: "1800px" }}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div
              className="relative w-full h-full flex items-center justify-center"
              style={{
                transformStyle: "preserve-3d",
                transform: `rotateY(${-currentIndex * (-5 + totalItems)}deg)`,
                transition: "transform 0.7s ease",
              }}
            >
              {mediaItems.map((item, index) => {
                const itemStyle = getItemStyle(index);
                const isCenter = index === currentIndex;

                return (
                  <div
                    key={index}
                    className="absolute rounded-xl shadow-2xl border-2 border-white/20 scale-70  sm:scale-100"
                    style={{
                      ...itemStyle,
                      width: isCenter ? "320px" : "256px",
                      height: isCenter ? "240px" : "192px",
                      left: "50%",
                      top: "50%",
                      marginLeft: isCenter ? "-180px" : "-128px",
                      marginTop: isCenter ? "-120px" : "-96px",
                    }}
                  >
                    {item.type === "video" ? (
                      <video
                        ref={(el) => (videoRefs.current[index] = el)}
                        src={item.src}
                        className="w-full h-full object-cover rounded-xl sm:scale-90"
                        muted
                        loop
                        playsInline
                      />
                    ) : (
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Controls */}
          <button
            onClick={handlePrevious}
            className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300 z-30"
          >
            &#10094;
          </button>
          <button
            onClick={handleNext}
            className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300 z-30"
          >
            &#10095;
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3">
          {mediaItems.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-white scale-125 shadow-lg"
                  : "bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        <motion.div
        initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        className="max-w-4xl mx-auto text-left text-base sm:text-lg  font-[AppliedRegular] tracking-tight text-white">
          {t("about.text-02")}
        </motion.div>
      </div>
    </div>
  );
}
