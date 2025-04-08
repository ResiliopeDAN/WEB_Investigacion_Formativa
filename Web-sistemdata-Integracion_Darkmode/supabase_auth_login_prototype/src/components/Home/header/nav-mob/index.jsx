import {Button, Collapsible, List} from "@chakra-ui/react";
import {NavItemsMob} from "@/components/Home/header/nav-mob/NavItemsMob.jsx";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";

export function NavBarMob({ items, isOpen }) {
    return (
        <Collapsible.Root  style={{width: "100%"}} open={isOpen} >
            <Collapsible.Content>
                <List.Root
                    gap={2}
                    spacing={2}
                    width="100%"
                    borderWidth={1}
                    padding={2}
                    bg="bg.muted"
                    variant="plain"
                    display={{base: "flex", md: "none"}}
                >
                    {items.map((item) => (
                        <NavItemsMob key={item.label} {...item} />
                    ))}
                    <Button
                        as={NavLink}
                        to="/login"
                        variant="solid"
                        colorPalette="teal"
                        size={"sm"}
                        borderRadius="2xl"
                    >
                        Iniciar Sesión
                    </Button>
                    <Button
                        as={NavLink}
                        to="/register"
                        variant="outline"
                        colorPalette="teal"
                        size={"sm"}
                        borderRadius="2xl"
                    >
                        Registrarse
                    </Button>
                </List.Root>

            </Collapsible.Content>
        </Collapsible.Root>
    );
}

NavBarMob.propTypes = {
    items: PropTypes.array.isRequired,
    isOpen: PropTypes.bool.isRequired,
};



// <Collapsible.Root open={isOpen} animateOpacity style={{ width: "100%" }}>
//     <Collapsible.Content>
//         <List
//             gap={2}
//             spacing={2}
//             width="100%"
//             borderWidth={1}
//             padding={2}
//             bg="gray.100"
//         >
//             {items.map((item) => (
//                 <NavItemsMob key={item.label} {...item} />
//             ))}
//         </List>
//     </Collapsible.Content>
// </Collapsible.Root>