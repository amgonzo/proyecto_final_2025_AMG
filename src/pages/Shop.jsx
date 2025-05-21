import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ShopCard from '../components/ShopCard';
import Categorias from "../components/Categorias";

const Shop = ({ carrito, setCarrito }) => {
  const [categoria, setCategoria] = useState(null);
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let url = 'https://api.escuelajs.co/api/v1/products';
    if (categoria) {
      url = 'https://api.escuelajs.co/api/v1/products/?categoryId=' + categoria;
    }
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setProductos(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error de carga de API", err);
        setLoading(false);
      });
  }, [categoria]);

  if(loading)
    {
        return(
        <div>Cargando...</div>
        );
    }
    else
    {
      return (
        <Container className="mt-4" style={{ marginBottom: 50 }}>
          <h2>Shop</h2>
          <Categorias onCategoriaChange={setCategoria} />
          <Container className='mt-4'>
            <Row xs={1} md={2} lg={3} className="g-4 h-100">
              {productos.map((producto) => (
                <Col key={producto.id} className="d-flex align-items-stretch">
                  <ShopCard producto={producto} carrito={carrito} setCarrito={setCarrito} />
                </Col>
              ))}
            </Row>
          </Container>
        </Container>
      );
    }
};

export default Shop;
