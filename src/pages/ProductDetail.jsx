import {React, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Card} from 'react-bootstrap';

const ProductDetail=()=>
    {
        const {idProducto} = useParams();
        const [producto, setProducto] = useState();
        const [loading, setLoading] = useState(true);

        useEffect(()=>
            {
              // hacer el pedido de la api
              fetch('https://dummyjson.com/products/'+idProducto)
              .then(res=>res.json())
              .then(data=>{
                setProducto(data);
                //console.log(data);
                setLoading(false);
              })
              .catch(err=>{
                console.error("Error de carga de API",err);
                setLoading(false);
              });
            },[]);

            
    if(loading)
        {
            return(
            <div>Cargando...</div>
            );
        }
        else
        {
            return(
            <Container className="mt-4" style={{marginBottom:50}}>
                <p>Detalle del Producto</p>
                <h2>{producto.title}</h2>
                <h5>{producto.description}</h5>
                {producto.images.map ((imagen) => (
                    <Card.Img variant="top" src={imagen}
                    className="img-fluid rounded-3" alt="Shopping item" style={{width: "65px", margin:"10px"}}/>
                ))}
                <h3>Precio: ${producto.price}</h3>
            </Container>
        );
    }
    };

export default ProductDetail;