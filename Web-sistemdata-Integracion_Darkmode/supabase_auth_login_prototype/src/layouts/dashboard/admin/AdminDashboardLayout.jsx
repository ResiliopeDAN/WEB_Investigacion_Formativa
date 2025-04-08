import { Flex, VStack} from "@chakra-ui/react";

import {useState} from "react";
import SidebarAd from "@/components/dashboard/admin/sidebar/SidebarAd.jsx";
import {Outlet} from "react-router";
import NavBar from "@/components/dashboard/admin/navbar/NavBar.jsx";
import Banner from "@/components/dashboard/admin/Banner.jsx";

export const AdminDashboardLayout = () => {
    const [collapse, setCollapse] = useState(false);


    return (
<Flex w="full" minH="100vh" bg="bg.muted" gap={0}>
    <Flex
        as="aside"
        h="100vh"
        w={collapse ? {base: "250px", md: "263px"} : {base: "30px", md: "100px"}}
        bg={{ base: "#00338C", _dark: "blue.950" }}
        alignItems="start"
        px={{base: collapse ?  4 : 6, md: 6}}
        py={{base: "13.2px", md: "20px"}}
        flexDirection="column"
        justifyContent="space-between"
        transition="ease-in-out .2s"
        position={{ base: collapse ? "fixed" : "sticky", md: "sticky" }}
        top="0"
        zIndex="overlay"

    >
        <SidebarAd collapse={collapse} setCollapse={setCollapse} />
    </Flex>

    <Flex
        flex="1"
        as="main"
        minH="100vh"
        w="full"
        px={{base: 4, md: 6}}
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        borderRadius="3xl"
    >
        <NavBar/>
        <VStack flex="1" w="full" gap={4}>
            <Banner/>
            <Outlet/>
        </VStack>
    </Flex>
</Flex>
    );
};