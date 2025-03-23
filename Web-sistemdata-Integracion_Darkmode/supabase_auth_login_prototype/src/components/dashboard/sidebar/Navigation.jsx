import { ListItem, Text,
    Link,
    Box, Icon, ListRoot
} from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";
import {dashboardLinks} from "@/constants/links.jsx";
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";




export const NavItem = ({ item,  collapse }) => {
    const { label, icon, path } = item;
    const bgColor = useBreakpointValue({ base: collapse ? "#2F80ED" : "transparent", md: "#2F80ED" });
    const texColor = useBreakpointValue({ base: collapse ? "#ffffff" : "#2F80ED", md: "#ffffff" });

    if (item.type === "link") {
        return (
            <Box display="flex" alignItems="center" my={0} justifyContent="center">
                <Link
                    as={NavLink}
                    to={path}
                    gap={5}
                    mb="10px"
                    display="flex"
                    alignItems="center"
                    fontWeight="medium"
                    outline="none"
                    style={({ isActive }) => {
                        return {
                            fontWeight: isActive ? "bold" : "",
                            color: isActive ? texColor : "#B2C2DD",
                            backgroundColor: isActive ? bgColor  : "transparent",
                            borderRadius: "8px",
                            padding: "6px",
                            transition: "background-color 0.1s ease-in-out",
                        }
                    }}

                    _hover={{
                        textDecoration: "none",
                        color: "black",
                    }}
                    w="full"
                    justifyContent={!collapse ? "center" : ""}
                >
                    <Icon as={icon} fontSize={24} m="0" />
                    {collapse && <Text
                        data-state="open"
                        _open={{
                            animationName: "slide-from-right-full, fade-in",
                            animationDuration: "200ms",
                        }}
                    >{label}</Text>}
                </Link >

            </Box>
        );
    }}

NavItem.propTypes = {
    item: PropTypes.shape({
        label: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        icon: PropTypes.elementType.isRequired,
        path: PropTypes.string.isRequired,
    }).isRequired,
    collapse: PropTypes.bool.isRequired,
};

export const Navigation = ({ collapse }) => (
    <ListRoot w="full" variant="none">
        {dashboardLinks.map((item, index) => (
            <ListItem key={index} >
                <NavItem item={item} collapse={collapse} />
            </ListItem>
        ))}
    </ListRoot>
);

Navigation.propTypes = {
    collapse: PropTypes.bool.isRequired,
};