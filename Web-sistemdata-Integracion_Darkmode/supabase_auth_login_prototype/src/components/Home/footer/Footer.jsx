


import { Box, Container, Heading, SimpleGrid, Text, Image } from "@chakra-ui/react"
import {footerContactus, footerFollowus, footerLinks} from "@/constants/links.jsx";
import {UsefulLinks} from "@/components/Home/footer/clauses/UsefulLinks.jsx"
import {FollowUs} from "@/components/Home/footer/clauses/FollowUs.jsx";
import {ContactUs} from "@/components/Home/footer/clauses/ContactUs.jsx";
import {useState} from "react";
// import Image from "next/image"



export function Footer() {
    const [isOpen, setOpen] = useState(false);

    const onToggle = () => setOpen(!isOpen);
    return (

        <Box bg='bg.emphasized' >
            <Container maxW={1300}>
                <SimpleGrid textAlign={{lg:'start',base:'center'}} spacing='30px' py='60px' templateColumns={{base:'repeat(1, 1fr)', lg:'repeat(4, 1fr)'}}>
                    <Box >
                        <Heading  pb='20px' color={{base:"#00B5BB", _dark:"#CDF120    "}}>About us</Heading>
                        <Image m={{base:'auto',lg:'0'}} src='/Unaj.png' alt='Panaverse'></Image>
                        <Text pt='15px' pr={{lg:'40px',base:'0'}} color='gray'>Una pagina web orientada al resgistro y consulta de datos ambientales </Text>
                    </Box>

                    <Box>
                        <UsefulLinks items={footerLinks} onToggle={onToggle} />
                    </Box>

                    <Box>
                        <FollowUs items={footerFollowus} onToggle={onToggle} />
                    </Box>

                    <Box>
                        <ContactUs items={footerContactus} onToggle={onToggle} />
                    </Box>

                </SimpleGrid>

            </Container>
        </Box>
    )
}