"use client";

import { Format } from "@/components/Format";
import { useState } from "react";
import front from "@/json/videos/frontend.json";
import Player from "@/components/player-cdn/VideoPlayer";

export default function Home() {
  const [modalVid, setModalVid] = useState<boolean>(false);
  const [idVid, setIdVid] = useState<string>("");

  const ImagesURL = "https://i.ytimg.com/vi/";

  // Función para cerrar el modal
  const closeModal = () => {
    setModalVid(false);
    setIdVid("");
  };

  // Función para manejar el cierre al hacer clic fuera del modal
  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal(); // Cerrar el modal si se hace clic en el fondo
    }
  };

  return (
    <Format>
      <h1 className="text-[35px] font-semibold mb-2">Curso Frontend</h1>
      <section className="w-full flex flex-wrap">
        {front.map((e) => (
          <article
            key={e.id_video + e.id_image}
            className="w-[95%] max-w-[400px] h-[250px] border border-[#313840] rounded-md m-2 overflow-hidden group relative"
          >
            <img src={ImagesURL + e.id_image} className="w-full h-full" />
            <div className="w-full h-full absolute bottom-0 left-0 opacity-0 bg-[#000000c7] backdrop-blur-[8px] transition-all duration-[.3s] ease-linear group-hover:opacity-100 flex justify-center items-center">
              <span
                className="w-[50px] h-[50px] border-[3px] border-white rounded-full cursor-pointer flex justify-center items-center"
                onClick={() => {
                  setIdVid(e.id_video);
                  setModalVid(true);
                }}
              >
                <i className="ri-play-fill text-[30px] ml-1"></i>
              </span>
            </div>
          </article>
        ))}
      </section>

      {/* Modal */}
      {modalVid && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={handleModalClick}
        >
          <div className="relative w-full max-w-3xl p-4 bg-transparent rounded-lg">
            <Player src={idVid} />
          </div>
        </div>
      )}
    </Format>
  );
}
