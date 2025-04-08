import { Box, Container, Heading, Flex, Image, Text} from "@chakra-ui/react";
import Concepts from "@/pages/home/nosotros/extras/Concepts.jsx"

export function AboutUsPage() {
    return (
<>
        <Box bg="bg.subtle">
            <Container maxW={1400}>
                <Flex my='50px' px={{ lg: '50px', base: '20px' }}  gap='30px' display={{ lg: 'flex', base: 'grid' }}>
                    <Box flexBasis='50%'>
                            <Image mx='auto' src='/PORTADA.png' alt='Us' />
                    </Box>
                    <Box flexBasis='50%'>
                            <Heading size='2xl' color={{base:"#072C51", _dark:"#CDF120    "}}>Nosotros</Heading>
                            <Text mt={5}> content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</Text>
                    </Box>
                </Flex>
            </Container>

        </Box>
    <Concepts/>
</>



    )
}

