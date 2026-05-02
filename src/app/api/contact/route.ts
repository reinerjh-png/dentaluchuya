import { NextRequest, NextResponse } from "next/server";

const SEDES_PHONES: Record<string, string> = {
  "Tingo María": "51900755788",
  "Aucayacu": "51935817120",
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, sede, service, date, message } = body;

    // Basic validation
    if (!name || !phone || !sede || !service || !date) {
      return NextResponse.json(
        { error: "Todos los campos requeridos deben estar completos." },
        { status: 400 }
      );
    }

    // Build WhatsApp message
    const waMessage = `
🦷 *Nueva Solicitud de Cita – Web*

👤 *Paciente:* ${name}
📱 *Teléfono:* ${phone}
🏥 *Sede:* ${sede}
🔬 *Servicio:* ${service}
📅 *Fecha preferida:* ${date}
💬 *Mensaje:* ${message || "Sin mensaje adicional"}

_Solicitud recibida desde clinicadentaluchuya.com_
    `.trim();

    const waNumber = SEDES_PHONES[sede] ?? SEDES_PHONES["Tingo María"];
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;

    return NextResponse.json(
      {
        success: true,
        message: "Solicitud procesada correctamente.",
        waUrl,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[API /contact] Error:", error);
    return NextResponse.json(
      { error: "Error interno del servidor. Intenta nuevamente." },
      { status: 500 }
    );
  }
}
