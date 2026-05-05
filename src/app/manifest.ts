import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Clínica Dental Uchuya Premium de Mailyng",
    short_name: "Dental Uchuya",
    description:
      "Especialistas en diseño de sonrisa, implantes, ortodoncia y blanqueamiento dental en Tingo María y Aucayacu, Perú.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#d4af37",
    lang: "es-PE",
    orientation: "portrait",
    categories: ["health", "medical"],
    icons: [
      {
        src: "/logouchuya.webp",
        sizes: "192x192",
        type: "image/webp",
        purpose: "any",
      },
      {
        src: "/logouchuya.webp",
        sizes: "512x512",
        type: "image/webp",
        purpose: "maskable",
      },
    ],
    shortcuts: [
      {
        name: "Agendar Cita",
        short_name: "Cita",
        description: "Agenda tu evaluación gratuita",
        url: "/#contacto",
      },
      {
        name: "Nuestras Sedes",
        short_name: "Sedes",
        description: "Encuéntranos en Tingo María y Aucayacu",
        url: "/#sedes",
      },
    ],
  };
}
