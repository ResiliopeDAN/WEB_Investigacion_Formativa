# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Librerías instaladas en este proyecto:
-prop-types
-router-dom
-npm
-supabase

Código a ejecutar en la terminal para instalar las librerías:
npm install @supabase/supabase-js
npm install prop-types
npm install react-router-dom@6
npm install 


# **Documentación del Sistema**

## **Introducción**
Este documento explica la estructura y funcionalidad del sistema, detallando los archivos clave, su organización y el propósito de cada componente. Se ha aplicado **Arquitectura Limpia** para separar la lógica de negocio de la presentación, facilitando la escalabilidad y mantenibilidad del proyecto.

---

## **Estructura de Archivos**
```
/src
 ├── /api                # Configuración de Supabase
 │    ├── supabaseClient.js
 │
 ├── /hooks              # Hooks personalizados
 │    ├── useAuth.js     # Manejo de autenticación
 │    ├── useProfile.js  # Manejo del perfil de usuario
 │
 ├── /services           # Funciones de acceso a la API
 │    ├── authService.js # Funciones para autenticación
 │    ├── profileService.js # Funciones para perfil de usuario
 │
 ├── /pages              # Vistas principales
 │    ├── /auth
 │    │    ├── Register.jsx
 │    │    ├── Login.jsx
 │    ├── ProfileForm.jsx
 │
 ├── App.jsx             # Componente principal
 ├── main.jsx            # Punto de entrada del sistema
```

---

## **Explicación de Archivos y Funcionalidades**

### **📌 `api/supabaseClient.js`**
- **Función:** Configura la conexión con Supabase.
- **Descripción:** Exporta una instancia de Supabase para ser utilizada en todo el sistema.

---

### **📌 `hooks/useAuth.js`**
- **Función:** Maneja la autenticación del usuario.
- **Descripción:**
    - Permite el **registro** y **inicio de sesión** mediante Supabase.
    - Gestiona mensajes de error y éxito.
    - Redirige a `/profile` tras registrarse y a `/dashboard` tras iniciar sesión.

Ejemplo de uso en `Register.jsx` y `Login.jsx`:
```jsx
const { handleRegister, message } = useAuth();
await handleRegister(email, password);
```

---

### **📌 `hooks/useProfile.js`**
- **Función:** Maneja la lógica del perfil de usuario.
- **Descripción:**
    - Obtiene y actualiza datos del perfil desde la base de datos de Supabase.
    - Almacena estados (`useState`) y efectos (`useEffect`).

Ejemplo de uso en `ProfileForm.jsx`:
```jsx
const { formData, handleChange, handleSubmit } = useProfile();
<form onSubmit={handleSubmit}>
    <input name="nombres" value={formData.nombres} onChange={handleChange} />
</form>
```

---

### **📌 `services/authService.js`**
- **Función:** Gestiona las peticiones de autenticación a Supabase.
- **Descripción:**
    - `registerUser(email, password)`: Crea un usuario.
    - `loginUser(email, password)`: Inicia sesión del usuario.

Ejemplo de implementación en `useAuth.js`:
```jsx
const { success, error } = await registerUser(email, password);
```

---

### **📌 `services/profileService.js`**
- **Función:** Gestiona las peticiones de perfil a Supabase.
- **Descripción:**
    - `getProfile(userId)`: Obtiene los datos del perfil del usuario.
    - `updateProfile(userId, profileData)`: Actualiza los datos del perfil.

Ejemplo de implementación en `useProfile.js`:
```jsx
const { profile, error } = await getProfile(user.id);
```

---

### **📌 `pages/auth/Register.jsx`**
- **Función:** Permite a los usuarios registrarse.
- **Descripción:**
    - Usa `useAuth.js` para manejar el registro.
    - Captura email y contraseña.
    - Redirige al formulario de perfil después de un registro exitoso.

Ejemplo de uso:
```jsx
<form onSubmit={handleSubmit}>
    <input type="email" onChange={(e) => setEmail(e.target.value)} />
</form>
```

---

### **📌 `pages/auth/Login.jsx`**
- **Función:** Permite a los usuarios iniciar sesión.
- **Descripción:**
    - Usa `useAuth.js` para gestionar la autenticación.
    - Captura email y contraseña.
    - Redirige al **dashboard** si la autenticación es exitosa.

Ejemplo de uso:
```jsx
const { handleLogin, message } = useAuth();
await handleLogin(email, password);
```

---

### **📌 `pages/ProfileForm.jsx`**
- **Función:** Permite a los usuarios completar o editar su perfil.
- **Descripción:**
    - Usa `useProfile.js` para manejar los datos.
    - Muestra un formulario para actualizar **nombres, apellidos y número de contacto**.
    - Guarda los cambios en Supabase y redirige a `/dashboard`.

Ejemplo de uso:
```jsx
<form onSubmit={handleSubmit}>
    <input name="nombres" value={formData.nombres} onChange={handleChange} />
</form>
```

---

## **📌 Conclusión**
### **Beneficios de Esta Organización**
✅ **Modularidad:** Cada archivo tiene una única responsabilidad.
✅ **Reutilización:** `useAuth.js` y `useProfile.js` pueden utilizarse en varias páginas.
✅ **Escalabilidad:** Es fácil agregar nuevas funciones sin afectar otras partes del código.
✅ **Mantenimiento sencillo:** Si Supabase cambia su API, solo se actualizan los archivos de `services/`.

🚀 **Este enfoque permite una aplicación bien estructurada, fácil de mantener y con código limpio!**

