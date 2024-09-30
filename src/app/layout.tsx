import "./globals.css";
import "remixicon/fonts/remixicon.css";
import "@fontsource-variable/montserrat";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <meta
        name="description"
        content="Aprende a crear aplicaciones web con Sofi Dev, de manera gratuita y sencilla."
      />
      <link rel="shortcut icon" href="/favicon.png" type="image/x-png" />
      <title>Aprende con Sofi</title>

      <body className="flex flex-col h-[100vh] m-0 p-0 bg-[#282c34] text-white font-montserrat">
        {children}
      </body>
    </html>
  );
}
