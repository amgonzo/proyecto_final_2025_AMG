import React from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Button} from 'react-bootstrap';

const Navegacion = () => {
    const isAuth = localStorage.getItem('auth') === 'true';
    const navigate = useNavigate();

    const cerrarSesion = () => {
      localStorage.removeItem('auth');
      navigate('/login');
    };

    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">Menu</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Inicio</Nav.Link>
              <Nav.Link as={Link} to="/shop">Shopping</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contacto</Nav.Link>
              {isAuth && (
              <>
              <Nav.Link as={Link} to="/perfil">Perfil </Nav.Link>
              </>
              )}
            </Nav>
            <Nav>
            {!isAuth ? (
              <Nav.Link as={Link} to="/login">Entrar</Nav.Link>
            ) : (
              <Button variant="outline-light" onClick={cerrarSesion}>Cerrar sesión</Button>
            )}
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };

export default Navegacion;