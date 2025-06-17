import {React, useState, useContext} from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import CarritoLateral from './CarritoLateral';
import {CarritoContext} from '../context/CarritoContext';

const Navegacion = () => {
    const isAuth = localStorage.getItem('auth') === 'true';
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const { carrito } = useContext(CarritoContext);

    const cerrarSesion = () => {
      localStorage.removeItem('auth');
      navigate('/login');
    };
    
    const contar = () => { 
      return carrito.reduce((cantidad, item) => cantidad + item.cantidad, 0);
    }
    
    return (
      <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Inicio</Nav.Link>
              <Nav.Link as={Link} to="/shop">Shopping</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contacto</Nav.Link>
              {isAuth && (
              <>
              <Nav.Link as={Link} to="/perfil">Perfil </Nav.Link>
              <Nav.Link as={Link} to="/clientes">Clientes </Nav.Link>
              </>
              )}
            </Nav>
            <Nav>
            {!isAuth ? (
              <Nav.Link as={Link} to="/login">Entrar</Nav.Link>
            ) : (
              <Button variant="outline-light" onClick={cerrarSesion}>Cerrar sesión</Button>
            )}
          
          <Navbar.Text className="ms-auto">
                <button variant="outline-light" type="button" className="btn btn-dark position-relative">
                <FontAwesomeIcon icon={faCartShopping} onClick={()=>(setShow(true))}/>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                        {contar()}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </button>
                </Navbar.Text>
                </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <CarritoLateral show={show} setShow={setShow}/>
      </>
    );
  };

export default Navegacion;