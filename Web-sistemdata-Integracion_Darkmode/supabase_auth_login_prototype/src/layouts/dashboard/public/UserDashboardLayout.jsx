import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import SidebarUs from "@/components/dashboard/public/Sidebar.jsx";

function UserDashboardLayout () {
    return (
        <Box display="flex" h="100vh" bg="gray.100">
            <SidebarUs/>
            <Box flex={1} p={0}>
                <Outlet />
            </Box>
        </Box>
    );
}

export default UserDashboardLayout;