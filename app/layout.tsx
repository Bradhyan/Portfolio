// app/layout.tsx
import Navbar from "@/components/layout/Navbar"; // Verifica que la ruta sea correcta
import Footer from "@/components/layout/Footer"; 
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-[#050b18]">
        {/* 1. El Navbar se queda fijo arriba */}
        <Navbar />

        {/* 2. El contenido de cada página (Home o Mini-projects) */}
        <main>{children}</main>

        {/* 3. El Footer al final */}
        <Footer />
      </body>
    </html>
  );
}