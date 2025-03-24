import { useState } from "react";
import {
    Box,
    Container,
    Heading,
    Text,
    Button,
    VStack, Flex, SimpleGrid, Wrap,
} from '@chakra-ui/react'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {DashInput} from "@/components/shared/inputs/CustomInput.jsx";
import {adminsSchema} from "@/lib/validators.js";

import {LuUser} from "react-icons/lu";





const AdminsForm = () => {
    const [loading, setLoading] = useState("");
    const [error, setError] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(adminsSchema),
    });



    const onSubmit = async (data) => {
        setLoading(true);
        try {
            console.log(data);
        } catch (err) {
            setError("Ocurrió un error al iniciar sesión");
        } finally {
            setLoading(false);
        }
    };
    return(
        <Flex
            bg="bg.panel"
            as="form" direction="column" onSubmit={handleSubmit(onSubmit)} p={5} w="full">
            <Wrap columns={["2", "4", "4"]} justifyContent="space-between" mt={10}>
                {/* Nombre */}
                <DashInput register={register} name="nombre" errors={errors} placeholder="Nombre" label="Nombre" icon={LuUser}/>
                <DashInput icon={LuUser} register={register} name="apellidos" errors={errors} placeholder="Apellidos" label="Apellidos"/>
                <DashInput icon={LuUser} register={register} name="dni" errors={errors} placeholder="DNI" label="DNI"/>
                <DashInput icon={LuUser} register={register} name="email" errors={errors} placeholder="Correo" label="Correo Electronico"/>
                <DashInput icon={LuUser} register={register} name="rol" errors={errors} placeholder="Seleccionar" label="Rol"/>
            </Wrap>
            <Button mt="10px" type="submit"
                    isLoading={loading}
                    w="full"
            >Guardar</Button>
        </Flex>
    )
}

function Administracion () {

    return (
        <Flex w="full">
            <AdminsForm/>
        </Flex>
    )
}

export default Administracion