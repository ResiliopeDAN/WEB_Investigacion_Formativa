// import React from "react"; //No es necesario importarlo explícitamente cuando se utiliza un jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Importamos los componentes de la carpeta pages para cargarlos en el sistema
import Home from './pages/home/Home.jsx';
import Register from './pages/auth/Register.jsx'
import Login from './pages/auth/Login.jsx'
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Wrapper from "./pages/dashboard/Wrapper.jsx";
import ProfileForm from "./pages/profile/ProfileForm.jsx";
import NotFound from "./pages/errors/NotFound.jsx";
import VerifyEmail from "./pages/auth/VerifyEmail.jsx";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* home */}
                <Route path="/" element={<Home/>} />

                {/* register */}
                <Route path="/register" element={<Register/>} />


                {/* login */}
                <Route path="/login" element={<Login/>} />

                {/* verificación de email */}
                <Route path="/verify-email" element={<VerifyEmail />} />

                {/* dashboard */}
                <Route path="/dashboard" element={
                    <Wrapper>
                        <Dashboard/>
                    </Wrapper>
                } />

                {/* profile_form */}
                <Route path="/profile" element={
                    <Wrapper>
                        <ProfileForm/>
                    </Wrapper>

                } />
                {/* not found: Esta ruta es para cuando el usuario quiera redirigirse a una ruta desconocida*/}
                <Route path="*" element={<NotFound />} />

            </Routes>
        </BrowserRouter>
    )
}

export default App;