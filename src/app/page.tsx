"use client";
import { useState } from "react";
import Seccion_Pend_Pagar from "@/Components/Seccion_Pend_Pagar";
import Seccion_Agenda from "@/Components/Seccion_Agenda";
import Seccion_Serv_Rea from "@/Components/Seccion_Serv_Rea";



export default function Home() {
  var [val, setval1] = useState<number>(0);
  if (val == 1) {
    return (
      <main className="w-full font-mono font-bold">
        <section className="flex flex-col items-center justify-center w-screen h-screen">
        <nav className=" flex flex-row gap-3 border rounded-2xl p-2 blur-1xl bg-pink-300 font-mono text-black font-bold ">
          <button onClick={() => setval1 (val =1)} className="transition  hover:text-violet-700 hover:text-2xl delay-300" >Agenda de Citas |</button>
          <button onClick={() => setval1 (val =2)} className="transition  hover:text-violet-700 hover:text-2xl delay-300" >Servicio realizado |</button>
          <button onClick={() => setval1 (val =3)} className="transition  hover:text-violet-700 hover:text-2xl delay-300" >Pendiente por pagar</button>
        </nav>
          <Seccion_Agenda />
        </section>
      </main>
    );
  }
  if (val == 2) {
    return (
      <main className="w-full font-mono font-bold">
        <section className="flex flex-col items-center justify-center w-screen h-screen">
        <nav className=" flex flex-row gap-3 border rounded-2xl p-2 blur-1xl bg-pink-300 font-mono text-black font-bold ">
          <button onClick={() => setval1 (val =1)} className="transition  hover:text-violet-700 hover:text-2xl delay-300" >Agenda de Citas |</button>
          <button onClick={() => setval1 (val =2)} className="transition  hover:text-violet-700 hover:text-2xl delay-300" >Servicio realizado |</button>
          <button onClick={() => setval1 (val =3)} className="transition  hover:text-violet-700 hover:text-2xl delay-300" >Pendiente por pagar</button>
        </nav>
          <Seccion_Serv_Rea />
        </section>
      </main>
    )
  }
  if (val == 3) {
    return (
      <main className="w-full font-mono font-bold">
        <section className="flex flex-col items-center justify-center w-screen h-screen">
        <nav className=" flex flex-row gap-3 border rounded-2xl p-2 blur-1xl bg-pink-300 font-mono text-black font-bold ">
          <button onClick={() => setval1 (val =1)} className="transition  hover:text-violet-700 hover:text-2xl delay-300" >Agenda de Citas |</button>
          <button onClick={() => setval1 (val =2)} className="transition  hover:text-violet-700 hover:text-2xl delay-300" >Servicio realizado |</button>
          <button onClick={() => setval1 (val =3)} className="transition  hover:text-violet-700 hover:text-2xl delay-300" >Pendiente por pagar</button>
        </nav>
          <Seccion_Pend_Pagar />
        </section>
      </main>
    )
  } else {
    return (
      <main className="w-full font-mono font-bold">
        <section className="flex flex-col items-center justify-center w-full h-full">
        <nav className=" flex flex-row gap-3 border rounded-2xl p-2 blur-1xl bg-pink-300 font-mono text-black font-bold ">
          <button onClick={() => setval1 (val =1)} className="transition  hover:text-violet-700 hover:text-2xl delay-300" >Agenda de Citas |</button>
          <button onClick={() => setval1 (val =2)} className="transition  hover:text-violet-700 hover:text-2xl delay-300" >Servicio realizado |</button>
          <button onClick={() => setval1 (val =3)} className="transition  hover:text-violet-700 hover:text-2xl delay-300" >Pendiente por pagar</button>
        </nav>
          <div className="text-black flex flex-col items-center gap-10 bg-pink-200 border-4 rounded-4xl p-10 w-1/2  h-3/4 mt-10 border-c">
            <div>
              <h1 className="text text-3xl">❤️Bienvenido a TRENZAS NOE!!🌻</h1>
            </div>
            <div>
              <h2>⚠️ Seleccione la Accion que quiere realizar desde el menu superior</h2>
            </div>

          </div>

        </section>
      </main>
    )
  }


}
