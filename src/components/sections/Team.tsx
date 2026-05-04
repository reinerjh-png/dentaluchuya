"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

// lucide-react doesn't export Instagram — using inline SVG
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

const TEAM = [
  {
    name: "Dr. Fernando Uchuya",
    role: "Odontólogo Principal & Director Médico",
    specialty: "Diseño de Sonrisa · Implantes · Rehabilitación",
    bio: "Fundador de la Clínica Dental Uchuya Premium en Tingo María. Con más de 10 años transformando sonrisas en la Selva Central del Perú, lidera un equipo de élite comprometido con la excelencia clínica.",
    image: "/druchuya.webp",
    imageAlt: "Dr. Fernando Uchuya – Odontólogo y fundador de la Clínica Dental Uchuya Premium en Tingo María, Huánuco",
    instagram: "https://www.instagram.com/clinicadentaluchuya_premium",
    awards: ["Odontólogo Principal", "Miembro COP", "Especialista en Rehabilitación"],
  },
  {
    name: "Dr. Roberto Hidalgo",
    role: "Cirujano Dentista – Sede Aucayacu",
    specialty: "Brackets · Invisalign · Ortopedia Maxilar",
    bio: "Especialista en ortodoncia y corrección de maloclusiones al servicio de los pacientes de Aucayacu y la región de Huánuco. Usa las técnicas más modernas para lograr sonrisas alineadas y armoniosas.",
    image: "/dcroberto.webp",
    imageAlt: "Dr. Roberto Hidalgo – Especialista en ortodoncia en la sede Aucayacu de Clínica Dental Uchuya, Huánuco",
    instagram: "https://www.instagram.com/clinicadentaluchuya_premium",
    awards: ["Especialidad en Ortodoncia", "Certificado en Invisalign", "Miembro COP"],
  },
  {
    name: "Dr. Ivan Sánchez",
    role: "Odontopediatra",
    specialty: "Odontopediatría · Carillas · Sellantes",
    bio: "El dentista infantil de referencia en Tingo María. Su enfoque lúdico y empático transforma la visita al dentista en una experiencia positiva para los niños de la Selva Central desde el primer diente.",
    image: "/dcivan.webp",
    imageAlt: "Dr. Ivan Sánchez – Odontopediatra especialista en niños en la Clínica Dental Uchuya Premium, Tingo María",
    instagram: "https://www.instagram.com/clinicadentaluchuya_premium",
    awards: ["Especialidad Odontopediatría", "Terapia de Conductos Pediátrica", "Carillas Dentales"],
  },
];

const Team = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gold font-bold tracking-[0.2em] uppercase text-sm"
          >
            Nuestros Especialistas
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold mt-4 mb-6"
          >
            Nuestros Dentistas en{" "}
            <span className="text-gold-dark">Tingo María y Aucayacu</span>
          </motion.h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Especialistas certificados con vocación de servicio, comprometidos con
            ofrecerte la mejor experiencia dental en la Selva Central del Perú.
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {TEAM.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Image Container */}
              <div className="relative h-[420px] rounded-[40px] overflow-hidden mb-8">
                <Image
                  src={member.image}
                  alt={member.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Bottom info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-gold text-xs font-bold tracking-widest uppercase mb-1">
                    {member.specialty}
                  </p>
                </div>

                {/* Social button */}
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white border border-white/20 hover:bg-gold hover:border-gold transition-all opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300"
                >
                  <InstagramIcon />
                </a>
              </div>

              {/* Text Content */}
              <div>
                <h3 className="text-2xl font-heading font-bold mb-1">{member.name}</h3>
                <p className="text-gold-dark font-semibold text-sm mb-4">{member.role}</p>
                <p className="text-gray-500 leading-relaxed text-sm mb-6">{member.bio}</p>

                {/* Awards */}
                <div className="space-y-2">
                  {member.awards.map((award) => (
                    <div key={award} className="flex items-center gap-2 text-sm text-gray-600">
                      <Award size={14} className="text-gold shrink-0" />
                      <span>{award}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
