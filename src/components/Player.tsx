"use client";

interface PlayerProps {
  id: string;
  element: any;
}

export function Player({ id, element }: PlayerProps) {
  const URL = "https://pub-403c0d295eb047658388f484e5c9a245.r2.dev/" + id;
  const FormatIcon =
    "w-[25px] h-[25px] text-[20px] flex justify-center items-center cursor-pointer";

  return (
    <section className="w-full h-full fixed z-20 flex justify-center items-center left-0 top-0">
      <div
        className="w-full h-full bg-[#000000c2]"
        onClick={() => element(false)}
      ></div>
      <article className="w-[90%] max-w-[1000px] rounded-lg overflow-hidden absolute">
        <video src={URL} className="w-full h-full"></video>
        <div
          id="modal"
          className="absolute bottom-0 w-full h-[40px] flex justify-start items-center px-3 space-x-4"
        >
          <i className={`ri-play-fill ${FormatIcon}`}></i>
          <i className={`ri-volume-up-fill ${FormatIcon}`}></i>
          <nav className="w-full flex justify-end items-center">
            <i className={`ri-fullscreen-line ${FormatIcon}`}></i>
          </nav>
        </div>
      </article>
    </section>
  );
}
