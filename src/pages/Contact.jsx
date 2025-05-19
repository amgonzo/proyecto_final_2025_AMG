import {React, useState} from "react";
import { Container } from "react-bootstrap";
import {Form, Button} from 'react-bootstrap';
import Swal from 'sweetalert2';

const Contact=()=>
    {

        const [nombre, setNombre] = useState('');
        const [email, setEmail] = useState('');
        const [mensaje, setMensaje] = useState('');

        const emailEsValido = (email) => {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(email);
          };

        const handleSubmit = (e) => {
            e.preventDefault();
        
            // Valido Campos completos
            if (nombre.trim() === '' || email.trim() === '' || mensaje.trim() === '') 
              {
              Swal.fire({
                icon: 'error',
                title: 'Campos incompletos',
                text: 'POr favor completar todos los campos',
              });
              return;
            }
        
            // Validar formato de email
            if (!emailEsValido(email)) {
              Swal.fire({
                icon: 'error',
                title: 'Email no es valido',
                text: 'Ingresá un email con formato valido.',
              });
              return;
            }
                // Si todo está OK y no hay ningun return
            Swal.fire({
                icon: 'success',
                title: 'Formulario enviado',
                text: `Gracias, ${nombre}. Te responderemos pronto.`,
            });
        
            setNombre('');
            setEmail('');
            setMensaje('');
            };
            
        return(
    <Container className="mt-4" style={{marginBottom:50}}>
    <h1>Contactanos</h1>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="escriba su Nombre y Apellido" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="suemail@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Mensaje</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Su mensaje aqui"  value={mensaje} onChange={(e) => setMensaje(e.target.value)}/>
        </Form.Group>
        <Button variant="secondary" type="submit">Enviar</Button>
        </Form>
    </Container>
        );
    };

export default Contact;