import { useState } from "react";
import { useAuth } from "@/hooks/useAuth.js";
import {Link as RouterLink} from "react-router-dom";
import AuthIndex from "@/pages/auth/index.jsx";
import {Box, Button, Center, Field, Flex, Heading, Stack, Text} from "@chakra-ui/react";
import {UserPlus} from "lucide-react";
import {AuthInput} from "@/components/shared/inputs/CustomInput.jsx";
import {Link as ChakraLink} from "@chakra-ui/react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {registerSchema} from "@/lib/validators.js";


function Register() {
    const { handleRegister, message } = useAuth();
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(registerSchema),
    });

    const onSubmit = async (data) => {
        setLoading(true);
        try {
        await handleRegister(data.email, data.password);
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
                    <UserPlus size={55} color="#2ECC71" />
                </Box>
                <Heading
                    as="h2"
                    fontSize="2xl"
                    fontWeight="semibold"
                    color="white"
                    mb={2}
                >
                    ¡Registrate ahora!
                </Heading>
                <Text color="whiteAlpha.900" fontSize="sm" textAlign="center">
                    Únete a nuestra plataforma y conoce nuestra data completa
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
                            label="Correo Electronico"
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
                    <AuthInput
                        type={showPassword ? "text" : "password"}
                        register={register}
                        name="confirm"
                        errors={errors}
                        label="Confirmar contraseña"
                        showPassword={showPassword}
                        togglePasswordVisibility={() => setShowPassword(!showPassword)}
                    />
                    <Button
                        type="submit"
                        w="full"
                        size="lg"
                        bg="#27AE60"
                        isLoading={loading}
                        _hover={{ bg: "#2ECC71" }}
                        _active={{ bg: "#25A65B" }}
                        color="white"
                        fontSize="md"
                        boxShadow="0 4px 12px rgba(39, 174, 96, 0.3)"
                    >
                        Registrarme
                    </Button>
                    <Center mt={6}>
                        <Text color="whiteAlpha.900" fontSize="sm">
                            ¿Ya tienes una cuenta?{" "}
                            <ChakraLink
                                as={RouterLink}
                                to="/Login"
                                color="#2ECC71"
                                _hover={{ color: "#27AE60" }}
                                transition="color 0.2s"
                                fontWeight="medium"
                            >
                                Iniciar sesión
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

export default Register;
