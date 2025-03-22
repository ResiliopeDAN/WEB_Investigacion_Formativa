import {
    Box,
    Container,
    Heading,
    Text,
    Button,
    VStack,
} from '@chakra-ui/react'
import {toaster} from "@/components/ui/toaster.jsx";

function App() {


    return (
        <>
            <Container maxW="container.md" py={10}>
                <VStack spacing={6}>
                    <Box
                        p={8}
                        bg="white"
                        boxShadow="lg"
                        borderRadius="md"
                        width="100%"
                    >
                        <Heading mb={4} color="purple.600">
                            Bienvenido a React con Chakra UI
                        </Heading>
                        <Text mb={6}>
                            Esta es una demostración simple de algunos componentes de Chakra UI.
                            Chakra UI nos permite crear interfaces bonitas y accesibles de manera rápida.
                        </Text>
                        <Button
                            colorScheme="purple"
                            ariant="outline"
                            size="sm"
                            onClick={() =>
                            toaster.create({
                                description: "File saved successfully",
                                type: "loading",
                            })
                            }
                        >
                            Haz clic aquí
                        </Button>
                    </Box>

                    <Box
                        p={6}
                        bg="purple.50"
                        borderRadius="md"
                        width="100%"
                    >
                        <Text color="purple.800" fontSize="lg">
                            Características de Chakra UI:
                        </Text>
                        <VStack align="start" mt={4} spacing={2}>
                            <Text>• Componentes accesibles</Text>
                            <Text>• Estilos personalizables</Text>
                            <Text>• Modo oscuro incorporado</Text>
                            <Text>• Diseño responsivo</Text>
                        </VStack>
                    </Box>
                </VStack>
            </Container>
        </>
    )
}

export default App