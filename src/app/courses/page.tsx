"use client";

import { Card } from "@/components/ui/Card";
import { useState } from "react";
import VideoPlayer from "@/components/player/VideoPlayer";

interface Video {
  id: string;
  title: string;
  description: string;
}

const videos: Video[] = [
  {
    id: "1",
    title: "Introducción a HTML",
    description:
      "Aprende los fundamentos de HTML y cómo estructurar tu primera página web.",
  },
];

export default function VideoSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null); // Estado para el ID del video seleccionado

  const openVideoModal = (id: string) => {
    setSelectedVideoId(id); // Establecer el ID del video seleccionado
    setIsOpen(true);
  };

  const getVideoSrc = (id: string) => {
    // Retornar la ruta del video según el ID
    return `/assets/videos/${id}.mp4`;
  };

  const getThumbnailSrc = (id: string) => {
    // Retornar la ruta de la miniatura según el ID
    return `/assets/thumbnails/${id}.png`;
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl font-semibold tracking-tight text-center mb-8 text-gray-800">
          Videos del Curso
        </h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {videos.map((video) => (
            <Card
              title={video.title}
              click={() => openVideoModal(video.id)}
              key={video.id}
              info={video.description}
              imgRoute="vid-1.webp"
            />
          ))}
        </div>
      </div>
      {/* Modal */}
      <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="bg-white w-full max-w-3xl p-4 md:p-8 rounded-lg shadow-lg">
          <button
            onClick={() => {
              setIsOpen(false);
              setSelectedVideoId(null); // Limpiar el ID del video al cerrar el modal
            }}
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          {selectedVideoId && (
            <VideoPlayer
              src={getVideoSrc(selectedVideoId)} // Usar el ID seleccionado para construir la ruta del video
              thumbnail={getThumbnailSrc(selectedVideoId)} // Usar el ID seleccionado para construir la ruta de la miniatura
            />
          )}
        </div>
      </div>
    </section>
  );
}
