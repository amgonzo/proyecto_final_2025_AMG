import React from "react";
import { Container } from "react-bootstrap";
import { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ShopCard from '../components/ShopCard';
import Categorias from "../components/Categorias";

const Shop=({carrito, setCarrito})=>
    {
      useEffect(()=>
            {
              // hacer el pedido de la api
              fetch('https://api.escuelajs.co/api/v1/products')
              .then(res=>res.json())
              .then(data=>{
                setProductos(data);
                setProductosFiltrados(data);
                //console.log(data);
                //setLoading(false);
              })
              .catch(err=>{
                console.error("Error de carga de API",err);
                //setLoading(false);
              });
            },[]);

          const [productos, setProductos] = useState([]);
          const [productosFiltrados, setProductosFiltrados] = useState([]);

        //const[loading,setLoading]=useState(true);
        const filtroCategoria = (categoria) => {

          if(categoria == 0){
            setProductosFiltrados(productos);
            return;
          }
          else
          {
            const datosFIltrados = productos.filter(producto => producto.category.id == categoria);
            //console.log(datosFIltrados);
            setProductosFiltrados(datosFIltrados);
          }
        }

        return(
<Container className="mt-4" style={{marginBottom:50}}>
    <h2>Shop</h2>
    <Categorias filtroCategoria={filtroCategoria}/>
        <Container className='mt-4'>
            <Row xs={1} md={2} lg={3} className="g-4 h-100">
                {
                  
                productosFiltrados.map((producto) => ( 
                <Col key={producto.id} className="d-flex align-items-stretch">
                <ShopCard producto={producto} carrito={carrito} setCarrito={setCarrito}/>
                </Col>
            ))}
        </Row>
        </Container>
</Container>
        );
    };

export default Shop;