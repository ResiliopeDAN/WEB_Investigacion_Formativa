// Dash.jsx
import { Box, Text} from "@chakra-ui/react"

const Menu = () => {
    return (
        <Box p={5} bgImage="url('/DEAS.jpg')" bgSize="cover" h="100vh">

            <Box bg="rgba(0, 0, 0, 0.5)" p={5} borderRadius="md" color="white">
                <Text fontSize="2xl" fontWeight="bold">
                    BIENVENIDO, Consulte sobre los datos ambientales
                </Text>
                <Text mt={2}>
                    Este sistema está diseñado para facilitar el almacenamiento, consulta y análisis
                    de datos ambientales en un entorno intuitivo y eficiente. Aquí podrás acceder a
                    información clave como temperaturas, irradiancia, tensión y corriente, organizadas
                    por año, mes y día.
                </Text>
            </Box>
        </Box>
    );
};

export default Menu;
