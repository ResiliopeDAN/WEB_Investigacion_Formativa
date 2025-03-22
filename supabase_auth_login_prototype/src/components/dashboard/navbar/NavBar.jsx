import {Box, Button, Flex, Group, Icon, IconButton, Input, Text, useBreakpointValue } from "@chakra-ui/react";
import { ClientOnly, Skeleton } from "@chakra-ui/react"
import { useColorMode } from "@/components/ui/color-mode"
import {useLocation} from "react-router";
import {dashboardLinks} from "@/constants/links.jsx";
import {InputGroup} from "@/components/ui/input-group.jsx";
import {LuSearch} from "react-icons/lu";

import {BsSun, BsMoonStars} from "react-icons/bs";
import {IoNotificationsOutline} from "react-icons/io5";
import {GoSignOut} from "react-icons/go";
import supabase from "@/api/supabaseClient.js";
import {useNavigate} from "react-router-dom";



const TextNav = () => {
    const location = useLocation();
    const currentPage = dashboardLinks.find(link => `/admin/${link.path}` === location.pathname);

    return(
        <Box flex="1">
            <Text as="h1" fontSize={{ base: "xl", md: "3xl", lg: "3xl" }} fontWeight="bold" color="fg.muted">
                {currentPage ? currentPage.title : "Datos Personales"}
            </Text>
        </Box>
    )
};
const Search = () => {
    return (
    <InputGroup
        startElement={<Icon as={LuSearch} size={{base: "xs", md: "sm"}}/>}
        width="40%"
    >
        <Input type="text" placeholder="Buscar..." bg="bg.muted" borderRadius="2xl" variant="flushed"
               size={{base: "xs", md: "sm"}}/>
    </InputGroup>
    )
};
const NotyfIco = () => {
    return (
        <IconButton variant="ghost" size="sm">
            <Icon as={IoNotificationsOutline} size="sm"/>
        </IconButton>


    )
}

const NavBar = () => {
    const { toggleColorMode, colorMode } = useColorMode()
    const showText = useBreakpointValue({ base: false, md: true })

    const navigate = useNavigate();
    const singOut = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
        navigate("/login");
    }

    return (
        <Flex
            py={{base: "13.2px", md: "8px"}}
            minH={{base: "63.2px", md: "64px"}}
            w="full"
        >
        <Flex
            bg="bg.panel"
            justify="space-between"
            alignItems= "center"
            borderRadius="2xl"
            width="full"
            px={{base: 1, md: 3}}
        >
            <TextNav/>
            <Flex width="60%" justifyContent="end" alignItems="center">
                <Search/>
                    <ClientOnly fallback={<Skeleton boxSize="8" />}>
                        <IconButton onClick={toggleColorMode} variant="ghost" size="sm" >
                            {colorMode === "light" ? <BsSun/> : <BsMoonStars/>}
                        </IconButton>
                    </ClientOnly>
                <NotyfIco/>
                <Button variant={{base:"plain", md:"outline"}} bg="red.muted" borderColor="red.solid" size={"sm"}
                        onClick={singOut}
                >
                    <Icon as={GoSignOut} size="sm" />
                    {showText && <Text>Salir</Text>}
                </Button>
                
            </Flex>
        </Flex>
        </Flex>
        // <Flex
        // justifyContent={"space-between"}
        // alignItems="center"
        // width="100vw"
        // >
        //     <TextNav/>
        //     <Flex
        //     bg="gray.50"
        //     h="66px"
        //     px="35px"
        //     py="13px"
        //     display="flex"
        //     justify="space-between"
        //     align-items= "center"
        //     borderBottom="1px solid"
        //     borderColor="gray.200"
        //     borderRadius="14px"
        // >
        //
        //
        //     {/* Barra de Búsqueda */}
        //     <InputGroup w="308px" flex="1" startElement={<LuSearch />} endElement={<Kbd>⌘K</Kbd>}>
        //         <Input type="text" placeholder="Buscar" bg="white" borderRadius="md" />
        //     </InputGroup>
        //
        //     {/* Iconos de Notificación y Logout */}
        //     <Flex align="center" gap={4}>
        //         <Box position="relative">
        //             <IconButton
        //                 aria-label="Notificaciones"
        //                 variant="ghost"
        //                 p={0}
        //             ><BellIcon /></IconButton>
        //
        //         </Box>
        //         <IconButton
        //             aria-label="Salir"
        //             variant="ghost"
        //             p={0}
        //         ><FiLogOut /></IconButton>
        //     </Flex>
        // </Flex>
        // </Flex>

    )
}
export default NavBar;