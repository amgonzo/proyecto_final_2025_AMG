import {React, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Card} from 'react-bootstrap';

const ProductDetail=()=>
    {
        const {idProducto} = useParams();
        const [producto, setProducto] = useState();
        const [loading, setLoading] = useState(true);
        const [notimage, setNotImages] = useState(false);

        useEffect(()=>
            {
              let idP = idProducto;
              let url = '';
              if (idProducto>1000)
               {idP = idProducto - 1000;
                url='https://68515d448612b47a2c09be5a.mockapi.io/api/v1/products/';
                setNotImages(true);}

              else{url='https://dummyjson.com/products/';
                setNotImages(false);
              }
                // hacer el pedido de la api
              fetch(url+idP)
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
                {notimage?<Card.Img variant="top" src={producto.thumbnail} className="img-fluid rounded-3" alt="Shopping item" style={{width: "65px", margin:"10px"}}/>:
                producto.images.map ((imagen) => (
                    <Card.Img variant="top" src={imagen}
                    className="img-fluid rounded-3" alt="Shopping item" style={{width: "65px", margin:"10px"}}/>
                ))}
                <h3>Precio: ${producto.price}</h3>
            </Container>
        );
    }
    };

export default ProductDetail;