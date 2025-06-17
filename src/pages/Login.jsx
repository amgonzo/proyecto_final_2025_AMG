import {React, useState} from "react";
import { Container } from "react-bootstrap";
import {Form, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useAuth } from '../context/AuthContext';

const Login=()=>
    {
        const navigate = useNavigate();
        const [password, setPassword] = useState('');
        const [email, setEmail] = useState('');
        const { login } = useAuth();


        const emailEsValido = (email) => {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(email);
          };

        const handleLogin = (e) => {
            
            e.preventDefault();
            
            if (password.trim() === '' || email.trim() === '') 
                {
                Swal.fire({
                  icon: 'error',
                  title: 'Campos incompletos',
                  text: 'POr favor completar todos los campos',
                });
                return;
              }

              if (!emailEsValido(email)) {
                Swal.fire({
                  icon: 'error',
                  title: 'Email no es valido',
                  text: 'Ingresá un email con formato valido.',
                });
                return;
              }
              setPassword('');
              setEmail('');

              if (login(email, password)) 
                {
                  localStorage.setItem('auth', 'true');
                  navigate('/perfil');
                  localStorage.setItem('id', 'userAdmin');      
                }
              else {
                Swal.fire({
                  icon: 'error',
                  title: 'Login',
                  text: 'Usuario o contraseña no valido.',
                });
              }
          };

    return(
    <Container className="mt-5" style={{ maxWidth: 400, marginBottom:50 }}>
        <h1>Entrar</h1>
        <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="su-email@example.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="su password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </Form.Group>
        <Button variant="secondary" type="submit">Enviar</Button>
        </Form>
    </Container>
        );
    };

export default Login;