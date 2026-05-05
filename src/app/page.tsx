import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import Image from "next/image";
import Link from "next/link";
import { Shield, Star, Users, Award, CheckCircle } from "lucide-react";

// Below-the-fold sections loaded lazily — they only download when needed
const Services     = dynamic(() => import("@/components/sections/Services"));
const Gallery      = dynamic(() => import("@/components/sections/Gallery"));
const Team         = dynamic(() => import("@/components/sections/Team"));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"));
const FAQ          = dynamic(() => import("@/components/sections/FAQ"));
const ContactForm  = dynamic(() => import("@/components/ui/ContactForm"));
const Locations    = dynamic(() => import("@/components/sections/Locations"));

const TRUST_BADGES = [
  { icon: Shield, text: "Garantía Total", sub: "Tratamientos seguros y certificados" },
  { icon: Star, text: "4.9 / 5 Estrellas", sub: "En Google y Facebook" },
  { icon: Users, text: "10,000 Pacientes", sub: "Sonrisas transformadas" },
  { icon: Award, text: "Tecnología TOP", sub: "Equipos de última generación" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ── 1. HERO ─────────────────────────────────── */}
      <Hero />

      {/* ── 2. TRUST BAR ────────────────────────────── */}
      <div
        className="bg-white py-12 border-b border-gray-100"
        aria-label="Indicadores de confianza"
        role="region"
      >
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
      <section
        id="nosotros"
        className="py-12 md:py-24 bg-white overflow-hidden"
        aria-label="Sobre la Clínica Dental Uchuya Premium"
        itemScope
        itemType="https://schema.org/MedicalOrganization"
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16 xl:gap-24">
            {/* Image side */}
            <div className="lg:w-1/2 relative">
              <div className="relative w-full aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl max-w-md mx-auto lg:max-w-none">
                <Image
                  src="/druchuya.webp"
                  alt="Dr. Fernando Uchuya – Odontólogo Principal y Director Médico de la Clínica Dental Uchuya Premium en Tingo María"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                  itemProp="image"
                />
              </div>

              {/* Floating quote badge — hidden on mobile to prevent overflow */}
              <div className="hidden md:block absolute -bottom-6 -right-4 lg:-right-10 bg-white p-6 rounded-[36px] shadow-2xl border border-gray-100 max-w-[220px]">
                <p className="text-gold font-bold text-sm mb-2 italic leading-relaxed">
                  &ldquo;Mi compromiso es devolverte la confianza de sonreír&rdquo;
                </p>
                <p className="text-gray-900 font-bold text-xs">Dr. Fernando Uchuya</p>
                <p className="text-gray-400 text-[10px]">Odontólogo Principal</p>
              </div>

              {/* Experience badge — hidden on mobile to prevent overflow */}
              <div className="hidden md:block absolute -top-6 -left-4 lg:-left-8 bg-gold-gradient text-white p-5 rounded-3xl shadow-xl">
                <p className="text-3xl font-bold leading-none">10+</p>
                <p className="text-xs font-semibold opacity-80">Años de<br />experiencia</p>
              </div>
            </div>

            {/* Text side */}
            <div className="lg:w-1/2">
              <span className="text-gold font-bold tracking-[0.2em] uppercase text-sm">
                Sobre Nosotros
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-4 mb-5 md:mb-8 leading-tight" itemProp="name">
                El Mejor Dentista{" "}
                <span className="text-gold-dark">en Tingo María</span>{" "}
                y Aucayacu
              </h2>
              <div className="space-y-4 text-gray-600 text-base md:text-lg leading-relaxed mb-7 md:mb-10">
                <p itemProp="description">
                  La <strong className="text-gray-900">Clínica Dental Uchuya Premium</strong> es el
                  centro odontológico líder en Tingo María, Aucayacu y toda la región de Huánuco.
                  Con más de una década atendiendo a familias de la Selva Central, combinamos
                  tecnología de vanguardia con la calidez humana que mereces.
                </p>
                <p>
                  Desde diseños de sonrisa hasta implantes dentales y ortodoncia, somos el único
                  centro en la región que ofrece todos los tratamientos bajo un mismo techo, con
                  especialistas certificados y equipos digitales de última generación. Agenda hoy
                  tu <strong className="text-gray-900">evaluación gratuita</strong> en cualquiera
                  de nuestras dos sedes.
                </p>
              </div>

              {/* Checklist */}
              <ul className="space-y-3 mb-7 md:mb-12">
                {[
                  "La única clínica con 2 sedes en Tingo María y Aucayacu",
                  "Especialistas certificados con atención sin listas de espera",
                  "Planes de pago flexibles accesibles para toda la familia",
                  "Garantía total en todos nuestros tratamientos dentales",
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
                className="flex md:inline-flex items-center justify-center gap-2 bg-gold-gradient text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform premium-shadow"
              >
                Agenda tu evaluación hoy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. GALERÍA ──────────────────────────────── */}
      <div aria-label="Galería de resultados y clínica">
        <Gallery />
      </div>

      {/* ── 6. EQUIPO MÉDICO ────────────────────────── */}
      <div
        id="equipo"
        aria-label="Equipo de especialistas dentales"
      >
        <Team />
      </div>

      {/* ── 7. TESTIMONIOS ──────────────────────────── */}
      <div aria-label="Opiniones de pacientes">
        <Testimonials />
      </div>

      {/* ── 8. FAQ ──────────────────────────────────── */}
      <div
        id="faq"
        aria-label="Preguntas frecuentes sobre tratamientos dentales"
      >
        <FAQ />
      </div>

      {/* ── 9. FORMULARIO DE CONTACTO ──────────────── */}
      <div aria-label="Agendar cita en la clínica dental">
        <ContactForm />
      </div>

      {/* ── 10. SEDES ────────────────────────────────── */}
      <div aria-label="Ubicaciones de la clínica en Tingo María y Aucayacu">
        <Locations />
      </div>
    </div>
  );
}
