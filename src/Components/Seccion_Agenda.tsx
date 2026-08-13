import Form_Agenda from "./Form_Agenda";
export default function Seccion_Agenda() {
  return (
      <div className="text-black flex flex-col items-center gap-10 bg-pink-200 border-4 rounded-4xl p-10 w-3/4  h-3/4 mt-10 border-black border-dashed">
        <div>
        <h1 className="text text-3xl">Agenda de Cita</h1>
        </div>
        <Form_Agenda/>
      </div>
  );
}