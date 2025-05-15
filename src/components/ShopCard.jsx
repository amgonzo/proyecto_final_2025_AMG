import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardFooter from 'react-bootstrap/CardFooter';
import CardSubtitle from 'react-bootstrap/CardSubtitle';
import CardHeader from 'react-bootstrap/CardHeader';


function ShopCard({producto, carrito, setCarrito}){

    function findArrayElementByID(array, id) {
        return array.find((element) => {
          return element.id === id;
        })
      }

    return (
        <Card style={{ width: '18rem', height:'30rem' }}>
        <CardHeader className="text-center" style={{backgroundColor: '#dee2e6', width:'18rem', height: '18rem'}} >
            <Card.Img variant="top" src={producto.images[0]} style={{ width: '10rem' }}/>
        </CardHeader>
        <Card.Body>
            <Card.Title><b>{producto.title}</b></Card.Title>
            <div>      
            {producto.description.substring(0, 50)}<h6  className="text-end"><button className="btn">Show more</button></h6>
            </div>
            <CardSubtitle className="text-end">Price: 10% discount</CardSubtitle>
            <CardSubtitle className="text-end"><div className="text-decoration-line-through">{producto.price.toFixed(2)}</div> <h2>{(0.9* producto.price).toFixed(2)}</h2></CardSubtitle>
        </Card.Body>
        <CardFooter className="text-end" style={{backgroundColor:'#343a40'}}>
            <Button variant="secondary" onClick={()=>{
                if(!findArrayElementByID(carrito, producto.id))
                {    
                setCarrito([
                    ...carrito,
                    { id: producto.id, title: producto.title, price: producto.price, image: producto.images[0], cantidad: 1 }
                  ]);
                }
                else
                {
                    setCarrito(carrito.map(a => (a.id === producto.id ? {...a, cantidad: a.cantidad+1} : a)))
                }
            }}>comprar</Button>
        </CardFooter>
        </Card>

    )
}

export default ShopCard