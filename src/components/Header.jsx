import { Navbar } from "react-bootstrap";
import { Container, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Header({carrito}){
    return(
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>Empresa</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Brand></Navbar.Brand>
                <Navbar.Text className="ms-auto">
                <button type="button" className="btn btn-dark position-relative">
                <FontAwesomeIcon icon={faCartShopping} />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                        {carrito.length}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </button>
                <Nav.Link as={Link} to="/login">Ingresar</Nav.Link>
                </Navbar.Text>
            </Container>
        </Navbar>
    )
}
export default Header;