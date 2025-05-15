import React from "react";
import { Container } from "react-bootstrap";
import {Form, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login=()=>
    {
        const navigate = useNavigate();
        const handleLogin = () => {
            localStorage.setItem('auth', 'true');
            navigate('/perfil');
            localStorage.setItem('id', 'userAdmin');
          };

    return(
    <Container className="mt-5" style={{ maxWidth: 400, marginBottom:50 }}>
        <h1>Login</h1>
        <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="password" />
        </Form.Group>
        <Button variant="secondary" onClick={handleLogin}>Enviar</Button>
        </Form>
    </Container>
        );
    };

export default Login;