// import React from "react"; //No es necesario importarlo explícitamente cuando se utiliza un jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Importamos los componentes de la carpeta pages para cargarlos en el sistema

import Home from '@/pages/home/Home.jsx';
import {createBrowserRouter, Navigate} from "react-router";
import Register from "@/pages/auth/Register.jsx";
import VerifyEmail from "@/pages/auth/VerifyEmail.jsx";
import Dashboard from "@/pages/dashboard/Dashboard.jsx";
import Wrapper from "@/pages/dashboard/Wrapper.jsx";
import ProfileForm from "@/pages/profile/ProfileForm.jsx";
import NotFound from "@/pages/errors/NotFound.jsx";
import {DashboardLayout} from "@/layouts/admin/DashboardLayout.jsx";
import Login from "@/pages/auth/Login.jsx";
import Administracion from "@/pages/dashboard/Administracion.jsx";

export const router = createBrowserRouter([
    {path:"/", element: <Home/>},
    {path:"/login", element: <Login/>},
    {path:"/register", element: <Register/>},
    {path:"/verify-email", element: <VerifyEmail/>},
    //{path:"/dashboard", element: <Wrapper><Dashboard/></Wrapper>},
    //{path:"/profile", element: <Wrapper><ProfileForm/></Wrapper>},
    {path:"*", element: <NotFound/>},
    {
        path: "/admin",
        element: <DashboardLayout/>,
        children: [{
            index: true,
            element: <Navigate to='/admin/dashboard'/>,
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
                element: <h1>Sensores</h1>,
            },
            {
                path: "reportes",
                element: <h1>Reportes</h1>,
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

])