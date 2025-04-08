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
        .min(6, "La contraseña debe tener al menos 6 caracteres")
        .regex(/(?=.*[a-z])/, "Debe contener al menos una letra minúscula")
        .regex(/(?=.*[A-Z])/, "Debe contener al menos una letra mayúscula")
        .regex(/(?=.*\d)/, "Debe contener al menos un número")
        .regex(/(?=.*[#@$!%*?&])/, "Debe contener al menos un carácter especial (#@$!%*?&)")
        .max(30, "La contraseña no puede tener más de 30 caracteres"),
    confirm: z.string()
    })
    .refine(data => data.password === data.confirm, {
    message: "Las contraseñas no coinciden",
    path: ["confirm"]
});

export const adminsSchema = z.object({
    nombre: z.string()
        .nonempty("El Nombre es requerido")
        .min(3, "El nombre debe tener al menos 3 caracteres")
        .max(30, "El nombre debe tener menos de 30 caracteres")
        .regex(/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/, "Solo se permiten letras y espacios"),
    apellidos: z.string()
        .nonempty("El Apellido es requerido")
        .min(3, "El apellido debe tener al menos 3 caracteres")
        .max(30, "El apellido debe tener menos de 30 caracteres")
        .regex(/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/, "Solo se permiten letras y espacios"),
    dni: z.string()
        .nonempty("El DNI es requerido")
        .min(10, "El número de contacto debe tener al menos 10 caracteres")
        .max(10, "El número de contacto debe tener menos de 10 caracteres")
        .regex(/^[0-9]+$/, "Solo se permiten números"),
    email: z.string()
        .email("El correo electrónico es requerido")
        .regex(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,'Correo electrónico no válido'),
    rol: z.string()
        .nonempty("Designe un Rol").array(),
});

export const sensorSchema = z.object({})