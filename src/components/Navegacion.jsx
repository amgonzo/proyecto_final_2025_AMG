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
          <Navbar.Brand as={Link} to="/">Mi Sitio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              {isAuth && (
              <>
              <Nav.Link as={Link} to="/perfil">Perfil </Nav.Link>
              </>
              )}
            </Nav>
            <Nav>
            {!isAuth ? (
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
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