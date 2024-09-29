"use client";

import { useEffect, useState } from "react";

interface CardProps {
  title?: string;
  info?: string;
  click?: () => void | any;
  imgRoute?: string;
}

export function Card({ title, info, click, imgRoute }: CardProps) {
  const [elementRender, setElementRender] = useState(<></>);

  useEffect(() => {
    if (imgRoute && info) {
      setElementRender(
        <>
          <div className="w-full flex justify-center items-center relative group overflow-hidden">
            <div className="w-full h-0 absolute bottom-0 left-0 transition-all duration-[.4s] ease-in-out opacity-0 group-hover:backdrop-blur-[30px] group-hover:h-full group-hover:opacity-100 flex flex-col justify-center items-center space-y-4">
              <p className="w-full text-white text-center font-semibold">
                {info}
              </p>
              {/* esto tiene que ser un botón pero tienes que configurar bien los estilos del reproductor de video */}
              <div
                className="bg-white text-red-800 px-5 py-1 text-lg rounded-md flex  justify-center items-center cursor-pointer transition-all duration-[.2s] ease-linear hover:scale-90"
                onClick={click}
              >
                Ver Video
              </div>
            </div>
            <img src={`/images/${imgRoute}`} className="w-full" />
          </div>
        </>
      );
    } else {
      if (info) {
        setElementRender(<p className="w-full text-gray-800 p-4">{info}</p>);
      }
    }
  }, [info, imgRoute]);

  return (
    <section className="flex flex-col items-center w-full max-w-[480px] h-auto overflow-hidden rounded-lg shadow-[0_5px_15px_#dbdbdb] cursor-default transition-all duration-[.2s] ease-in-out hover:scale-105 hover:shadow-[0_10px_20px_#d0d0d0]">
      <article className="w-full px-3 py-2 bg-gradient-to-r from-[#A72234] to-[#352020]">
        <h1 className="text-lg font-medium">{title}</h1>
      </article>
      <article className="flex w-full flex-col items-center justify-center bg-white">
        {elementRender}
      </article>
    </section>
  );
}
