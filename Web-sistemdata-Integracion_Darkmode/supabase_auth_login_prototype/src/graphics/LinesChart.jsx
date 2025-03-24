import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { supabase1 } from "./supabaseClient";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
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

const COLORS = [
    "rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)",
    "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)", "rgba(0, 128, 128, 1)", "rgba(128, 0, 128, 1)",
    "rgba(0, 255, 127, 1)", "rgba(255, 69, 0, 1)", "rgba(60, 179, 113, 1)", "rgba(70, 130, 180, 1)",
    "rgba(148, 0, 211, 1)", "rgba(255, 215, 0, 1)"
];

const TemperaturasLine = () => {
    const [temperaturas, setTemperaturas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filtroMes, setFiltroMes] = useState("");
    const [filtroDia, setFiltroDia] = useState("");
    const [filtroHora, setFiltroHora] = useState("");
    const [variablesSeleccionadas, setVariablesSeleccionadas] = useState([...VARIABLES]);

    useEffect(() => {
        const fetchTemperaturas = async () => {
            const { data, error } = await supabase1
                .from("Temperaturas")
                .select(VARIABLES.join(", ") + ", Fecha");

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

    const datasets = VARIABLES.map((variable, index) => ({
        label: variable,
        data: filtrarDatos.map((temp) => temp[variable]),
        borderColor: COLORS[index],
        backgroundColor: COLORS[index].replace("1)", "0.5)"),
        hidden: !variablesSeleccionadas.includes(variable),
    }));

    const data = { labels, datasets };

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

    const toggleVariable = (variable) => {
        setVariablesSeleccionadas((prev) =>
            prev.includes(variable)
                ? prev.filter((v) => v !== variable)
                : [...prev, variable]
        );
    };

    if (loading) return <p>Cargando datos...</p>;

    return (
        <div className="p-4" >
            <h2 className="text-xl font-bold mb-4">Gráfico Líneas de Temperaturas</h2>

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
            </div>

            <div className="mb-4">
                <label className="mr-2 font-bold">Selecciona variables:</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {VARIABLES.map((variable) => (
                        <label key={variable} className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                checked={variablesSeleccionadas.includes(variable)}
                                onChange={() => toggleVariable(variable)}
                            />
                            <span>{variable}</span>
                        </label>
                    ))}
                </div>
            </div>

            <Line data={data} options={options} />
        </div>
    );
};

export default TemperaturasLine;
