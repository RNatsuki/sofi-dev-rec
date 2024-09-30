import Link from "next/link";

export function Header() {
  return (
    <header className="w-full h-[60px] flex items-center justify-start px-3 bg-[#21252b] fixed border-b border-[#313840] z-10">
      <a className="flex items-center h-3/4 space-x-3 min-w-fit pr-1" href="/">
        <img src="/favicon.png" className="h-full" />
        <p className="text-[25px] font-bold">
          Sofi<span className="text-[red]">Dev</span>
        </p>
      </a>
      <nav className="flex items-center justify-end space-x-7 mr-2 w-full">
        <Link
          href="/courses"
          className="flex flex-col relative justify-center items-center group"
        >
          <span>
            Videos
            <i className="ri-vidicon-2-fill ml-2"></i>
          </span>
          <span className="w-0 h-[2px] bg-[red] absolute left-0 bottom-0 transition-all duration-[.3s] ease-in-out group-hover:w-full"></span>
        </Link>
        <Link
          href="https://discord.gg/tXM7hHxmZK"
          target="_blank"
          className="flex flex-col relative justify-center items-center group"
        >
          <span>
            Discord
            <i className="ri-discord-fill ml-2"></i>
          </span>
          <span className="w-0 h-[2px] bg-[red] absolute left-0 bottom-0 transition-all duration-[.3s] ease-in-out group-hover:w-full"></span>
        </Link>
        <Link
          href="/about"
          className="flex flex-col relative justify-center items-center group"
        >
          <span>
            Saber más
            <i className="ri-information-fill ml-2"></i>
          </span>
          <span className="w-0 h-[2px] bg-[red] absolute left-0 bottom-0 transition-all duration-[.3s] ease-in-out group-hover:w-full"></span>
        </Link>
        <Link
          href="/contributors"
          className="flex flex-col relative justify-center items-center group"
        >
          <span>
            Contribuidores
            <i className="ri-team-fill ml-2"></i>
          </span>
          <span className="w-0 h-[2px] bg-[red] absolute left-0 bottom-0 transition-all duration-[.3s] ease-in-out group-hover:w-full"></span>
        </Link>
      </nav>
    </header>
  );
}
