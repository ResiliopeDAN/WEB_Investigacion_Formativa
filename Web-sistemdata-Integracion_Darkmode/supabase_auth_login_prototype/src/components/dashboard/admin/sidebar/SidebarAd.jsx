import React from "react";
import { Box } from "@chakra-ui/react";

import {Navigation} from "@/components/dashboard/admin/sidebar/Navigation.jsx";
import PropTypes from "prop-types";
import {Logo} from "@/components/dashboard/admin/sidebar/Logo.jsx";
import {AvatarBox} from "@/components/dashboard/admin/sidebar/AvatarBox.jsx";

const SidebarAd = ({ collapse, setCollapse }) => (
    <React.Fragment>
        <Box w="full" h="full"  display="flex" flexDirection="column" gap={{base:"30px", md:"42px"}}>
            <Logo collapse={collapse} setCollapse={setCollapse} />
            <Box flex="1">
                <Navigation collapse={collapse}/>
            </Box>
            <AvatarBox collapse={collapse} style={{ alignSelf: "center" }}/>
        </Box>

    </React.Fragment>
);
SidebarAd.propTypes = {
    collapse: PropTypes.bool.isRequired,
    setCollapse: PropTypes.func.isRequired,
};
export default SidebarAd;