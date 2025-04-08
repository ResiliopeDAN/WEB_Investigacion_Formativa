import {Flex, Box} from "@chakra-ui/react";
import {NavbarHo} from "@/components/Home/header/NavBar.jsx";
import {Footer} from "@/components/Home/footer/Footer.jsx"
import {Outlet} from "react-router-dom"

export function HomeLayout() {

    return (
        <Flex w="full" h="full" spacing={0} display="flex" flexDirection="column">
            <NavbarHo />
            <Outlet/>
            <Footer  />
        </Flex>
    );
}