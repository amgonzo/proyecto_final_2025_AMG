import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardFooter from 'react-bootstrap/CardFooter';
import CardSubtitle from 'react-bootstrap/CardSubtitle';
import CardHeader from 'react-bootstrap/CardHeader';

function ItemCarrito({producto}) {
  return (
    <Card style={{ width: '18rem', height:'30rem' }}> 
        <CardHeader className="text-center" style={{backgroundColor: '#dee2e6', width:'18rem', height: '18rem'}} >
            <Card.Img variant="top" src={producto.image} style={{ width: '10rem' }}/>
        </CardHeader>
        <Card.Body>
            <Card.Title><b>{producto.title}</b></Card.Title>
            <CardSubtitle className="text-end">Cantidad: {producto.cantidad}</CardSubtitle>
            <CardSubtitle className="text-end"><div className="text-decoration-line-through">{producto.price.toFixed(2)}</div> <h2>{(0.9* producto.price).toFixed(2)}</h2></CardSubtitle>
        </Card.Body>
        <CardFooter className="text-end" style={{backgroundColor:'#343a40'}}>
            <Button variant="secondary">eliminar</Button>
        </CardFooter>
    </Card>
  );
}

export default ItemCarrito;