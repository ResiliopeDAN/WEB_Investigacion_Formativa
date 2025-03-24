import 'react';
import {
    Box,
    Flex,
    Text,
    Icon,
    Stack,
} from '@chakra-ui/react';
import { FaBell} from 'react-icons/fa';

const Historial = () => {

    return (
        <Box  m={5} boxShadow="sm" borderRadius="5px" >
        <Box    >
            <Box bg="blue.700" p={3} color="white" borderTopRadius="5px">
                <Flex alin="center">
                    <Icon m="5px" as={FaBell} mr={3} />
                    <Text size="md">Notificaciones</Text>
                </Flex>
            </Box>

            <Stack spacing={2} p={4}  overflowY="auto">

                    <Box p={3} bg="gray.50" borderRadius="md" borderColor="gray.200" borderWidth="4px"
                    >
                            <Box align="center">
                                <Text color="black" fontWeight="bold">Espera para recibir nuevas actualizaciones!</Text>
                            </Box>
                    </Box>
                <Box p={3} bg="gray.50" borderRadius="md" borderColor="gray.200" borderWidth="4px"
                >
                    <Box align="center">
                        <Text color="black" fontWeight="bold">Nueva Notificacion!</Text>
                    </Box>
                </Box>
            </Stack>
        </Box>
        </Box>
    );
};

export default Historial;