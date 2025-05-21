import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardFooter from 'react-bootstrap/CardFooter';
import CardSubtitle from 'react-bootstrap/CardSubtitle';
import CardHeader from 'react-bootstrap/CardHeader';
import NumberInputWithControls from './NumberInputWithControls'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Row, Col } from 'react-bootstrap';

function ItemCarritoLateral({producto, carrito, setCarrito}) {
  
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
            <Row>
                <Col>
                <Row>
                    <Col><div className="d-flex flex-row align-items-center">
                        <div>
                            <Card.Img variant="top" src={producto.image}
                            className="img-fluid rounded-3" alt="Shopping item" style={{width: "65px"}}/>
                        </div>
                    </div></Col>
                    <Col>{producto.title}</Col>
                </Row>
                </Col>
                <p></p>
                <hr/>
            <Col>
            <div className="d-flex flex-row align-items-center ">
              <div>
                <h6 className="mb-0" style={{width: "80px"}}>${producto.price.toFixed(2)}</h6>
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
                </Col>
            </Row>
          </div>
        </div>
      </div>
  );
}

export default ItemCarritoLateral;