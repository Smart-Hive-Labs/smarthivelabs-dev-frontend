"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, X } from "lucide-react";

interface VideoReelProps {
  /** YouTube video ID or direct mp4 URL */
  videoId?: string;
  videoSrc?: string;
  title?: string;
  subtitle?: string;
}

export function VideoReel({
  videoId,
  videoSrc,
  title = "Smart Hive Labs in Motion",
  subtitle = "A look at how we build, ship, and operate.",
}: VideoReelProps) {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) { videoRef.current.pause(); setPlaying(false); }
    else { videoRef.current.play(); setPlaying(true); }
  };

  const hasVideo = videoId || videoSrc;

  return (
    <>
      {/* reel card */}
      <div className="relative overflow-hidden rounded-[2rem] bg-[#060e1c] border border-white/[0.07]">

        {/* background video / poster */}
        <div className="relative aspect-video w-full overflow-hidden">
          {videoSrc ? (
            <video
              ref={videoRef}
              src={videoSrc}
              muted={muted}
              loop
              playsInline
              className="h-full w-full object-cover"
            />
          ) : (
            /* placeholder when no video yet */
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#0b1423] via-[#07111f] to-[#060e1c]">
              {/* animated lines suggesting motion */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute h-px bg-gradient-to-r from-transparent via-[#f5a623] to-transparent"
                    style={{ top: `${15 + i * 14}%`, width: "100%" }}
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 3 + i * 0.4, delay: i * 0.6, repeat: Infinity, ease: "linear" }}
                    initial={{ opacity: 0.15 + i * 0.04 }}
                  />
                ))}
              </div>

              {/* center label */}
              <div className="relative z-10 text-center">
                <motion.div
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-[rgba(245,166,35,0.4)] bg-[rgba(245,166,35,0.1)]"
                >
                  <Play className="h-7 w-7 translate-x-0.5 text-[#f5a623]" />
                </motion.div>
                <p className="text-sm font-semibold text-white/60">Showreel coming soon</p>
                <p className="mt-1 text-xs text-white/30">Add your video URL to bring this to life</p>
              </div>
            </div>
          )}

          {/* overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-transparent to-transparent" />

          {/* controls (only if real video) */}
          {videoSrc && (
            <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3">
              <button
                onClick={togglePlay}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition hover:bg-[rgba(245,166,35,0.2)] hover:border-[rgba(245,166,35,0.5)]"
              >
                {playing
                  ? <Pause className="h-4 w-4 text-white" />
                  : <Play className="h-4 w-4 translate-x-0.5 text-white" />
                }
              </button>
              <button
                onClick={() => { setMuted(!muted); if (videoRef.current) videoRef.current.muted = !muted; }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition hover:bg-white/15"
              >
                {muted
                  ? <VolumeX className="h-4 w-4 text-white/60" />
                  : <Volume2 className="h-4 w-4 text-white" />
                }
              </button>
              <div className="flex-1 h-0.5 rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-[#f5a623]"
                  animate={playing ? { width: ["0%", "100%"] } : {}}
                  transition={{ duration: 30, ease: "linear" }}
                />
              </div>
            </div>
          )}

          {/* YouTube expand button */}
          {videoId && (
            <button
              onClick={() => setShowModal(true)}
              className="absolute inset-0 flex items-center justify-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.96 }}
                className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-[rgba(245,166,35,0.6)] bg-[rgba(245,166,35,0.12)] backdrop-blur-sm transition group-hover:bg-[rgba(245,166,35,0.25)] group-hover:border-[#f5a623]"
              >
                <Play className="h-8 w-8 translate-x-0.5 text-[#f5a623]" />
              </motion.div>
            </button>
          )}
        </div>

        {/* caption */}
        <div className="px-7 py-5">
          <p className="text-sm font-semibold text-white">{title}</p>
          <p className="mt-1 text-xs text-white/40">{subtitle}</p>
        </div>
      </div>

      {/* YouTube modal */}
      <AnimatePresence>
        {showModal && videoId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute -top-12 right-0 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="aspect-video overflow-hidden rounded-2xl">
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                  className="h-full w-full"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
