import  { useEffect, useState } from "react";
import { supabase1 } from "./supabaseClient";
import DataTable from "react-data-table-component";

const VARIABLES = [
    "T_P_SIN_POLVO", "T_M_SIN_POLVO", "T_M_CON_POLVO", "T_P_CON_POLVO", "T_AMBIENTE",
    
];

const TemperaturasTable = () => {
    const [temperaturas, setTemperaturas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filtroMes, setFiltroMes] = useState("");
    const [filtroDia, setFiltroDia] = useState("");
    const [filtroHora, setFiltroHora] = useState("");

    useEffect(() => {
        const fetchTemperaturas = async () => {
            const { data, error } = await supabase1
                .from("Temperaturas")
                .select([...VARIABLES, "Fecha"].join(", "));

            if (error) {
                console.error("Error al obtener datos", error);
            } else {
                setTemperaturas(data);
            }
            setLoading(false);
        };

        fetchTemperaturas();
    }, []);

    const columnas = [
        { name: "Fecha", selector: row => new Date(row.Fecha).toLocaleString(), sortable: true },
        ...VARIABLES.map((variable) => ({
            name: variable,
            selector: row => row[variable],
            sortable: true,
        }))
    ];

    const filtrarDatos = temperaturas.filter((temp) => {
        const fecha = new Date(temp.Fecha);
        return (
            (filtroMes ? fecha.getMonth() + 1 === parseInt(filtroMes) : true) &&
            (filtroDia ? fecha.getDate() === parseInt(filtroDia) : true) &&
            (filtroHora ? fecha.getHours() === parseInt(filtroHora) : true)
        );
    });

    if (loading) return <p>Cargando datos...</p>;

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Datos de Temperaturas</h2>
            <div className="mb-4 flex space-x-2">
                <input type="number" min="1" max="12" placeholder="Mes" value={filtroMes} onChange={(e) => setFiltroMes(e.target.value)} className="border px-2 py-1" />
                <input type="number" min="1" max="31" placeholder="Día" value={filtroDia} onChange={(e) => setFiltroDia(e.target.value)} className="border px-2 py-1" />
                <input type="number" min="0" max="23" placeholder="Hora" value={filtroHora} onChange={(e) => setFiltroHora(e.target.value)} className="border px-2 py-1" />
            </div>
            <DataTable
                columns={columnas}
                data={filtrarDatos}
                pagination
                highlightOnHover
                paginationComponentOptions={{
                    rowsPerPageText: "Cantidad a mostrar por página",
                    rangeSeparatorText: "de" // Cambia "of" por "de"
                }}
                noDataComponent="No hay datos para mostrar"
            />
        </div>
    );
};

export default TemperaturasTable;
