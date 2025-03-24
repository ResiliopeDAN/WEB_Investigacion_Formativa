import TemperaturasTable from "@/graphics/TablaChart.jsx";
import TemperaturasChart from "@/graphics/BarsChart.jsx";
import TemperaturasLine from "@/graphics/LinesChart.jsx";
import {Box} from "@chakra-ui/react";


const GraphiChart = () => {

    return (
        <Box display="flex" flexDirection="column">

        </Box>
    )
}

export default GraphiChart;

import { NativeSelect } from "@chakra-ui/react"
import { useState } from "react"
import TemperaturasTable from "@/graphics/TablaChart.jsx";
import TemperaturasChart from "@/graphics/BarsChart.jsx";
import TemperaturasLine from "@/graphics/LinesChart.jsx";
import {Box} from "@chakra-ui/react"

const Sensores = () => {
    const [selectedView, setSelectedView] = useState("");

    // Función para renderizar el componente correspondiente según la selección
    const renderSelectedComponent = () => {
        switch(selectedView) {
            case "lineas":
                return <TemperaturasLine />;
            case "barras":
                return <TemperaturasChart />;
            case "datos":
                return <TemperaturasTable />;
            default:
                return
        }
    };

    return (
        <Box>
            <NativeSelect.Root size="sm" width="240px">
                <NativeSelect.Field
                    placeholder="Seleccione el tipo de grafico"
                    value={selectedView}
                    onChange={(e) => setSelectedView(e.currentTarget.value)}
                >

                    <option value="lineas">Líneas</option>
                    <option value="barras">Barras</option>
                    <option value="datos">Datos</option>
                </NativeSelect.Field>
                <NativeSelect.Indicator />
            </NativeSelect.Root>

            {/* Contenedor para mostrar el componente seleccionado */}
            <Box bg="100vh" style={{ marginTop: "20px" }}>
                {renderSelectedComponent()}
            </Box>
        </Box>
    )
};

export default Sensores;