import Card from 'react-bootstrap/Card';
import NumberInputWithControls from './NumberInputWithControls'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import {CarritoContext} from '../context/CarritoContext';
import {React, useContext} from 'react';

function ItemShoppingCard({producto}) {

  const { cambiarcantidaditems, quitardelcarrito } = useContext(CarritoContext);

  const handleQuantityChange = (newQuantity) => {
    //console.log('Nueva cantidad:', newQuantity);
    //setQuantity(newQuantity);
    cambiarcantidaditems(producto, newQuantity);
    //setCarrito(carrito.map(a => (a.id === producto.id ? {...a, cantidad: newQuantity} : a)))
    
    // Aquí puedes realizar otras acciones con la nueva cantidad
  }; 
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
                <FontAwesomeIcon icon={faTrashCan} onClick={() => quitardelcarrito(producto)}/>
                </button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default ItemShoppingCard;