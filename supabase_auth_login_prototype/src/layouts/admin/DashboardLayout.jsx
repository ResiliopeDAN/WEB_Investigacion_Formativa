import {Box, Flex, HStack} from "@chakra-ui/react";

import {useState} from "react";
import Sidebar from "@/components/dashboard/sidebar/Sidebar.jsx";
import {Outlet} from "react-router";
import NavBar from "@/components/dashboard/navbar/NavBar.jsx";

export const DashboardLayout = () => {
    const [collapse, setCollapse] = useState(false);


    return (
<HStack w="full" h="100vh" bg="bg.muted" gap={0}>
    <Flex
        as="aside"
        w="full"
        h="full"
        maxW={collapse ? {base: "250px", md: "263px", lg: "263px"} : {base: "30px", md: "100px", lg: "100px"}}
        bg={{ base: "#00338C", _dark: "blue.950" }}
        alignItems="start"
        px={{base: collapse ?  4 : 6, md: 6}}
        py={{base: "13.2px", md: "20px"}}
        flexDirection="column"
        justifyContent="space-between"
        transition="ease-in-out .2s"
        position={{ base: collapse ? "absolute" : "relative", md: "relative" }} // Flotante en móvil
        zIndex="overlay"



    >

        <Sidebar collapse={collapse} setCollapse={setCollapse}/>
    </Flex>
    <Flex
        flex="1"
        as="main"
        w="full"
        h="full"
        px={{base: 4, md: 6}}
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        position="relative"
        borderRadius="3xl"
    >

        <NavBar/>
        <Box flex="1">
            <Outlet/>
        </Box>

    </Flex>
</HStack>
    );
};