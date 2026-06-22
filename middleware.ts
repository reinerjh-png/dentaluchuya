import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    // Ignorar la ruta de la propia página de suspensión y rutas del sistema
    if (
        request.nextUrl.pathname === '/indexSuspendido.html' ||
        request.nextUrl.pathname.startsWith('/_next')
    ) {
        return;
    }

    // Redirigir todo lo demás a la página de suspensión
    const url = new URL('/indexSuspendido.html', request.url);
    return NextResponse.redirect(url, { status: 302 }); // 302 es temporal
}

// Especificar en qué rutas debe ejecutarse (todas excepto las del sistema)
export const config = {
    matcher: '/((?!_next/static|_next/image|favicon.ico|indexSuspendido.html).*)',
};