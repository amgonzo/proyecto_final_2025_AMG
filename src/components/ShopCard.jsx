import { Card, CardHeader, CardBody, CardTitle, CardSubtitle, CardFooter, Button, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import {CarritoContext} from '../context/CarritoContext';
import {React, useContext} from 'react';

function ShopCard({producto}){

      const navigate = useNavigate();
      const { agregaralcarrito } = useContext(CarritoContext);

      return (
        <Card style={{ width: '20rem' }}>
          <CardHeader className="text-center" style={{ backgroundColor: '#dee2e6', height: '18rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Card.Img variant="top" src={producto.thumbnail} style={{ width: '10rem', maxHeight: '100%', objectFit: 'contain', cursor: "pointer" }} onClick={() => {navigate('/productdetail/'+producto.id);}}/>
          </CardHeader>
          <CardBody style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '60%' }}>
            <div>
              <CardTitle><h3><b>{producto.title}</b></h3></CardTitle>
              <div>
                {producto.description.substring(0, 50)}<h6 className="text-end"><button className="btn" >Mostrar mas</button></h6>
              </div>
            </div>
            <div>
              <CardSubtitle className="text-end">Price: 10% discount</CardSubtitle>
              <CardSubtitle className="text-end"><div className="text-decoration-line-through">${producto.price}</div> <h2>${(0.9 * producto.price).toFixed(2)}</h2></CardSubtitle>
            </div>
          </CardBody>
          <CardFooter className="text-end" style={{ backgroundColor: '#343a40' }}>
            <Button variant="secondary" onClick={() => {agregaralcarrito(producto); }}>Comprar</Button>
          </CardFooter>
        </Card>
      );
    }

export default ShopCard