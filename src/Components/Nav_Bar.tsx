import Seccion_Agenda from "./Seccion_Agenda";
import Link from "next/link";
export default function Nav_Bar() {
  return (
      <nav className=" flex flex-row gap-3 border rounded-2xl p-2 blur-1xl bg-pink-300 font-mono text-black font-bold ">

        <a className="transition  hover:text-violet-700 hover:text-2xl delay-300" href="">Agenda de Citas</a>
        <a className="transition  hover:text-violet-700 hover:text-2xl delay-300" href="">Servicio realizado</a>
        <a className="transition  hover:text-violet-700 hover:text-2xl delay-300" href="">Pendiente por pagar</a>
      </nav>
  );
}