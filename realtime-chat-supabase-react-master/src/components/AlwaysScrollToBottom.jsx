import React, { useEffect, useRef } from "react";

//Asegura que el scroll siempre se mantenga al final de la lista de mensajes.
//Usa un ref para desplazar automáticamente la vista hacia abajo cuando cambia el contenido​AlwaysScrollToBottom

const AlwaysScrollToBottom = () => {
  const elementRef = useRef();
  useEffect(() => elementRef.current.scrollIntoView());
  return <div ref={elementRef} />;
};

export default AlwaysScrollToBottom;
