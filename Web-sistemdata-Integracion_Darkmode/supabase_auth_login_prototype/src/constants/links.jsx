
import {TbLayoutDashboardFilled} from "react-icons/tb";
import {FaUsers, FaUsersCog, FaCogs, FaList    } from "react-icons/fa";
import { FaSatelliteDish } from "react-icons/fa6";

export const dashboardLinks = [
    {
        type: "link",
        label: "Dashboard",
        title: "Bienvenido",
        icon: TbLayoutDashboardFilled,
        path: "dashboard",
    },
    {
        type: "link",
        label: "Administración",
        title: "Administración",
        icon: FaUsersCog,
        path: "administracion",
    },
    {
        type: "link",
        label: "Usuarios",
        title: "Usuarios",
        icon: FaUsers,
        path: "usuarios",
    },
    {
        type: "link",
        label: "Sensores",
        title: "Sensores",
        icon: FaSatelliteDish  ,
        path: "sensores",
    },
    {
        type: "link",
        label: "Reportes",
        title: "Reportes",
        icon: FaList,
        path: "reportes",
    },
    {
        type: "link",
        label: "Configuración",
        title: "Configuración",
        icon: FaCogs,
        path: "configuracion",
    },

];
