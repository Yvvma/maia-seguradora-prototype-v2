"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";

export default function AoVivo({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const duration = videoRef.current.duration || 1;
    setProgress(current / duration);
  };

  return (
    <div className="relative w-full flex justify-center items-center bg-black py-10">
      <div className="relative max-w-5xl w-full overflow-hidden rounded-2xl shadow-lg">
        {/* Vídeo */}
        <video
          ref={videoRef}
          src={src}
          className="w-full h-full object-cover"
          playsInline
          muted
          loop={false}
          onTimeUpdate={handleTimeUpdate}
        />

        {/* Badge LIVE oscilante */}
        <motion.div
          className="absolute top-4 left-4 bg-red-600 text-white text-xs sm:text-sm font-semibold px-2 py-1 rounded-md z-10"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        >
          LIVE
        </motion.div>

        {/* Botão Play/Pause */}
        <button
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center z-10"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="bg-white/80 backdrop-blur-sm rounded-full p-4 flex items-center justify-center transition-transform"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 text-black" />
            ) : (
              <Play className="w-6 h-6 text-black" />
            )}
          </motion.div>
        </button>

        {/* Linha de progresso */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/30">
          <motion.div
            className="h-full bg-white"
            style={{ scaleX: progress }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: progress }}
            transformOrigin="0% 50%"
          />
        </div>
      </div>
    </div>
  );
}
