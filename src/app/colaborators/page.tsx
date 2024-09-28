"use client";

import Link from "next/link";
import Image from "next/image";

// Componente para mostrar colaboradores
const Colaborators = () => {
  // Lista de colaboradores con sus datos (nombre, imagen, enlace)
  const collaborators = [
    {
      name: "Rodrigo Ibarra",
      image: "/assets/colaborators/ibarra.jpg", // Cambia esto con la ruta real de la imagen
      portfolio: "https://github.com/RNatsuki",
    },
  ];

  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-8 text-gray-800">
          Colaboradores
        </h2>
        <div className="grid gap-8 lg:grid-cols-3">
          {collaborators.map((collaborator, index) => (
            <Link key={index} href={collaborator.portfolio} target="_blank">
              <div className="flex flex-col items-center text-center p-4 border rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300">
                <Image
                  src={collaborator.image}
                  alt={collaborator.name}
                  width={150}
                  height={150}
                  className="rounded-full mb-2"
                />
                <h3 className="text-lg font-semibold text-gray-800">{collaborator.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Colaborators;
