import Card from "./Card";
export default function Seccion_Serv_Rea() {
  const color = "#8AFFE4"
  const status = true
  return (
    <div className=" flex flex-col backdrop-blur-sm  bg-purple-500/30 items-center gap-10 border-4 rounded-4xl p-8 w-3/4 h-3/4 mt-10 overscroll-contain border-black border-dashed">
      <div>
        <h1 className="text text-white text-3xl">Servicios Realizados</h1>
      </div>
      <div className="grid grid-cols-3 relative gap-5 scrollbar-thumb-purple-300 scrollbar-track-sky-100 overflow-auto ">
        <Card completado={status} numero="8298542133" numcita="1" nombre="Camila" fecha="12/4/20026" descripcion="Se peinara con trensas gruesas y cortas" color={color}></Card>
        <Card completado={status} numero="8295342645" numcita="2" nombre="Maria" fecha="13/4/20026" descripcion="Se peinara con trensas largas y finas" color={color}></Card>
        <Card completado={status} numero="8298542133" numcita="1" nombre="Camila" fecha="12/4/20026" descripcion="Se peinara con trensas gruesas y cortas" color={color}></Card>
        <Card completado={status} numero="8295342645" numcita="2" nombre="Maria" fecha="13/4/20026" descripcion="Se peinara con trensas largas y finas" color={color}></Card>
        <Card completado={status} numero="8298542133" numcita="1" nombre="Camila" fecha="12/4/20026" descripcion="Se peinara con trensas gruesas y cortas" color={color}></Card>
        <Card completado={status} numero="8295342645" numcita="2" nombre="Maria" fecha="13/4/20026" descripcion="Se peinara con trensas largas y finas" color={color}></Card>
        <Card completado={status} numero="8298542133" numcita="1" nombre="Camila" fecha="12/4/20026" descripcion="Se peinara con trensas gruesas y cortas" color={color}></Card>
        <Card completado={status} numero="8295342645" numcita="2" nombre="Maria" fecha="13/4/20026" descripcion="Se peinara con trensas largas y finas" color={color}></Card>
        <Card completado={status} numero="8298542133" numcita="1" nombre="Camila" fecha="12/4/20026" descripcion="Se peinara con trensas gruesas y cortas" color={color}></Card>
        <Card completado={status} numero="8295342645" numcita="2" nombre="Maria" fecha="13/4/20026" descripcion="Se peinara con trensas largas y finas" color={color}></Card>
      </div>
    </div>
  );
}