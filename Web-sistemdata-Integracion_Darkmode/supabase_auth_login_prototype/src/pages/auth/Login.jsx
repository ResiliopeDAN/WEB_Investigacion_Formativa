import { useState } from "react";
//import supabase from "../../api/supabaseClient.js";
//import supabaseClient from "../../api/supabaseClient.js"; supabaseClient
import { useAuth } from "@/hooks/useAuth"
import AuthIndex from "@/pages/auth/index.jsx";
import {
    Box,
    Button,
    Heading,
    Text,
    Stack,
    Center,
    Flex,
    Field
} from "@chakra-ui/react";
import { Mail } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema } from "@/lib/validators.js";
import {AuthInput} from "@/components/shared/inputs/CustomInput.jsx";


const Login = () => {
    const [error, setError] = useState("");
    const { handleLogin, message } = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);



    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            await handleLogin(data.email, data.password)
        }
        catch (err) {
            setError("Ocurrió un error al iniciar sesión");
        } finally {
            setLoading(false);
        }
    };


    return (
        <AuthIndex>
            <Flex
                direction="column"
                align="center">
                <Box
                    p={3}
                    borderRadius="full"
                    mb={1.5}
                >
                    <Mail size={55} color="#2ECC71" />
                </Box>
                <Heading
                    as="h2"
                    fontSize="2xl"
                    fontWeight="semibold"
                    color="white"
                    mb={2}
                >
                    ¡Bienvenido de nuevo!
                </Heading>
                <Text color="whiteAlpha.900" fontSize="sm" textAlign="center">
                    Inicia sesión para acceder a tu cuenta
                </Text>
            </Flex>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack mt={10}>
                    <Field.Root>
                        <AuthInput
                            type="email"
                            register={register}
                            name="email"
                            errors={errors}
                            label="Correo"
                        />
                    </Field.Root>

                    <AuthInput
                        type={showPassword ? "text" : "password"}
                        register={register}
                        name="password"
                        errors={errors}
                        label="Contraseña"
                        showPassword={showPassword}
                        togglePasswordVisibility={() => setShowPassword(!showPassword)}
                    />
                    <Button
                        type="submit"
                        w="full"
                        size="lg"
                        bg="#98cc3b"
                        isLoading={loading}
                        _hover={{ bg: "#2ECC71" }}
                        _active={{ bg: "#25A65B" }}
                        color="white"
                        fontSize="md"
                        boxShadow="0 4px 12px rgba(39, 174, 96, 0.3)"
                    >
                        Ingresar
                    </Button>
                    <Center mt={6}>
                        <Text color="whiteAlpha.900" fontSize="sm">
                            ¿No tienes una cuenta?{" "}
                            <ChakraLink
                                as={RouterLink}
                                to="/register"
                                color="#2ECC71"
                                _hover={{ color: "#27AE60" }}
                                transition="color 0.2s"
                                fontWeight="medium"
                            >
                                Crear cuenta
                            </ChakraLink>
                        </Text>
                    </Center>
                    {error && (
                        <Text color="#FF6B6B" textAlign="center" pt={4} fontWeight="medium">
                            {error}
                        </Text>
                    )}
                </Stack>
            </form>
            {message && <span>{message}</span>}
        </AuthIndex>
    );

}

export default Login;