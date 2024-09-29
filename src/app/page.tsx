"use client";

import Link from "next/link";
import Image from "next/image";
import AvatarAlternative from "@/images/Avatar-Alternative.png";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { useRouter } from "next/navigation";
export default function LandingPage() {
  const { push } = useRouter();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="px-4 lg:px-6 h-14 flex items-center shadow-md bg-white">
        <Link className="flex items-center justify-center" href="#">
          <Image
            src={AvatarAlternative}
            alt="Logo SofiDev"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="ml-2 text-2xl font-extrabold text-gray-800">
            Sofi<span className="text-red-400">Dev</span>
          </span>
        </Link>

        {/* Contenedor para centrar el texto */}
        <div className="flex-1 flex justify-center">
          <p className="text-sm text-gray-600">
            De la
            <Link
              className="text-purple-500 hover:underline underline-offset-4 transition-colors"
              href="/colaborators"
            >
              {" "}
              comunidad{" "}
            </Link>
            para ti ❤️
          </p>
        </div>

        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium text-gray-600 hover:text-purple-500 hover:underline underline-offset-4 transition-colors"
            href="#about"
          >
            Sobre el Curso
          </Link>
          <Link
            className="text-sm font-medium text-gray-600 hover:text-purple-500 hover:underline underline-offset-4 transition-colors"
            href="/courses"
          >
            Videos
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-[#A72234] to-[#000000]">
          <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center text-white md:flex-row md:text-left md:items-center">
            {/* Contenedor para el texto */}
            <div className="md:w-1/2 md:pr-8 animate-fade-in">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-4">
                Aprende Desarrollo Web con Sofi
                <span className="text-red-400">Dev</span>
              </h1>
              <p className="max-w-xl text-lg sm:text-xl mb-8">
                Curso gratuito de desarrollo web con videos prácticos y fáciles
                de seguir.
              </p>
              <Button
                onClick={() => push("/courses")}
                size="lg"
                className="bg-white text-red-800 hover:bg-gray-100 hover:shadow-lg transition-all duration-300"
              >
                Comienza Ahora - ¡Es Gratis!
              </Button>
            </div>

            {/* Contenedor para la imagen */}
            <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
              <Image
                src={AvatarAlternative}
                alt="Avatar SofiDev"
                width={300}
                height={300}
                className="rounded-full"
              />
            </div>
          </div>
        </section>

        <section
          id="about"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-50"
        >
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-gray-800">
              Sobre el Curso
            </h2>
            <div className="grid gap-8 lg:grid-cols-3">
              {["100% Gratuito", "Videos Prácticos", "Comunidad Activa"].map(
                (title, i) => (
                  <Card
                    key={i + title}
                    title={title}
                    info={
                      i === 0
                        ? "Accede a todo el contenido sin costo alguno. ¡Aprende a tu propio ritmo!"
                        : i === 1
                        ? "Aprende con tutoriales paso a paso y ejemplos del mundo real."
                        : "Únete a otros estudiantes en nuestra comunidad para compartir y aprender juntos."
                    }
                  />
                )
              )}
            </div>
          </div>
        </section>

        {/* Otras secciones permanecen igual */}
      </main>

      <footer className="flex flex-col sm:flex-row items-center justify-between py-6 w-full px-4 md:px-6 border-t bg-white shadow-inner">
        <p className="text-xs text-gray-500">
          © 2024 SofiDev. Todos los derechos reservados.
        </p>
        <nav className="flex gap-4 sm:gap-6">
          <Link
            className="text-xs text-gray-500 hover:text-purple-500 hover:underline underline-offset-4 transition-colors"
            href="#"
          >
            Términos de Servicio
          </Link>
          <Link
            className="text-xs text-gray-500 hover:text-purple-500 hover:underline underline-offset-4 transition-colors"
            href="#"
          >
            Política de Privacidad
          </Link>
        </nav>
      </footer>
    </div>
  );
}
