"use client";
import { useState } from "react";
import Seccion_Pend_Pagar from "@/Components/Seccion_Pend_Pagar";
import Seccion_Agenda from "@/Components/Seccion_Agenda";
import Seccion_Serv_Rea from "@/Components/Seccion_Serv_Rea";
import Seccion_Citas_Pend from "@/Components/Seccion_Citas_Pend";



export default function Home() {
  var [val, setval1] = useState<number>(0);
  if (val == 1) {
    return (
      <main className="w-full font-mono font-bold ">
        <section className="flex flex-col items-center justify-center w-screen h-screen ">
            <nav className="lg:flex-row flex-col flex  gap-3 border rounded-2xl p-2 backdrop-blur-sm  bg-pink-400/30  font-mono text-white font-bold  border-black border-dashed">
              <button onClick={() => setval1(val = 1)} className="transition pr-3  md:border-b-4 lg:border-r-4 lg:border-b-0 hover:text-violet-700 hover:text-xl delay-300" >Agenda de Citas</button>
              <button onClick={() => setval1(val = 2)} className="transition pr-3 md:border-b-4 lg:border-r-4 lg:border-b-0 hover:text-violet-700 hover:text-xl delay-300" >Citas Pendientes</button>
              <button onClick={() => setval1(val = 3)} className="transition pr-3 md:border-b-4 lg:border-r-4 lg:border-b-0 hover:text-violet-700 hover:text-xl delay-300" >Servicio realizado</button>
              <button onClick={() => setval1(val = 4)} className="transition  hover:text-violet-700 hover:text-2xl delay-300" >Pendiente por pagar</button>
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
            <nav className="lg:flex-row flex-col flex  gap-3 border rounded-2xl p-2 backdrop-blur-sm  bg-pink-400/30  font-mono text-white font-bold  border-black border-dashed">
              <button onClick={() => setval1(val = 1)} className="transition pr-3  md:border-b-4 lg:border-r-4 lg:border-b-0 hover:text-violet-700 hover:text-xl delay-300" >Agenda de Citas</button>
              <button onClick={() => setval1(val = 2)} className="transition pr-3 md:border-b-4 lg:border-r-4 lg:border-b-0 hover:text-violet-700 hover:text-xl delay-300" >Citas Pendientes</button>
              <button onClick={() => setval1(val = 3)} className="transition pr-3 md:border-b-4 lg:border-r-4 lg:border-b-0 hover:text-violet-700 hover:text-xl delay-300" >Servicio realizado</button>
              <button onClick={() => setval1(val = 4)} className="transition  hover:text-violet-700 hover:text-2xl delay-300" >Pendiente por pagar</button>
            </nav>
          <Seccion_Citas_Pend />
        </section>
      </main>
    )
  }
  if (val == 3) {
    return (
      <main className="w-full font-mono font-bold">
        <section className="flex flex-col items-center justify-center w-screen h-screen">
            <nav className="lg:flex-row flex-col flex  gap-3 border rounded-2xl p-2 backdrop-blur-sm  bg-pink-400/30  font-mono text-white font-bold  border-black border-dashed">
              <button onClick={() => setval1(val = 1)} className="transition pr-3  md:border-b-4 lg:border-r-4 lg:border-b-0 hover:text-violet-700 hover:text-xl delay-300" >Agenda de Citas</button>
              <button onClick={() => setval1(val = 2)} className="transition pr-3 md:border-b-4 lg:border-r-4 lg:border-b-0 hover:text-violet-700 hover:text-xl delay-300" >Citas Pendientes</button>
              <button onClick={() => setval1(val = 3)} className="transition pr-3 md:border-b-4 lg:border-r-4 lg:border-b-0 hover:text-violet-700 hover:text-xl delay-300" >Servicio realizado</button>
              <button onClick={() => setval1(val = 4)} className="transition  hover:text-violet-700 hover:text-2xl delay-300" >Pendiente por pagar</button>
            </nav>
          <Seccion_Serv_Rea />
        </section>
      </main>
    )
  }
  if (val == 4) {
    return (
      <main className="w-full font-mono font-bold">
        <section className="flex flex-col items-center justify-center w-screen h-screen">
            <nav className="lg:flex-row flex-col flex  gap-3 border rounded-2xl p-2 backdrop-blur-sm  bg-pink-400/30  font-mono text-white font-bold  border-black border-dashed">
              <button onClick={() => setval1(val = 1)} className="transition pr-3  md:border-b-4 lg:border-r-4 lg:border-b-0 hover:text-violet-700 hover:text-xl delay-300" >Agenda de Citas</button>
              <button onClick={() => setval1(val = 2)} className="transition pr-3 md:border-b-4 lg:border-r-4 lg:border-b-0 hover:text-violet-700 hover:text-xl delay-300" >Citas Pendientes</button>
              <button onClick={() => setval1(val = 3)} className="transition pr-3 md:border-b-4 lg:border-r-4 lg:border-b-0 hover:text-violet-700 hover:text-xl delay-300" >Servicio realizado</button>
              <button onClick={() => setval1(val = 4)} className="transition  hover:text-violet-700 hover:text-2xl delay-300" >Pendiente por pagar</button>
            </nav>
          <Seccion_Pend_Pagar />
        </section>
      </main>
    )
  }
  else {
    return (
      <main className="w-full font-mono font-bold min-w-50">
        <section className="flex flex-col items-center justify-center w-screen h-screen">

          <div className="flex flex-col  text-white items-center gap-10 backdrop-blur-sm  bg-purple-500/30 border-4 rounded-4xl p-10 w-3/4  h-3/4 mt-10 border-black border-dashed">
            <div>
              <h1 className="text text-3xl">❤️Bienvenido a TRENZAS NOE!!🌻</h1>
            </div>
            <div>
              <h2>⚠️ Seleccione la Accion que quiere realizar desde el menu ⚠️</h2>
            </div>
              <div>
              </div>
            <nav className="lg:flex-row flex-col flex  gap-3 border rounded-2xl p-2 backdrop-blur-sm  bg-pink-400/30  font-mono text-white font-bold  border-black border-dashed">
              <button onClick={() => setval1(val = 1)} className="transition pr-3  md:border-b-4 lg:border-r-4 lg:border-b-0 hover:text-violet-700 hover:text-xl delay-300" >Agenda de Citas</button>
              <button onClick={() => setval1(val = 2)} className="transition pr-3 md:border-b-4 lg:border-r-4 lg:border-b-0 hover:text-violet-700 hover:text-xl delay-300" >Citas Pendientes</button>
              <button onClick={() => setval1(val = 3)} className="transition pr-3 md:border-b-4 lg:border-r-4 lg:border-b-0 hover:text-violet-700 hover:text-xl delay-300" >Servicio realizado</button>
              <button onClick={() => setval1(val = 4)} className="transition  hover:text-violet-700 hover:text-2xl delay-300" >Pendiente por pagar</button>
            </nav>
          </div>

        </section>
      </main>
    )
  }


}
