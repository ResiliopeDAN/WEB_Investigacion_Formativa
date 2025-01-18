// import { ColorModeScript } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import App from "./App";

//Función: Punto de entrada para renderizar la aplicación React.
// Características:
// Renderiza el componente App dentro del nodo raíz del DOM​index.


const root = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(root);

reactRoot.render(
  <>
    {/* <ColorModeScript /> */}
    <App />
  </>
);
