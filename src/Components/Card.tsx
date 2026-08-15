
type Props = {
  color: string;
  numcita:string;
  nombre: string;
  numero: string;
  fecha: string;
  descripcion: string;
  completado: boolean;
}

export default function Card({color,numcita,nombre,numero,fecha,descripcion,completado}:Props) {

  if (completado == true) {
      return (
      <div className="card  w-80 h-80 p-5 border-3 text-black  border-blue-400  hover:border-10 backdrop-blur-4xl bg-white/30"  style={{borderColor: color}}>
        <div className="flex flex-col items-stretch gap-5">
        <h1 className="text text-1xl">Cita #{numcita}</h1>
        <h1 className="text text-1xl">Nombre: {nombre}</h1>
        <h1 className="text text-1xl">Numero: {numero}</h1>
        <h1 className="text text-1xl">Fecha de Agenda: {fecha} </h1>
        <h1 className="text text-1xl">Descripcion: {descripcion}</h1>
        </div>
      </div>
  );
  }else{
      return (
      <div className="card  w-80 h-80 p-5 border-3 text-black  border-blue-400  hover:border-10 backdrop-blur-4xl bg-white/30"  style={{borderColor: color}}>
        <div className="flex flex-col items-stretch gap-5">
        <h1 className="text text-1xl">Cita #{numcita}</h1>
        <h1 className="text text-1xl">Nombre: {nombre}</h1>
        <h1 className="text text-1xl">Numero: {numero}</h1>
        <h1 className="text text-1xl">Fecha de Agenda: {fecha} </h1>
        <h1 className="text text-1xl">Descripcion: {descripcion}</h1>
        </div>
        <div className=" flex items-center">
          <button className="button border-2 bg-green-300 border-black">Completar</button>
        </div>
        
      </div>
  );
  }

}