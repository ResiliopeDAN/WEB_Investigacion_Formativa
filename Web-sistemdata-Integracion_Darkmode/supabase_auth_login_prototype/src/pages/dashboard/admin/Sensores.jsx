import { useState } from "react";
import {
    Box,
    Container,
    Heading,
    Text,
    Button,
    VStack, Flex, SimpleGrid, Wrap, HStack, Stack, Icon, Field, createListCollection,
} from '@chakra-ui/react'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {DashInput} from "@/components/shared/inputs/CustomInput.jsx";
import { sensorSchema} from "@/lib/validators.js";

import {LiaAtSolid, LiaIdCardSolid, LiaUserEditSolid} from "react-icons/lia";
import {IoDocumentTextOutline, IoSaveOutline} from "react-icons/io5";





const SensorForm = () => {
    const [loading, setLoading] = useState("");
    const [error, setError] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm({
        resolver: zodResolver(sensorSchema),
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
            as="form"
            direction="column"
            onSubmit={handleSubmit(onSubmit)}
            p={5}
            w="full"
            borderRadius="2xl" >
            <VStack gap={{base: 3, md:5}}>
                <SimpleGrid w="full" columns={["2", null, "4"]}  columnGap={{base: "12px", md:"30px", lg:"70px"}} rowGap={{base: 3, md:5}}>
                    {/* Nombre */}
                    <DashInput register={register} name="serie" errors={errors} placeholder="Serie" label="Serie" />
                    <DashInput register={register} name="marca" errors={errors} placeholder="Marca" label="Marca"/>
                    <DashInput
                        register={register}
                        name="tipo"
                        errors={errors}
                        label="Tipo"
                        type="select"
                        control={control}
                        placeholder="Seleccionar"
                        options={tipoForm}
                    />
                    <DashInput
                        register={register}
                        name="estado"
                        errors={errors}
                        label="Estado"
                        type="select"
                        control={control}
                        placeholder="Seleccionar"
                        options={estadoForm}
                    />


                </SimpleGrid >
                <Stack w="full" direction="row" justifyContent={{base:"center", md:"end"}}>
                    <Button
                        type="submit"
                        colorPalette="green"
                        rounded="lg"
                        _active={{colorPalette:"gray"}}
                        isLoading={loading}
                    >
                        Nuevo
                        <Icon as={IoDocumentTextOutline} size="sm"/>
                    </Button>
                    <Button
                        type="submit"
                        variant="surface"
                        colorPalette="gray"
                        rounded="lg"

                        _active={{
                            colorPalette: "green",
                        }}
                        isLoading={loading}
                    >
                        Guardar
                        <Icon as={IoSaveOutline} size="sm"/>
                    </Button>
                </Stack>
            </VStack>
        </Flex>
    )
}
const tipoForm = createListCollection({
    items: [
        { label: "T_P_SIN_POLVO", value: "t_p_sin_polvo" },
        { label: "T_M_SIN_POLVO", value: "t_m_sin_polvo" },
        { label: "T_M_CON_POLVO", value: "t_m_con_polvo" },
        { label: "T_P_CON_POLVO", value: "t_p_con_polvo" },
        { label: "T_AMBIENTE", value: "t_ambiente" },
    ],
})
const estadoForm = createListCollection({
    items: [
        { label: "Operativo", value: "operativo" },
        { label: "Inactivo", value: "inactivo" },
        { label: "Mantenimiento", value: "mantenimiento" },
    ],
})


function SensoresAd () {

    return (
        <VStack w="full">
            <SensorForm/>
        </VStack>
    )
}

export default SensoresAd