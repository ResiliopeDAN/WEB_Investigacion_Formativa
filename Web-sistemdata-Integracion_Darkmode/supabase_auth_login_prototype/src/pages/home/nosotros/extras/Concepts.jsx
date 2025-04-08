import {Box, Group, Heading, Text, Flex, Separator} from "@chakra-ui/react";

export default function Concepts() {
    return (
        <Group  display="flex" justifyContent="center">
            <Flex divideColor={{ lg: 'black', _dark: 'gray' }}  my='5px' px={{ lg: 'full', base: '20px' }} gap={{ lg: "200px", base: "20px" }} display={{ lg: 'flex', base: 'grid'  }} py="40px">
            <Box   maxW="400px" >
                <Heading textAlign="center" color={{base:"#072C51", _dark:"#CDF120"}}>Visión</Heading>
                <Text>jdsoaonfoisandoinasosknsfknsnfksnnssdsdsdkfnsdknfdskdkadmkasndkasdkasndkassndkasdjsnadjassnidn teffy y edison / Aldo y Gina</Text>
            </Box>
<Separator orientation={{ base: "horizontal", lg: "vertical" }} size="lg" />
            <Box maxW="400px">
                <Heading textAlign="center" color={{base:"#072C51", _dark:"#CDF120"}} >Misión</Heading>
                <Text>jdsoaonfoisandoinasoisdasjndasjndjkasndjkasnjkdkaslndlkasndlkasndlkandsdafsasdjnasjdjsaadnskandkasn alvis y betsy / Aldo y Gina ...... Ay el amor, el amor</Text>
            </Box>
            </Flex>

        </Group>
    )
}