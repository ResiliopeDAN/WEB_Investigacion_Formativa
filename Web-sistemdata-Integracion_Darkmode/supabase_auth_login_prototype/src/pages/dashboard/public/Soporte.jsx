import { FaExclamationCircle } from "react-icons/fa";
import {Box, Text, Link} from "@chakra-ui/react";

const Soporte = () => {
    return (
        <Box bg="100vh" p={4} >
        <Box p={5} bg="green">
            <FaExclamationCircle/>
            <Text fontSize="2xl" fontWeight="bold">Si tienes algun problema</Text>
            <Link href="https://wa.me/51996262037" isExternal target="_blank" rel="noopener noreferrer">Presiona Aqui  </Link>

        </Box>
        </Box>
    )

};

export default Soporte;