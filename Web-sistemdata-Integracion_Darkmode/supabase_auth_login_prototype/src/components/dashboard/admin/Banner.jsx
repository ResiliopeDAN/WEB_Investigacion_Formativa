import {Box, Flex, Image} from "@chakra-ui/react";

const Banner = () => {
    return (
        <Flex flexDirection="column" w="full"  alignItems="center" overflow="hidden" borderRadius="2xl" position="relative">
            <Image
                w="full"
                h={{base:"80px", md:"100px", lg:"120px"}}
                fit="cover"
                align="center"
                src="https://ladecana.pe/wp-content/uploads/2021/07/UNAJ-logra-la-creacion-de-tres-nuevas-carreras-profesionales-y-la-ampliacion-de-licenciamiento-institucional-2.jpeg"
                alt="Dan Abramov"
                transition="transform 0.3s ease-in-out"
                _hover={{
                    transform: "scale(1.3)"
                }}
                filter={{ base: "brightness(85%)", _dark: "brightness(70%)" }}
                />
        </Flex>
    )
}

export default Banner;

//https://ladecana.pe/wp-content/uploads/2020/01/WhatsApp-Image-2020-01-03-at-7.42.43-AM.jpeg
    // https://ladecana.pe/wp-content/uploads/2021/07/UNAJ-logra-la-creacion-de-tres-nuevas-carreras-profesionales-y-la-ampliacion-de-licenciamiento-institucional-2.jpeg