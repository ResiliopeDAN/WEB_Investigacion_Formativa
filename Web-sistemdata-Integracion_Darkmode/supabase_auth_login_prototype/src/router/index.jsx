// import React from "react"; //No es necesario importarlo explícitamente cuando se utiliza un jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Importamos los componentes de la carpeta pages para cargarlos en el sistema

import Home from '@/pages/home/Home.jsx';
import {createBrowserRouter, Navigate} from "react-router";
import Register from "@/pages/auth/Register.jsx";
import VerifyEmail from "@/pages/auth/VerifyEmail.jsx";
import Dashboard from "@/pages/dashboard/admin/Dashboard.jsx";
import Wrapper from "@/lib/Wrapper.jsx";
import ProfileForm from "@/pages/profile/ProfileForm.jsx";
import NotFound from "@/pages/errors/NotFound.jsx";
import {AdminDashboardLayout} from "@/layouts/dashboard/admin/AdminDashboardLayout.jsx";
import Login from "@/pages/auth/Login.jsx";
import Administracion from "@/pages/dashboard/admin/Administracion.jsx";
import UserDashboardLayout from "@/layouts/dashboard/public/UserDashboardLayout.jsx";
import Dash from "@/pages/dashboard/public/Dash.jsx";
import Historial from "@/pages/dashboard/public/Historial.jsx";
import Soporte from "@/pages/dashboard/public/Soporte.jsx";
import {HomeLayout} from "@/layouts/Root/HomeLayout.jsx";
import Sensores from "@/pages/dashboard/public/Sensores.jsx";
import SensoresAd from "@/pages/dashboard/admin/Sensores.jsx";
import {AboutUsPage} from "@/pages/home/nosotros/AboutUs.jsx";


export const router = createBrowserRouter([
    //Home Layout
    {
        path:"/",
        element: <HomeLayout/>,
        children:[
            {
                index: true,
                element: <Navigate to='/'/>,
            },
            {
            path: "nosotros",
            element: <AboutUsPage />
    }]

    },
    {path:"/login", element: <Login/>},
    {path:"/register", element: <Register/>},
    {path:"/verify-email", element: <VerifyEmail/>},
    //{path:"/dashboard", element: <Wrapper><Dashboard/></Wrapper>},
    //{path:"/profile", element: <Wrapper><ProfileForm/></Wrapper>},
    {path:"*", element: <NotFound/>},

    //Dashboard Admin
    {
        path: "/admin",
        element: <Wrapper rolPermitido="Administrador"><AdminDashboardLayout/></Wrapper>,
        children: [{
            index: true,
            element: <Navigate to='dashboard'/>,
        },
            {
                path: 'dashboard',
                element: <Dashboard/>,
            },
            {
                path: "administracion",
                element: <Administracion/>,
            },
            {
                path: "usuarios",
                element: <h1>Usuarios</h1>,
            },
            {
                path: "sensores",
                element: <SensoresAd/>,
            },
            {
                path: "reportes",
                element: <Sensores/>,
            },
            {
                path: "configuracion",
                element: <h1>Configuracion</h1>,
            },
            {
                path: "profile",
                element: <ProfileForm/>,
            }
            ]},

    //Dashboard Public
    {
        path: "/user",
        element: <Wrapper rolPermitido="Registrado"><UserDashboardLayout/></Wrapper>,
        children: [{
            index: true,
            element: <Navigate to='dashboard'/>,
        },
            {
                path: 'dashboard',
                element: <Dash/>,
            },
            {
                path: "sensores",
                element: <Sensores/>,
            },
            {
                path: "historial",
                element: <Historial/>,
            },
            {
                path: "configuraciones",
                element: <ProfileForm />,
            },
            {
                path: "soporte",
                element: <Soporte />,
            }
        ]},

])