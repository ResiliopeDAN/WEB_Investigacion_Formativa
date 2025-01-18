import { Box, Grid, GridItem } from "@chakra-ui/react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import MessageForm from "../components/MessageForm";

//Función: Renderiza el pie de página con enlaces sociales y un formulario de mensaje.
// Características:
// Incluye un enlace a Twitter y GitHub con los detalles del desarrollador del proyecto.
// Integra el componente MessageForm para enviar mensajes​Footer.


export default function Footer() {
  return (
    <Box position="fixed" bottom="0" width="100%">
      <MessageForm />

      <Grid
        gridTemplateColumns="auto 1fr"
        textAlign="center"
        alignItems="center"
        py="4px"
        px="30px"
        height="40px"
        bg="white"
      >
        <GridItem justifySelf="start">
          {/* Built by{" "} */}
          {/* <a href="http://shimon-wosner.vercel.app" target="_blank"> */}
          <a
            href="https://twitter.com/shwosner"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter style={{ display: "inline" }} />
            @shwosner
          </a>
        </GridItem>
        <GridItem justifySelf="end">
          <a
            href="https://github.com/shwosner/realtime-chat-supabase-react"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub style={{ display: "inline" }} /> Source code
          </a>
        </GridItem>
      </Grid>
    </Box>
  );
}
