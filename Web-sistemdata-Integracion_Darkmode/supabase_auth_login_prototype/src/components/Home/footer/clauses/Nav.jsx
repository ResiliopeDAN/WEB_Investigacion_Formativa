import {Button, Icon, Link, List, Text} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";


export function NavItemsF({ label, uri, icon }) {
    return (
        <List.Item>

            <Button
                color={{base:"black", _dark:"white    "}}
                as={NavLink}
                to={uri}

                variant="ghost"



            >

                {icon && <Icon as={icon}  />} <Text display={{ base: "none", md:"flex"}}> {label} </Text>

            </Button>
        </List.Item>
    );
}

NavItemsF.propTypes = {
    label: PropTypes.string.isRequired,
    uri: PropTypes.string.isRequired,
    icon: PropTypes.elementType,
};