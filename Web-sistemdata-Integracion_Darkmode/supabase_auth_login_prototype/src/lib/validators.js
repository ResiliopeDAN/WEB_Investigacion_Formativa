import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email("Correo electrónico no válido"),
    password: z.string().min(6, "Mínimo 6 caracteres"),
});

export const registerSchema = z.object({
    email: z.string()
        .email("El correo electrónico es requerido")
        .regex(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,'Correo electrónico no válido'),
    password: z.string()
        .nonempty("Ingrese una contraseña")
        .min(6, "Mínimo 6 caracteres")
        .regex( /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{6,30}$/,'contraseña no es lo suficiente fuerte'),
    confirm: z.string()
    })
    .refine(data => data.password === data.confirm, {
    message: "Las contraseñas no coinciden",
    path: ["confirm"]
});