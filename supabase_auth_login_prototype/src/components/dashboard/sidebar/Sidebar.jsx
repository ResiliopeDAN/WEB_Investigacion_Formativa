import React from "react";
import { Box } from "@chakra-ui/react";

import {Navigation} from "@/components/dashboard/sidebar/Navigation.jsx";
import PropTypes from "prop-types";
import {Logo} from "@/components/dashboard/sidebar/Logo.jsx";
import {AvatarBox} from "@/components/dashboard/sidebar/AvatarBox.jsx";

const Sidebar = ({ collapse, setCollapse }) => (
    <React.Fragment>
        <Box w="full" h="full"  display="flex" flexDirection="column" gap={{base:"30px", md:"42px"}} >
            <Logo collapse={collapse} setCollapse={setCollapse} />
            <Box flex="1">
                <Navigation collapse={collapse}/>
            </Box>
            <AvatarBox collapse={collapse} style={{ alignSelf: "center" }}/>
        </Box>

    </React.Fragment>
);
Sidebar.propTypes = {
    collapse: PropTypes.bool.isRequired,
    setCollapse: PropTypes.func.isRequired,
};
export default Sidebar;