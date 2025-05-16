import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardFooter from 'react-bootstrap/CardFooter';
import CardSubtitle from 'react-bootstrap/CardSubtitle';
import CardHeader from 'react-bootstrap/CardHeader';
import NumberInputWithControls from './NumberInputWithControls'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

function ItemShoppingCard({producto, carrito, setCarrito}) {
  
  const handleQuantityChange = (newQuantity) => {
    //console.log('Nueva cantidad:', newQuantity);
    //setQuantity(newQuantity);
    setCarrito(carrito.map(a => (a.id === producto.id ? {...a, cantidad: newQuantity} : a)))
    // Aquí puedes realizar otras acciones con la nueva cantidad
  };

  const handleDeleteCard = () => {
    const newArray = carrito.filter(item => item.id !== producto.id)
    setCarrito(newArray);
  }
  
  return (
      <div className="card mb-3">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-row align-items-center">
              <div>
              <Card.Img variant="top" src={producto.image}
              className="img-fluid rounded-3" alt="Shopping item" style={{width: "65px"}}/>
              </div>
              <div className="ms-3">
                <h5>{producto.title}</h5>
                <p className="small mb-0">description</p>
              </div>
            </div>
            <div className="d-flex flex-row align-items-center ">
              <div style={{width: "80px", marginLeft:"15px"}}>
                <h6 className="mb-0">${producto.price.toFixed(2)}</h6>
              </div>
              <div style={{width: "110px"}} >
                <h5 className="fw-normal mb-0"><NumberInputWithControls 
                initialValue={producto.cantidad}
                  min={1}
                  max={10}
                  onChange={handleQuantityChange}/></h5>
              </div>
              <div style={{width: "80px", marginLeft:"15px"}}>
                <h5 className="mb-0">${(producto.price * producto.cantidad).toFixed(2)}</h5>
              </div>
              <button type="button" className="btn position-relative">
                <FontAwesomeIcon icon={faTrashCan} onClick={handleDeleteCard}/>
                </button>
            </div>
          </div>
        </div>
      </div>
      /*
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
    </Card>*/
  );
}

export default ItemShoppingCard;