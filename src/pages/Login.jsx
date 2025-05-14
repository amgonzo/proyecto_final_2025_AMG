import React from "react";
import { Container } from "react-bootstrap";
import {Form, Button} from 'react-bootstrap';

const Login=()=>
    {
    return(
    <Container className="mt-4">
        <h1>Login</h1>
        <p>Pagina de Inicio de la aplicacion</p>
        <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="password" />
        </Form.Group>
        <Button variant="secondary">Enviar</Button>
        </Form>
    </Container>
        );
    };

export default Login;