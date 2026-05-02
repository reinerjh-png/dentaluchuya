"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Servicios", href: "#servicios" },
    { name: "Galería", href: "#galeria" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Equipo", href: "#equipo" },
    { name: "Sedes", href: "#sedes" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-3 border-b border-gray-100"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Crown + Tooth SVG Logo */}
            <div className="relative w-11 h-11 flex items-center justify-center">
              <svg viewBox="0 0 48 48" className="w-full h-full" fill="none">
                <defs>
                  <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#d4af37" />
                    <stop offset="50%" stopColor="#f3e5ab" />
                    <stop offset="100%" stopColor="#b8860b" />
                  </linearGradient>
                </defs>
                {/* Crown */}
                <path
                  d="M8 20 L14 12 L24 18 L34 12 L40 20 L38 28 H10 Z"
                  fill="url(#goldGrad)"
                  strokeLinejoin="round"
                />
                {/* Tooth body */}
                <path
                  d="M12 28 C12 28 10 38 14 42 C16 44 18 40 20 38 C21 36 23 36 24 36 C25 36 27 36 28 38 C30 40 32 44 34 42 C38 38 36 28 36 28 Z"
                  fill="url(#goldGrad)"
                />
                {/* Crown jewel dots */}
                <circle cx="14" cy="22" r="2" fill="white" opacity="0.8" />
                <circle cx="24" cy="19" r="2" fill="white" opacity="0.8" />
                <circle cx="34" cy="22" r="2" fill="white" opacity="0.8" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span
                className={cn(
                  "font-heading font-bold text-xl leading-tight tracking-wider transition-colors",
                  isScrolled ? "text-gray-900" : "text-white drop-shadow-md"
                )}
              >
                UCHUYA
              </span>
              <span className="text-[10px] font-semibold tracking-[0.25em] text-gold-dark uppercase">
                Dental Premium
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-semibold hover:text-gold-dark transition-colors relative group",
                  isScrolled ? "text-gray-700" : "text-white/90"
                )}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Desktop CTA buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+51900755788"
              className={cn(
                "flex items-center gap-2 text-sm font-semibold transition-colors",
                isScrolled ? "text-gray-600" : "text-white/80"
              )}
            >
              <Phone size={16} className="text-gold" />
              900 755 788
            </a>
            <Link
              href="#contacto"
              className="bg-gold-gradient text-white px-7 py-2.5 rounded-full font-bold text-sm hover:scale-105 transition-transform premium-shadow"
            >
              Agendar Cita
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className={cn(
              "lg:hidden p-2 rounded-xl transition-colors",
              isScrolled ? "text-gray-900" : "text-white"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-white z-40 lg:hidden flex flex-col"
          >
            {/* Mobile header */}
            <div className="flex justify-between items-center px-6 py-5 border-b border-gray-100">
              <span className="font-heading font-bold text-xl tracking-wider">UCHUYA <span className="text-gold-dark text-sm">DENTAL</span></span>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X size={28} />
              </button>
            </div>

            {/* Mobile links */}
            <div className="flex flex-col flex-1 items-start justify-center px-10 gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-3xl font-heading font-bold text-gray-900 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="px-10 pb-12 space-y-4">
              <Link
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full bg-gold-gradient text-white px-8 py-4 rounded-full font-bold text-lg text-center"
              >
                Agendar Cita
              </Link>
              <a
                href="tel:+51900755788"
                className="flex items-center justify-center gap-2 text-gray-600 font-semibold"
              >
                <Phone size={18} className="text-gold" />
                +51 900 755 788
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
