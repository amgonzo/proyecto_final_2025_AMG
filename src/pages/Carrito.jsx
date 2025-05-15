import React from "react";
import { Container } from "react-bootstrap";
import ItemCarrito from "../components/ItemCarrito";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const Carrito=({carrito})=>
    {
    return(
    <Container className="mt-4">
        <h1>Carrito</h1>
        <p>Pagina de Carrito de compras</p>
        <Row xs={1} md={4} className="g-4">
        {carrito.map((compra) =>(
           <Col key={compra.id}>
           <ItemCarrito producto={compra}/>
           </Col>
        ))
        }
        </Row>
    </Container>
        );
    };

export default Carrito;