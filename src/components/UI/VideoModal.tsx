import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play } from "lucide-react";

interface VideoModalProps {
  videoUrl: string; 
  thumbnail?: string; 
  title?: string;
}

const VideoModal = ({ videoUrl, thumbnail, title }: VideoModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Botão Play */}
      <div
        className="relative w-full max-w-xl aspect-video bg-black rounded-lg overflow-hidden cursor-pointer group"
        onClick={() => setIsOpen(true)}
      >
        {thumbnail && (
          <img
            src={thumbnail}
            alt={title || "Thumbnail"}
            className="w-full h-full object-cover"
          />
        )}
        {!thumbnail && (
          <div className="w-full h-full flex items-center justify-center bg-neutral-900 text-white">
            {title || "Abrir Vídeo"}
          </div>
        )}

        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-300 flex items-center justify-center">
          <Play className="w-14 h-14 text-white group-hover:scale-110 transition duration-300" />
        </div>
      </div>

      {/* Modal com iframe */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-5xl aspect-video"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={videoUrl}
                title="YouTube video"
                className="w-full h-full rounded-lg"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>

              {/* Botão fechar */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute -top-4 -right-4 bg-white text-black p-2 rounded-full shadow-lg hover:bg-neutral-100 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VideoModal;