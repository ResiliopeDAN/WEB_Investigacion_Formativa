import { useEffect, useState } from 'react'
import { supabase } from './supabaseClient'; //Conecta con supabase
import './App.css'

//Crearemos el componente para el CRUD de countries con las 4 operaciones básicas siguiendo la documentación oficial de supabase



const CountriesCRUD = () => {
    const[countries, setCountries] = useState([]); //Lista de paises

    const[loading, setLoading] = useState(true); // Estado de carga

    const [name, setName] = useState(''); // Para el [CREATE]nombre del nuevo pais

    const [editingId, setEditingId] = useState(null); // Para el [UPDATE] ID del país en edición

    //Función para obtener los datos de la tabla 'countries'[READ]
    const fetchCountries = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('countries')
            .select();
        if(error) {
            console.error('Error al obtener países de supabase:', error);
        } else {
            setCountries(data);
        }
        setLoading(false);
    }

    //Hook para cargar los datos al montar el componente
    useEffect(() => {
        fetchCountries();
    }, []);




    //Aqui crearemos el apartado [CREATE]->
    const createCountry = async (e) => {
        e.preventDefault();
        const {error} = await supabase
            .from('countries')
            .insert([{name}]); // Inserta un nuevo país con el nombre ingresado
        if (error) {
            console.error('Error al crear país:', error);
        } else {
            setName(''); // Limpia el formulario
            fetchCountries(); // Actualiza la lista
        }
    };

    //Actualizar datos: [UPDATE]
    // Función para iniciar la edición
    const startEdit = (country) => {
        setEditingId(country.id);
        setName(country.name); // Carga el nombre actual en el formulario
    };
    // Función para guardar los cambios
    const updateCountry = async (e) => {
        e.preventDefault();
        const { error } = await supabase
            .from('countries')
            .update({ name })
            .eq('id', editingId); // Actualiza el registro con el ID específico
        if (error) {
            console.error('Error al actualizar país:', error);
        } else {
            setName('');
            setEditingId(null);
            fetchCountries(); // Actualiza la lista
        }
    };

    // Eliminar datos: [DELETE]
    // Función para eliminar un país
    const deleteCountry = async (id) => {
        const { error } = await supabase
            .from('countries')
            .delete()
            .eq('id', id); //Elimina el registro con el ID especifico
        if(error){
            console.error('Error al eliminar país', error);
        } else {
            fetchCountries(); // Actualiza la lista
        }
    };

    // Formulario dentro del 'return' de CREATE, se añade al último.
    return (
        <div>
            <form onSubmit={editingId ? updateCountry : createCountry}>
                <input
                    type="text"
                    placeholder="Nombre del país"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <button type="submit">{editingId ? 'Guardar Cambios' : 'Agregar País'}</button>
            </form>

            <h1>CRUD de Países</h1>
            {loading ? (
                <p>Cargando datos...</p>
            ) : (
                <ul>
                    {countries.map((country) => (
                        <li key={country.id}>
                            {country.name}
                            <button onClick={() => startEdit(country)}>Editar</button>
                            <button onClick={() => deleteCountry(country.id)}>Eliminar</button>
                        </li>
                    ))}
                </ul>

            )}
        </div>
    );


};





// Esto es para decirle a react que es un componenete llamado CountriesCRUD el cual con ese nombre se podrá usar en App.jsx
export default  CountriesCRUD;