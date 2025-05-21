import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ItemCarritoLateral from './ItemCarritoPaginaLateral';
import { useNavigate } from 'react-router-dom';

function CarritoLateral({show, setShow, carrito, setCarrito}) {

  const handleClose = () => setShow(false);
  const navigate = useNavigate();

  function finalizar () {
    navigate('/carrito');
    setShow(false);
  }

  return (
    <>
      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Carrito</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        {(carrito.length == 0) ? <div>Carrito vacio</div> :

        carrito.map((compra) =>(
                <Col key={compra.id}>
                <ItemCarritoLateral producto={compra} carrito={carrito} setCarrito={setCarrito}/>
                </Col>
                ))
        }
              <hr/>
              <Button variant="secondary" onClick={finalizar}>Fanalizar Compra</Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default CarritoLateral;
