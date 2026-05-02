import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import FAQ from "@/components/sections/FAQ";
import Locations from "@/components/sections/Locations";
import Team from "@/components/sections/Team";
import Testimonials from "@/components/sections/Testimonials";
import ContactForm from "@/components/ui/ContactForm";
import Image from "next/image";
import Link from "next/link";
import { Shield, Star, Users, Award, CheckCircle } from "lucide-react";

const TRUST_BADGES = [
  { icon: Shield, text: "Garantía Total", sub: "Tratamientos seguros y certificados" },
  { icon: Star, text: "4.9 / 5 Estrellas", sub: "En Google y Facebook" },
  { icon: Users, text: "5,000 Pacientes", sub: "Sonrisas transformadas" },
  { icon: Award, text: "Tecnología TOP", sub: "Equipos de última generación" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ── 1. HERO ─────────────────────────────────── */}
      <Hero />

      {/* ── 2. TRUST BAR ────────────────────────────── */}
      <div className="bg-white py-12 border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {TRUST_BADGES.map(({ icon: Icon, text, sub }) => (
              <div
                key={text}
                className="flex items-center gap-4 group cursor-default"
              >
                <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center text-gold group-hover:bg-gold-gradient group-hover:text-white transition-all duration-300 shrink-0">
                  <Icon size={26} />
                </div>
                <div>
                  <p className="font-bold text-sm md:text-base text-gray-900">{text}</p>
                  <p className="text-xs text-gray-400 leading-snug">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 3. SERVICIOS ────────────────────────────── */}
      <Services />

      {/* ── 4. SOBRE NOSOTROS ───────────────────────── */}
      <section id="nosotros" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16 xl:gap-24">
            {/* Image side */}
            <div className="lg:w-1/2 relative">
              <div className="relative w-full aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl max-w-md mx-auto lg:max-w-none">
                <Image
                  src="/doctor.png"
                  alt="Dra. Meilyng Uchuya - Directora de la Clínica Dental Uchuya Premium"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Floating quote badge */}
              <div className="absolute -bottom-6 -right-4 lg:-right-10 bg-white p-6 rounded-[36px] shadow-2xl border border-gray-100 max-w-[220px]">
                <p className="text-gold font-bold text-sm mb-2 italic leading-relaxed">
                  &ldquo;Mi compromiso es devolverte la confianza de sonreír&rdquo;
                </p>
                <p className="text-gray-900 font-bold text-xs">Dra. Meilyng Uchuya</p>
                <p className="text-gray-400 text-[10px]">Directora Médica</p>
              </div>

              {/* Experience badge */}
              <div className="absolute -top-6 -left-4 lg:-left-8 bg-gold-gradient text-white p-5 rounded-3xl shadow-xl">
                <p className="text-3xl font-bold leading-none">10+</p>
                <p className="text-xs font-semibold opacity-80">Años de<br />experiencia</p>
              </div>
            </div>

            {/* Text side */}
            <div className="lg:w-1/2">
              <span className="text-gold font-bold tracking-[0.2em] uppercase text-sm">
                Sobre Nosotros
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mt-4 mb-8 leading-tight">
                Liderando la{" "}
                <span className="text-gold-dark">Excelencia Dental</span>{" "}
                en la Selva Central
              </h2>
              <div className="space-y-5 text-gray-600 text-lg leading-relaxed mb-10">
                <p>
                  En Clínica Dental Uchuya Premium, no solo cuidamos dientes —{" "}
                  <strong className="text-gray-900">transformamos vidas</strong>. Con más de una
                  década de experiencia, nos hemos consolidado como el centro odontológico de
                  referencia en Tingo María y Aucayacu.
                </p>
                <p>
                  Nuestra filosofía combina la calidez humana con la precisión tecnológica,
                  asegurando que cada paciente reciba un trato digno de la más alta exigencia.
                  Agenda hoy y siente la diferencia desde el primer minuto.
                </p>
              </div>

              {/* Checklist */}
              <ul className="space-y-3 mb-12">
                {[
                  "Tecnología digital de última generación",
                  "Atención personalizada sin listas de espera",
                  "Planes de pago flexibles y accesibles",
                  "Garantía en todos nuestros tratamientos",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle size={18} className="text-gold shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-12 pt-8 border-t border-gray-100">
                {[
                  { value: "98%", label: "Satisfacción" },
                  { value: "2 Sedes", label: "A tu alcance" },
                  { value: "10+", label: "Años activos" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <h4 className="text-3xl font-bold text-gold mb-1">{stat.value}</h4>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                href="#contacto"
                className="inline-flex items-center gap-2 bg-gold-gradient text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform premium-shadow"
              >
                Agenda tu evaluación gratis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. GALERÍA ──────────────────────────────── */}
      <Gallery />

      {/* ── 6. EQUIPO MÉDICO ────────────────────────── */}
      <div id="equipo">
        <Team />
      </div>

      {/* ── 7. TESTIMONIOS ──────────────────────────── */}
      <Testimonials />

      {/* ── 8. FAQ ──────────────────────────────────── */}
      <div id="faq">
        <FAQ />
      </div>

      {/* ── 9. SEDES ────────────────────────────────── */}
      <Locations />

      {/* ── 10. FORMULARIO DE CONTACTO ──────────────── */}
      <ContactForm />
    </div>
  );
}
