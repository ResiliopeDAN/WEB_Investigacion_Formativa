//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import './App.css'

//Se crea la instancia del clientede supabase
const supabase = createClient("https://vxcwbmsawpbzqvosgcyj.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4Y3dibXNhd3BienF2b3NnY3lqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU0ODI3MzcsImV4cCI6MjA1MTA1ODczN30.PAR7AInFkOEeKQagWdMUuVdfzhwkBoGVejfbB1cioh0");

//Definición de componente App
//countries es el estado que almacena una lista de países
//setcountries es la funcipon que actualiza el estado
//al inicio el arreglo es vacío []
function App() {
  const [countries, setCountries] = useState([]);


  //useEffect ejecuta la función getCountries una vez cuando el componente se monta debido arreglo vacío []
  useEffect(() => {
    getCountries();
  }, []);

  //función getCountries, consulta a supabase de la tabla countries, genera un select para todos los registros de la tabla countries. Devuelve un objeto con los datos (data).
  // setCountries(data), guarda los datos obtenidos en el estado countries.
  async function getCountries(){
    const { data } = await supabase.from("countries").select();
    setCountries(data);
  }


  //Renderizado de una lista, se maneja el arreglo countries para crear un elemento <li> por cada país.
  //key={country,name}: React quiere una clave única para cada elemento en una lista para optimizar el renderizado, en este caso se una el nombre del país
  return (
    <ul>
      {countries.map((country) =>(
        <li key={country.name}>{country.name}</li>
      )) }
    </ul>
  );

}

//Permite usar el componente App en otras partes de la aplicación.
export default App;
