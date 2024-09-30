"use client";

import { useEffect, useState } from "react";

interface PlayerProps {
  id: string;
  element: any;
}

export function Player({ id, element }: PlayerProps) {
  const URL = "https://www.youtube.com/embed/" + id;

  return (
    <section
      className="w-full h-full fixed z-20 flex justify-center items-center bg-[#000000c2] left-0 top-0"
      onClick={() => element(false)}
    >
      <article className="w-[90%] max-w-[1000px] h-[600px] bg-black border border-[#313840] rounded-xl overflow-hidden">
        <iframe src={URL} className="w-full h-full" allowFullScreen></iframe>
      </article>
    </section>
  );
}
