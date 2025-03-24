import { useState, useEffect } from "react";
import { Box, VStack, Button, Text, Icon } from "@chakra-ui/react";
import { FiGrid, FiSettings, FiHelpCircle, FiLogOut } from "react-icons/fi";
import { FaTemperatureHigh, FaRegBell } from "react-icons/fa";

import { useNavigate, useLocation, Link } from "react-router-dom";
import supabase from "@/api/supabaseClient.js";

const SidebarUs = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Determinar la sección seleccionada basada en la URL actual
    const [selected, setSelected] = useState("user");

    // Actualiza el estado 'selected' cuando cambia la ubicación
    useEffect(() => {
        const path = location.pathname.split('/');
        if (path.length > 1) {
            setSelected(path[2]);
        } else {
            setSelected("user");
        }
    }, [location]);

    const singOut = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
        navigate("/login");
    };

    return (
        <Box as="nav" bg="blue.700" w="250px" p={5} shadow="md" borderRadius="md" alignItems="center">
            <VStack align="left" spacing={4}>
                <Text fontSize="lg" fontWeight="bold" color="white">MENU PRINCIPAL</Text>

                <Button
                    bg={selected === "dashboard" ? "blue.400" : "transparent"}
                    color={selected === "dashboard" ? "white" : "gray.200"}
                    onClick={() => navigate("dashboard")}
                    w="full"
                    justifyContent="flex-start"
                    mt="3vh"
                >
                    <FiGrid style={{ marginRight: "8px" }} />
                    Dashboard
                </Button>

                <Button
                    variant="ghost"
                    bg={selected === "sensores" ? "blue.400" : "transparent"}
                    color={selected === "sensores" ? "white" : "gray.200"}
                    onClick={() => navigate("sensores")}
                    w="full"
                    justifyContent="flex-start"
                    alignItems="center"
                    mt="1vh"
                >
                    <FaTemperatureHigh style={{ marginRight: "8px" }} m={0}/>
                    Sensores
                </Button>

                <Button
                    variant="ghost"
                    bg={selected === "historial" ? "blue.400" : "transparent"}
                    color={selected === "historial" ? "white" : "gray.200"}
                    onClick={() => navigate("historial")}
                    w="full"
                    justifyContent="flex-start"
                    alignItems="center"
                    mt="1vh"
                    style={{ marginRight: "8px" }}
                >
                    <FaRegBell style={{ marginRight: "8px" }} m={0} />
                    Notificaciones
                </Button>

                <Button
                    variant="ghost"
                    bg={selected === "configuraciones" ? "blue.400" : "transparent"}
                    color={selected === "configuraciones" ? "white" : "gray.200"}
                    onClick={() => navigate("configuraciones")}
                    w="full"
                    justifyContent="flex-start"
                    mt="1vh"

                >
                    <FiSettings style={{ marginRight: "8px" }} m={0}/>
                    Configuraciones
                </Button>

                <Button
                    variant="ghost"
                    bg={selected === "soporte" ? "blue.400" : "transparent"}
                    color={selected === "soporte" ? "white" : "gray.200"}
                    onClick={() => navigate("soporte")}
                    w="full"
                    mt="40vh"
                    style={{ marginRight: "8px" }}
                >
                    <FiHelpCircle  m={0}/>
                    Soporte
                </Button>

                <Button onClick={singOut} w="full" colorScheme="blue" mt={4}>
                    <FiLogOut style={{ marginRight: "8px", color: "red" }}/>
                    Cerrar sesión
                </Button>
            </VStack>
        </Box>
    );
};

export default SidebarUs;