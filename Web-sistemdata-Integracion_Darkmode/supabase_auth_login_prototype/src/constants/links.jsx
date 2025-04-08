
import {TbBrandGithubFilled, TbLayoutDashboardFilled} from "react-icons/tb";
import {FaUsers, FaUsersCog, FaCogs, FaList, FaFacebook, FaTwitter, FaMapMarkerAlt} from "react-icons/fa";
import { FaSatelliteDish } from "react-icons/fa6";
import {IoHomeSharp} from "react-icons/io5";
import {MdNumbers, MdOutlineMailOutline, MdOutlineTravelExplore, MdPhoneInTalk} from "react-icons/md";
import {HiUserGroup} from "react-icons/hi";

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

export const homeLinks = [
    {
        label: "Inicio",
        uri: "#",
    },
    {
        label: "Datos Recogidos",
        uri: "#",
    },
    {
        label: "Nosotros",
        uri: "/nosotros",
    },
    // {
    //     label: "Nosotros",
    //     uri: "#",
    //     subitems: [
    //         {
    //             label: "Developers",
    //             uri: "#",
    //         },
    //         {
    //             label: "Misión",
    //             uri: "#",
    //         },
    //         {
    //             label: "Visión",
    //             uri: "#",
    //         },
    //     ],
    // },
    {
        label: "Contacto",
        uri: "#",
    },
]

export const footerLinks = [

    {
        label: "Home",
        uri: "#",
        icon:IoHomeSharp,

    },

    {
        label: "Explore",
        uri: "#",
        icon: MdOutlineTravelExplore,
    },

    {
        label:"About",
        uri:"#",
        icon: HiUserGroup,
    },

    {
        label: "Contact",
        uri: "#",
        icon: MdPhoneInTalk,
    },

]

export const footerFollowus = [

    {
        label: "Facebook",
        uri: "#",
        icon:FaFacebook,
    },

    {
        label: "Twitter",
        uri: "#",
        icon:FaTwitter,
    },

    {
        label:"GitHub",
        uri:"#",
        icon:TbBrandGithubFilled,

    },


]
export const footerContactus = [

    {
        label: "+51 xxx xxx xxx",
        uri: "#",
        icon:MdNumbers,
    },

    {
        label: "2022xxxxxx.est@unaj.edu.pe",
        uri: "#",
        icon:MdOutlineMailOutline,
    },

    {
        label:"Puno, Perú",
        uri:"#",
        icon:FaMapMarkerAlt,
    },
    ]