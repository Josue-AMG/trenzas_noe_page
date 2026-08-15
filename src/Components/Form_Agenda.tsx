export default function Form_Agenda() {
    return (
        <div className="flex flex-col text-wh items-center gap-10">
            <section className="  flex flex-col w-100 gap-5">
                <section>
                    <label htmlFor="nombre" className="p-1">Nombre de Cliente</label>
                    <input id="nombre" className="bg-white w-full border-gray p-1 border-2 rounded-md" type="text" placeholder="Ej: Maria" />
                </section>
                <section>
                    <label htmlFor="descripcion" className="p-1">Descripcion de Servicio </label>
                    <textarea id="descripcion" className="bg-white w-full border-gray p-1 border-2 rounded-md" placeholder="Descripcion" />
                </section>
                <section>
                    <label htmlFor="telefono" className="p-1">Numero de telefono</label>
                    <input id="telefono" className="bg-white w-full border-gray p-1 border-2 rounded-md" type="number" placeholder="Ej: 809-123-4567" />
                </section>
                <section>
                    <label htmlFor="fecha" className="p-1">Fecha de cita</label>
                    <input id="fecha" className="bg-white w-full border-gray p-1 border-2 rounded-md" type="date" placeholder="Nombre" />
                </section>
            </section>
            <section className="flex flex-row gap-3">
                <button className="button  border-red-500 border-2 transition  hover:bg-red-500">Cancelar</button>
                <button className="button  border-blue-500 border-2 transition hover:bg-blue-500">Guardar</button>
            </section>
        </div>
    );
}
