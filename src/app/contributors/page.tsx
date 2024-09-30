import { Format } from "@/components/Format";
import data from "@/json/contributors.json";

export default function Home() {
  return (
    <Format>
      <h1 className="text-[35px] font-semibold mb-2">Contribuidores</h1>
      <section className="flex justify-start items-center">
        {data.map((e) => (
          <a
            key={e.github}
            href={e.github}
            target="_blank"
            className="m-2 px-5 py-4 border border-[#313840] rounded-md flex items-center space-x-5 hover:bg-[#2e333c]"
          >
            <img src={e.github + ".png"} className="w-[50px] rounded-full" />
            <h1 className="font-medium">{e.name}</h1>
          </a>
        ))}
      </section>
    </Format>
  );
}
