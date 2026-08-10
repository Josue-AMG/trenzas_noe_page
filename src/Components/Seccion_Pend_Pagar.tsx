import Table from "./Table";
export default function Seccion_Pend_Pagar() {
  return (
      <div className="text-black flex flex-col items-center gap-10 bg-pink-200 border-4 rounded-4xl p-10 w-1/2  h-3/4 mt-10 border-c">
        <div>
        <h1 className="text text-3xl">Servicios pendientes por pagar</h1>
        </div>
        <Table></Table>
      </div>
  );
}