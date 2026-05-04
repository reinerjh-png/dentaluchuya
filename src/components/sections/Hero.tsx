"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, Play, Star } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.webp"
          alt="Clínica Dental Uchuya Premium - Instalaciones"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Multi-layer gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
      </div>

      {/* Animated background particles */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gold/40"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
            animate={{ y: [-20, 20, -20], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          {/* Pre-headline badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gold/20 backdrop-blur-md border border-gold/40 text-gold-light text-sm font-bold tracking-widest uppercase mb-8">
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              Odontología Premium · Tingo María &amp; Aucayacu
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.1] mb-6"
          >
            Tu Sonrisa{" "}
            <span className="relative">
              <span className="text-gold-gradient">Perfecta</span>
            </span>{" "}
            te espera aquí
          </motion.h1>

          {/* Sub-copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-xl text-white/80 mb-10 leading-relaxed max-w-xl"
          >
            El dentista de confianza en Tingo María y Aucayacu. Diseño de sonrisa,
            implantes, ortodoncia y blanqueamiento con tecnología de vanguardia y{" "}
            <strong className="text-gold-light">atención personalizada desde el primer día</strong>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Link
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 bg-gold-gradient text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform premium-shadow"
            >
              Agenda tu cita
              <ChevronRight size={20} />
            </Link>
            <Link
              href="#galeria"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all"
            >
              <Play size={18} className="fill-white" />
              Ver Resultados
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex items-center gap-6 flex-wrap"
          >
            {/* Star rating */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-gold text-gold" />
                ))}
              </div>
              <span className="text-white/80 text-sm font-semibold">4.9/5 · +500 reseñas</span>
            </div>
            <div className="w-px h-4 bg-white/30" />
            <span className="text-white/70 text-sm">✓ Sin lista de espera</span>
            <div className="w-px h-4 bg-white/30 hidden sm:block" />
            <span className="text-white/70 text-sm hidden sm:block">✓ Respuesta inmediata</span>
          </motion.div>
        </div>
      </div>

      {/* Floating card — bottom right */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-10 right-6 lg:right-16 z-10"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-4 bg-white/10 backdrop-blur-lg p-5 rounded-2xl border border-white/20 shadow-2xl"
        >
          <div className="w-14 h-14 bg-gold-gradient rounded-xl flex items-center justify-center shrink-0 premium-shadow">
            <span className="text-white font-bold text-xl">10+</span>
          </div>
          <div>
            <p className="text-white font-bold text-sm">Años de Excelencia</p>
            <p className="text-white/60 text-xs">10,000+ pacientes atendidos</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-white/50 text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 border-2 border-white/30 rounded-full flex items-start justify-center p-1"
        >
          <div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
