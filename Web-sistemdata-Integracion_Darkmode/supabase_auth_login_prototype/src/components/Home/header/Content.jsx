import {
    Avatar,
    Button,
    Flex,
    Heading,
    IconButton,
    Input,
    InputGroup,
    List,
    Skeleton,
    ClientOnly, Icon, Link
} from "@chakra-ui/react";
import { FaBurger } from "react-icons/fa6";
import {FaBell, FaSearch} from "react-icons/fa";
import PropTypes from "prop-types";
import {NavItems} from "@/components/Home/header/NavItems.jsx";
import {NavLink} from "react-router-dom";
import { useColorMode} from "@/components/ui/color-mode.jsx";
import {BsMoonStars, BsSun} from "react-icons/bs";


export function LeftContent ({items, onToggle}) {
    return (
        <Flex alignItems="center" justifyContent="space-between" gap={4}>
            <IconButton
                aria-label="menu"
                size="sm"
                colorPalette="teal"
                variant="ghost"
                rounded="full"
                display={{base: "flex", md: "none"}}
                onClick={onToggle}
            >
                <FaBurger/>
            </IconButton>

            <Heading as={NavLink} to="/" colorPalette="teal" fontWeight="black">
                LO2GO
            </Heading>
            <List.Root
                variant="plain"
                flexDirection="row"
                gap={2}
                display={{base: "none", md: "flex"}}>
                {items.map((item) => (
                    <NavItems key={item.label} {...item} />
                ))}
            </List.Root>
        </Flex>
    );
}

export function RightContent () {
    const { toggleColorMode, colorMode } = useColorMode()
    return (

        <Flex alignItems="center" gap={2}>
            {/*<IconButton*/}
            {/*    aria-label="search"*/}
            {/*    variant="ghost"*/}
            {/*    rounded="full"*/}
            {/*    display={{ base: "flex", md: "none" }}*/}
            {/*    size="sm"*/}
            {/*>*/}
            {/*    <FaSearch color="teal"/>*/}
            {/*</IconButton>*/}
            {/*<InputGroup*/}
            {/*    colorPalette="teal"*/}
            {/*    size="md"*/}
            {/*    endElement={<Icon as={FaSearch} color="teal.fg"/>}*/}
            {/*    display={{ base: "none", md: "flex" }}*/}
            {/*>*/}
            {/*    <Input color="teal.fg" variant="subtle" placeholder="Search..." _placeholder={{ color: "teal.solid" }} />*/}
            {/*</InputGroup>*/}
            {/*<IconButton*/}
            {/*    aria-label="search"*/}
            {/*    variant="ghost"*/}
            {/*    rounded="full"*/}
            {/*    size="sm"*/}
            {/*    colorPalette="teal"*/}
            {/*>*/}
            {/*    <FaBell/>*/}
            {/*</IconButton>*/}
            <ClientOnly fallback={<Skeleton boxSize="8" />}>
                <IconButton onClick={toggleColorMode} variant="ghost" size="sm" colorPalette="teal"
                            rounded="full"
                >
                    {colorMode === "light" ? <BsSun/> : <BsMoonStars/>}
                </IconButton>
            </ClientOnly>
            <Button
                as={Link}
                href="/login"
                variant="solid"
                colorPalette="teal"
                size={"sm"}
                borderRadius="2xl"
                textDecoration="none"
                display={{ base: "none", md: "flex" }}
            >
                Iniciar Sesión
            </Button>
            <Button
                as={Link}
                href="/register"
                variant="outline"
                colorPalette="teal"
                size={"sm"}
                borderRadius="2xl"
                textDecoration="none"
                display={{ base: "none", md: "flex" }}
            >
                Registrarse
            </Button>
            {/*<Avatar.Root colorPalette="teal" size="sm">*/}
            {/*    <Avatar.Fallback name="Shane Nelson"/>*/}
            {/*</Avatar.Root>*/}
        </Flex>
    )
};

LeftContent.propTypes = {
    items: PropTypes.array.isRequired,
    onToggle: PropTypes.func.isRequired
};