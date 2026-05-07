"use client";

import { useRef, useState, useCallback } from "react";
import { Play, Pause, Headphones } from "lucide-react";

const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [loadError, setLoadError] = useState(false);

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(() => setLoadError(true));
    }
    setIsPlaying((prev) => !prev);
  }, [isPlaying]);

  const onTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio) return;
    setProgress((audio.currentTime / audio.duration) * 100 || 0);
  };

  const onLoadedMetadata = () => {
    const audio = audioRef.current;
    if (!audio) return;
    setDuration(audio.duration);
  };

  const onEnded = () => setIsPlaying(false);
  const onError = () => { setLoadError(true); setIsPlaying(false); };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || loadError) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    audio.currentTime = ratio * audio.duration;
    setProgress(ratio * 100);
  };

  const formatTime = (s: number) => {
    if (!s || isNaN(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  const elapsed = audioRef.current ? (progress / 100) * duration : 0;

  if (loadError) return null;

  return (
    <section
      aria-label="Presentación en audio de la clínica"
      className="bg-gradient-to-r from-[#fdf8ec] via-white to-[#fdf8ec] border-b border-gold/20"
    >
      <div className="container mx-auto px-4 md:px-6 py-5 md:py-6">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-4 sm:gap-6">

          {/* Left: icon + copy */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Animated icon ring */}
            <div className={`relative w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center premium-shadow shrink-0 ${isPlaying ? "animate-pulse" : ""}`}>
              <Headphones size={22} className="text-white" />
            </div>
            <div className="text-left">
              <p className="font-heading font-bold text-gray-900 text-sm leading-tight">
                Conócenos en 2 minutos
              </p>
              <p className="text-xs text-gray-500 leading-tight mt-0.5">
                Presentación oficial de la clínica
              </p>
            </div>
          </div>

          {/* Center: progress + times */}
          <div className="flex-1 w-full flex items-center gap-3">
            <span className="text-xs text-gray-400 font-mono shrink-0 w-9 text-right tabular-nums">
              {formatTime(elapsed)}
            </span>

            {/* Track */}
            <div
              className="relative flex-1 h-2 bg-gray-200 rounded-full cursor-pointer group"
              onClick={seek}
              role="slider"
              aria-label="Progreso del audio"
              aria-valuenow={Math.round(progress)}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className="absolute left-0 top-0 h-full bg-gold-gradient rounded-full transition-[width] duration-100"
                style={{ width: `${progress}%` }}
              />
              {/* Thumb dot */}
              <div
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-white border-2 border-gold rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ left: `${progress}%` }}
              />
            </div>

            <span className="text-xs text-gray-400 font-mono shrink-0 w-9 tabular-nums">
              {formatTime(duration)}
            </span>
          </div>

          {/* Right: Play/Pause button */}
          <button
            onClick={toggle}
            aria-label={isPlaying ? "Pausar audio" : "Escuchar presentación de la clínica"}
            className="shrink-0 flex items-center gap-2 bg-gold-gradient text-white px-5 py-2.5 rounded-full font-bold text-sm hover:scale-105 active:scale-95 transition-transform premium-shadow whitespace-nowrap"
          >
            {isPlaying
              ? <><Pause size={16} /> Pausar</>
              : <><Play size={16} className="translate-x-px" /> Escuchar</>
            }
          </button>
        </div>
      </div>

      <audio
        ref={audioRef}
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={onEnded}
        onError={onError}
        preload="none"
      >
        <source src="/audio-presentacion.m4a" type="audio/mp4" />
      </audio>
    </section>
  );
};

export default AudioPlayer;
