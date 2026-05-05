"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, CheckCircle2, Loader2, Phone, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

const formSchema = z.object({
  name:    z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
  phone:   z.string().regex(/^[0-9]{9}$/, "El teléfono debe tener exactamente 9 números"),
  sede:    z.string().min(1, "Selecciona una sede"),
  service: z.string().min(1, "Selecciona un servicio"),
  date:    z.string().min(1, "Selecciona una fecha preferida"),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const SERVICES = [
  "Diseño de Sonrisa",
  "Implantes Dentales",
  "Ortodoncia (Brackets)",
  "Blanqueamiento Dental",
  "Odontopediatría",
  "Limpieza Profunda",
  "Rehabilitación Oral",
  "Extracción Dental",
  "Consulta General",
];

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [apiError, setApiError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(formSchema) });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setApiError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        setApiError(json.error ?? "Error al enviar. Intenta nuevamente.");
        return;
      }

      setIsSuccess(true);
      reset();

      // On mobile, window.open inside async/setTimeout is often blocked by popup blockers.
      // window.location.href is much more reliable for deep-linking to the WhatsApp app.
      window.location.href = json.waUrl;
      
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    } catch {
      setApiError("Error de conexión. Por favor intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all bg-white text-gray-900 placeholder:text-gray-400";

  return (
    <section id="contacto" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative bg shape */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 -skew-x-12 translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-bold tracking-[0.2em] uppercase text-sm">
            Reserva Online
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-4">
            Agenda tu <span className="text-gold-dark">Evaluación Gratuita</span>
          </h2>
          <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto">
            Completa el formulario y te contactaremos en menos de 30 minutos para confirmar tu cita.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
          {/* ── Info Sidebar ─────────────────────────── */}
          <div className="md:w-2/5 bg-gold-gradient p-10 md:p-12 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-heading font-bold mb-4 leading-tight">
                Tu sonrisa perfecta <br /> comienza aquí
              </h3>
              <p className="text-white/80 mb-10 leading-relaxed">
                Respuesta inmediata vía WhatsApp. Sin lista de espera.
              </p>

              <ul className="space-y-5">
                {[
                  { icon: CheckCircle2, text: "Evaluación personalizada sin costo" },
                  { icon: CheckCircle2, text: "Tecnología digital de última generación" },
                  { icon: CheckCircle2, text: "Presupuesto transparente" },
                  { icon: CheckCircle2, text: "Planes de pago flexibles" },
                ].map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                      <Icon size={16} />
                    </div>
                    <span className="text-sm leading-snug">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact info */}
            <div className="mt-10 pt-8 border-t border-white/20 space-y-4">
              <div className="flex gap-3 text-sm">
                <Phone size={16} className="shrink-0 mt-0.5 opacity-70" />
                <div>
                  <p className="font-bold">Tingo María</p>
                  <a href="tel:+51900755788" className="opacity-70 hover:opacity-100">+51 900 755 788</a>
                </div>
              </div>
              <div className="flex gap-3 text-sm">
                <Phone size={16} className="shrink-0 mt-0.5 opacity-70" />
                <div>
                  <p className="font-bold">Aucayacu</p>
                  <a href="tel:+51935817120" className="opacity-70 hover:opacity-100">+51 935 817 120</a>
                </div>
              </div>
              <div className="flex gap-3 text-sm">
                <Clock size={16} className="shrink-0 mt-0.5 opacity-70" />
                <span className="opacity-70">Lun – Sáb: 9:00 AM – 8:00 PM</span>
              </div>
              <div className="flex gap-3 text-sm">
                <MapPin size={16} className="shrink-0 mt-0.5 opacity-70" />
                <span className="opacity-70">2 sedes en la Selva Central</span>
              </div>
            </div>
          </div>

          {/* ── Form ─────────────────────────────────── */}
          <div className="md:w-3/5 p-8 md:p-12">
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full min-h-[400px] flex flex-col items-center justify-center text-center"
              >
                <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-2xl font-bold mb-2">¡Solicitud Enviada!</h3>
                <p className="text-gray-500">
                  Te redirigimos a WhatsApp para finalizar tu cita…
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                {apiError && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                    {apiError}
                  </div>
                )}

                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-gray-700">Nombre Completo *</label>
                    <input {...register("name")} placeholder="Ej: María García" className={inputClass} />
                    {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-gray-700">Teléfono / WhatsApp *</label>
                    <input 
                      {...register("phone")} 
                      placeholder="999999999" 
                      type="tel" 
                      maxLength={9}
                      onInput={(e) => {
                        e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '');
                      }}
                      className={inputClass} 
                    />
                    {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-gray-700">Sede *</label>
                    <select {...register("sede")} className={inputClass}>
                      <option value="">Selecciona sede</option>
                      <option value="Tingo María">Tingo María (Principal)</option>
                      <option value="Aucayacu">Aucayacu</option>
                    </select>
                    {errors.sede && <p className="text-red-500 text-xs">{errors.sede.message}</p>}
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-gray-700">Servicio *</label>
                    <select {...register("service")} className={inputClass}>
                      <option value="">Selecciona tratamiento</option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    {errors.service && <p className="text-red-500 text-xs">{errors.service.message}</p>}
                  </div>
                </div>

                {/* Row 3 */}
                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-gray-700">Fecha Preferida *</label>
                  <input
                    type="date"
                    {...register("date")}
                    min={new Date().toISOString().split("T")[0]}
                    className={inputClass}
                  />
                  {errors.date && <p className="text-red-500 text-xs">{errors.date.message}</p>}
                </div>

                {/* Row 4 */}
                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-gray-700">Mensaje (Opcional)</label>
                  <textarea
                    {...register("message")}
                    placeholder="Cuéntanos más sobre tu caso o cualquier duda que tengas…"
                    rows={3}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full bg-gold-gradient text-white py-4 rounded-xl font-bold text-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 premium-shadow disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Procesando…
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Reservar mi Cita Gratis
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-gray-400">
                  Al enviar, aceptas que nos comuniquemos contigo por WhatsApp para confirmar tu cita.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
