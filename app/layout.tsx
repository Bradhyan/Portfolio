import "./globals.css";

export const metadata = {
  title: "Brad | Software Engineer",
  description: "Fullstack engineer con mentalidad de infraestructura.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}