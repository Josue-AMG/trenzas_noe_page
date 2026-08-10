import Table from "./Table";
export default function Seccion_Serv_Rea() {
  return (
      <div className=" text-black flex flex-col items-center gap-10 bg-pink-200 border-4 rounded-4xl p-10   h-3/4 mt-10 overscroll-contain">
        <div>
        <h1 className="text text-3xl">Servicios Realizados</h1>
        </div>
        <Table></Table>
      </div>
  );
}