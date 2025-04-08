import {
    Button,
    Collapsible, Icon,
    Link,
    List,
} from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";
import {useState} from "react";

export function NavItemsMob ({ label, uri, subitems }) {
    const [isOpen, setOpen] = useState(false)
    if(subitems) {
        return (
            <>
                <Collapsible.Root open={isOpen} onOpenChange={(e) => setOpen(e.open)}>
                    <Collapsible.Trigger w="full" asChild>
                        <Button
                            variant="ghost"
                            w="full"
                            justifyContent="space-between"
                            fontWeight="semibold"
                            fontSize="md"
                            colorPalette="teal"
                        >
                            {label} <Icon as={FaChevronDown} boxSize={4} mt="3px" style={{
                            transition:"transform .2s ease 0s",
                            transform: isOpen ? "rotate(-180deg)" : "",
                        }} />
                        </Button>
                    </Collapsible.Trigger>
                    <Collapsible.Content>
                        <List.Root
                            px={4}
                            variant="plain"
                        >
                            {subitems?.map((subitem) => (
                                <List.Item key={subitem.label} w="full">
                                    <Link
                                        outline="none"
                                        w="full"
                                        colorPalette="teal"
                                        as={NavLink}
                                        to={subitem.uri}
                                        p={2}
                                        rounded="lg"
                                        _hover={{textDecoration: 'none', bg:'colorPalette.50'}}
                                        display="block"
                                        _active={{ color:'colorPalette.500'}}

                                    >
                                        {subitem.label}
                                    </Link>
                                </List.Item>
                            ))}
                        </List.Root>
                    </Collapsible.Content>
                </Collapsible.Root>
            </>
        )
    }
    return (
        <List.Item key={label} w="full">
            <Link
                outline="none"
                w="full"
                display="block"
                colorPalette="teal"
                as={NavLink}
                to={uri}
                rounded="lg"
                _hover={{textDecoration: 'none', bg:'colorPalette.50'}}
                _active={{ color:'colorPalette.500'}}
                px={4}
                py={2}
                fontWeight="semibold"
            >
                {label}
            </Link>
        </List.Item>
    );
}

NavItemsMob.propTypes = {
    label: PropTypes.string,
    uri: PropTypes.string,
    subitems: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        uri: PropTypes.string,
    })),
};

// const { isOpen, onToggle } = useDisclosure();
// if (subitems) {
//     return (
//         <>
//             <Button
//                 variant="ghost"
//                 w="full"
//                 rightIcon={
//                     <FaChevronDown
//                         style={{
//                             transition: "transform .2s ease 0s",
//                             transform: isOpen ? "rotate(-180deg)" : "",
//                         }}
//                     />
//                 }
//                 justifyContent="space-between"
//                 colorScheme="teal"
//                 onClick={onToggle}
//             >
//                 {label}
//             </Button>
//             <Collapsible.Root open={isOpen} animateOpacity>
//                 <Collapsible.Content>
//                     <List px={4}>
//                         {subitems?.map((subitem) => (
//                             <ListItem key={subitem.label} w="full">
//                                 <Link
//                                     href={subitem.uri}
//                                     p={2}
//                                     w="full"
//                                     rounded="lg"
//                                     display="block"
//                                     _hover={{ textDecoration: " none", bg: "teal.50" }}
//                                     _active={{ bg: "teal.100" }}
//                                 >
//                                     {subitem.label}
//                                 </Link>
//                             </ListItem>
//                         ))}
//                     </List>
//                 </Collapsible.Content>
//             </Collapsible.Root>
//         </>
//     );
// }
// return (
//     <ListItem key={label} w="full">
//         <Link
//             href={uri}
//             display="block"
//             rounded="lg"
//             _hover={{ textDecoration: "none", bg: "teal.50" }}
//             _active={{ bg: "teal.100" }}
//             px={4}
//             py={2}
//             fontWeight="semibold"
//             color="teal.600"
//         >
//             {label}
//         </Link>
//     </ListItem>