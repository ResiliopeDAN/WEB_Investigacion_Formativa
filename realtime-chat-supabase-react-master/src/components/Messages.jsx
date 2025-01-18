import { Alert, Box, Button, Spinner } from "@chakra-ui/react";
import { useAppContext } from "../context/appContext";
import Message from "./Message";

//Función: Muestra la lista de mensajes del chat en tiempo real.
// Características:
// Muestra un Spinner mientras los mensajes se cargan.
// Muestra un mensaje de error con un botón para intentar reconectar en caso de fallo.
// Renderiza un texto indicando "No messages" si no hay mensajes disponibles.
// Utiliza el componente Message para renderizar cada mensaje, indicando si pertenece al usuario actual.

export default function Messages() {
  const { username, loadingInitial, error, getMessagesAndSubscribe, messages } =
    useAppContext();
  const reversed = [...messages].reverse();
  if (loadingInitial)
    return (
      <Box textAlign="center">
        <Spinner />
      </Box>
    );
  if (error)
    return (
      <Alert status="error" mt="20px">
        {error}
        <Button
          ml="5px"
          onClick={getMessagesAndSubscribe}
          colorScheme="red"
          variant="link"
        >
          try to reconnect
        </Button>
      </Alert>
    );

  if (!messages.length)
    return (
      <Box as="h3" textAlign="center">
        No messages 😞
      </Box>
    );

  return reversed.map((message) => {
    const isYou = message.username === username;
    return <Message key={message.id} message={message} isYou={isYou} />;
  });
}
