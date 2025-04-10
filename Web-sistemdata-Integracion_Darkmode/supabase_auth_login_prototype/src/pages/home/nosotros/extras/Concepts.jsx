import {Box, Group, Heading, Text, Flex, Separator} from "@chakra-ui/react";

export default function Concepts() {
    return (
        <Group  display="flex" justifyContent="center">
            <Flex divideColor={{ lg: 'black', _dark: 'gray' }}  my='5px' px={{ lg: 'full', base: '20px' }} gap={{ lg: "200px", base: "20px" }} display={{ lg: 'flex', base: 'grid'  }} py="40px">
            <Box   maxW="400px" >
                <Heading textAlign="center" color={{base:"#072C51", _dark:"#CDF120"}}>Visión</Heading>
                <Text>Curabitur ultrices tortor ligula, sit amet fringilla tortor tristique at. Fusce feugiat nunc mi, non consequat ex tempus at. Aenean mi risus, gravida a tortor ut, efficitur finibus ipsum. Ut ultrices eros ante, vulputate dictum leo consequat a. Sed id mattis elit, ut egestas ligula. Fusce venenatis velit accumsan orci aliquam, nec consequat sem fringilla. Vestibulum gravida ipsum a ipsum dictum, sit amet imperdiet mi mattis.</Text>
            </Box>
<Separator orientation={{ base: "horizontal", lg: "vertical" }} size="lg" />
            <Box maxW="400px">
                <Heading textAlign="center" color={{base:"#072C51", _dark:"#CDF120"}} >Misión</Heading>
                <Text>Curabitur ultrices tortor ligula, sit amet fringilla tortor tristique at. Fusce feugiat nunc mi, non consequat ex tempus at. Aenean mi risus, gravida a tortor ut, efficitur finibus ipsum. Ut ultrices eros ante, vulputate dictum leo consequat a. Sed id mattis elit, ut egestas ligula. Fusce venenatis velit accumsan orci aliquam, nec consequat sem fringilla. Vestibulum gravida ipsum a ipsum dictum, sit amet imperdiet mi mattis.</Text>
            </Box>
            </Flex>

        </Group>
    )
}