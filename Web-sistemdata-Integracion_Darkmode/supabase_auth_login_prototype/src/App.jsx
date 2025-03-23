// import React from "react"; //No es necesario importarlo explícitamente cuando se utiliza un jsx
import {Flex} from "@chakra-ui/react";
import Home from "@/pages/home/Home.jsx";

//Importamos los componentes de la carpeta pages para cargarlos en el sistema



function App() {
    return (
        <Flex>
            <Home/>
        </Flex>
    )
}

export default App;