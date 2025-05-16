import React from "react";
import { Container } from "react-bootstrap";

const Perfil=()=>
    {
        const usuario = localStorage.getItem('id');

    return(
    <Container className="mt-4">
        <h1>Perfil</h1>
        <p>Pagina de {usuario}</p>
    </Container>
        );
    };

export default Perfil;