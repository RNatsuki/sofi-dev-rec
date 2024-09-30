"use client";

import { useEffect, useState } from "react";
import { Header } from "./Header";
import Link from "next/link";

interface FormatProps {
  children?: React.ReactNode;
  viewMain?: boolean;
}

export function Format({ children, viewMain }: FormatProps) {
  const [MainInfo, setMainInfo] = useState<"hidden" | "flex">("hidden");

  useEffect(() => {
    if (viewMain) return setMainInfo("flex");
    else return setMainInfo("hidden");
  }, [viewMain]);

  return (
    <>
      <Header />
      <main className="mt-[60px] flex flex-col justify-center items-center">
        <section
          className={`w-full py-32 bg-gradient-to-tr to-black from-[#670A0A] ${MainInfo} justify-center items-center space-x-36`}
        >
          <article className="flex flex-col w-full max-w-[550px]">
            <h1 className="text-[45px] font-semibold">
              Aprende Desarrollo Web con{" "}
              <span className="text-transparent text-border-elements text-[70px] italic">
                SofiDev
              </span>
            </h1>

            <p className="text-[18px] mt-5 mb-10">
              Curso gratuito de desarrollo web con videos prácticos y fáciles de
              seguir.
            </p>

            <div>
              <Link
                href="/courses"
                className="bg-white w-fit px-5 h-[50px] text-black rounded-[4px] flex justify-center items-center transition-all duration-[.3s] ease-in-out hover:opacity-50"
              >
                Comenzar Curso
                <i className="ri-external-link-line ml-2"></i>
              </Link>
            </div>
          </article>
          <img src="/favicon.png" className="h-[300px]" />
        </section>
        <div className="w-[90%] max-w-[1500px] flex flex-col mt-8">
          {children}
        </div>
      </main>
    </>
  );
}
