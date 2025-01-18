//Función: Incluye una función utilitaria truncateText para limitar el texto a un número máximo de caracteres.
// Características:
// Útil para mostrar vistas previas de mensajes largos con un límite definido​index.

export const truncateText = (text, maxLength = 500) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
};
