import  { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { supabase1 } from "./supabaseClient.jsx";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    zoomPlugin
);

const VARIABLES = [
    "T_P_SIN_POLVO", "T_M_SIN_POLVO", "T_M_CON_POLVO", "T_P_CON_POLVO", "T_AMBIENTE",
    "V_P_SIN_POLVO", "V_P_CON_POLVO", "V_M_SIN_POLVO", "V_M_CON_POLVO",
    "I_P_SIN_POLVO", "I_P_CON_POLVO", "I_M_SIN_POLVO", "I_M_CON_POLVO",
    "Irradiancia"
];

const TemperaturasChart = () => {
    const [temperaturas, setTemperaturas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filtroMes, setFiltroMes] = useState("");
    const [filtroDia, setFiltroDia] = useState("");
    const [filtroHora, setFiltroHora] = useState("");
    const [variableSeleccionada, setVariableSeleccionada] = useState("T_P_SIN_POLVO");

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

    const filtrarDatos = temperaturas.filter((temp) => {
        const fecha = new Date(temp.Fecha);
        return (
            (filtroMes ? fecha.getMonth() + 1 === parseInt(filtroMes) : true) &&
            (filtroDia ? fecha.getDate() === parseInt(filtroDia) : true) &&
            (filtroHora ? fecha.getHours() === parseInt(filtroHora) : true)
        );
    });

    const labels = filtrarDatos.map((temp) => new Date(temp.Fecha).toLocaleString());
    const dataValues = filtrarDatos.map((temp) => temp[variableSeleccionada]);

    const data = {
        labels,
        datasets: [
            {
                label: variableSeleccionada,
                data: dataValues,
                backgroundColor: "rgba(75, 192, 192, 0.5)",
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { display: true },
            zoom: {
                pan: { enabled: true, mode: "x" },
                zoom: {
                    wheel: { enabled: true },
                    pinch: { enabled: true },
                    mode: "x",
                },
            },
        },
        scales: {
            y: { ticks: { color: "#000000" } },
            x: { ticks: { color: "#000000" } },
        },
    };

    if (loading) return <p>Cargando datos...</p>;

    return (
        <div className="p-4" >
            
            <div className="mb-4 flex space-x-2">
                <input
                    type="number"
                    min="1"
                    max="12"
                    placeholder="Mes"
                    value={filtroMes}
                    onChange={(e) => setFiltroMes(e.target.value)}
                    className="border px-2 py-1"
                />
                <input
                    type="number"
                    min="1"
                    max="31"
                    placeholder="Día"
                    value={filtroDia}
                    onChange={(e) => setFiltroDia(e.target.value)}
                    className="border px-2 py-1"
                />
                <input
                    type="number"
                    min="0"
                    max="23"
                    placeholder="Hora"
                    value={filtroHora}
                    onChange={(e) => setFiltroHora(e.target.value)}
                    className="border px-2 py-1"
                />
                <select
                    value={variableSeleccionada}
                    onChange={(e) => setVariableSeleccionada(e.target.value)}
                    className="border px-2 py-1"
                >
                    {VARIABLES.map((variable) => (
                        <option key={variable} value={variable}>
                            {variable}
                        </option>
                    ))}
                </select>
            </div>
            <Bar data={data} options={options} />
        </div>
    );
};

export default TemperaturasChart;
