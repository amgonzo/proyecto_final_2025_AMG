import React from "react";
import { Container } from "react-bootstrap";

const Perfil=()=>
    {
        const usuario = localStorage.getItem('id');

    return(
    <Container className="mt-4" style={{marginBottom:50}}>
        <h1>Perfil</h1>
        <p>de {usuario}</p>
    </Container>
        );
    };

export default Perfil;