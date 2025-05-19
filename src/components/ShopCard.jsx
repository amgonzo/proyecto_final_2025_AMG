import { Card, CardHeader, CardBody, CardTitle, CardSubtitle, CardFooter, Button, Col, Row } from 'react-bootstrap';

function ShopCard({producto, carrito, setCarrito}){

    function findArrayElementByID(array, id) {
        return array.find((element) => {
          return element.id === id;
        })
      }

      return (
        <Card style={{ width: '20rem' }}>
          <CardHeader className="text-center" style={{ backgroundColor: '#dee2e6', height: '18rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Card.Img variant="top" src={producto.images[0]} style={{ width: '10rem', maxHeight: '100%', objectFit: 'contain' }} />
          </CardHeader>
          <CardBody style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '60%' }}>
            <div>
              <CardTitle><h3><b>{producto.title}</b></h3></CardTitle>
              <div>
                {producto.description.substring(0, 50)}<h6 className="text-end"><button className="btn btn-link">Show more</button></h6>
              </div>
            </div>
            <div>
              <CardSubtitle className="text-end">Price: 10% discount</CardSubtitle>
              <CardSubtitle className="text-end"><div className="text-decoration-line-through">${producto.price.toFixed(2)}</div> <h2>${(0.9 * producto.price).toFixed(2)}</h2></CardSubtitle>
            </div>
          </CardBody>
          <CardFooter className="text-end" style={{ backgroundColor: '#343a40' }}>
            <Button variant="secondary" onClick={() => {
              if (!findArrayElementByID(carrito, producto.id)) {
                setCarrito([
                  ...carrito,
                  { id: producto.id, title: producto.title, price: producto.price, image: producto.images[0], cantidad: 1 }
                ]);
              } else {
                setCarrito(carrito.map(a => (a.id === producto.id ? { ...a, cantidad: a.cantidad + 1 } : a)));
              }
            }}>Comprar</Button>
          </CardFooter>
        </Card>
      );
    }

export default ShopCard