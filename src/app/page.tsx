import Nav_Bar from "@/Components/Nav_Bar";
import Seccion_Agenda from "@/Components/Seccion_Agenda";
import Seccion_Serv_Rea from "@/Components/Seccion_Serv_Rea";

export default function Home() {
  return (
    <main className="w-full font-mono font-bold">
      <section className="flex flex-col items-center justify-center w-screen h-screen">
        <Nav_Bar />
        <Seccion_Agenda/>
      </section>
    </main>
  );
}
