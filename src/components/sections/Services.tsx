"use client";

import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, Heart, Zap, Star, UserCheck } from "lucide-react";

const SERVICES = [
  {
    title: "Diseño de Sonrisa",
    description: "Personalizamos cada detalle para lograr la sonrisa perfecta que siempre soñaste.",
    icon: Sparkles,
  },
  {
    title: "Implantes Dentales",
    description: "Recupera la funcionalidad y estética con tecnología de carga inmediata.",
    icon: ShieldCheck,
  },
  {
    title: "Ortodoncia Estética",
    description: "Alineamos tu sonrisa con sistemas discretos y resultados eficientes.",
    icon: Zap,
  },
  {
    title: "Blanqueamiento",
    description: "Brillo natural y duradero con los mejores materiales del mercado.",
    icon: Star,
  },
  {
    title: "Odontopediatría",
    description: "Cuidado especializado para los más pequeños en un ambiente de confianza.",
    icon: Heart,
  },
  {
    title: "Rehabilitación Oral",
    description: "Soluciones integrales para devolver la salud y armonía a tu boca.",
    icon: UserCheck,
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold font-bold tracking-[0.2em] uppercase text-sm"
          >
            Nuestras Especialidades
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-heading font-bold mt-4 mb-6"
          >
            Servicios Dentales de <span className="text-gold-dark">Clase Mundial</span>
          </motion.h2>
          <div className="w-20 h-1 bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-3xl premium-shadow hover:translate-y-[-10px] transition-all duration-300 group border border-gray-100"
            >
              <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-gold-gradient transition-colors">
                <service.icon className="text-gold group-hover:text-white transition-colors" size={32} />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
