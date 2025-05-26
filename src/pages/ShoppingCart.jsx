import {React, useContext} from 'react';
import { Container, Nav } from "react-bootstrap";
import ItemShoppingCard from "../components/ItemShoppingCard";
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcMastercard, faCcVisa, faCcAmex, faCcPaypal } from '@fortawesome/free-brands-svg-icons';
import {CarritoContext} from '../context/CarritoContext';

const ShoppingCart=()=>
    {
        const { carrito, cantidaditems, importetotal } = useContext(CarritoContext);
        const shipping = 100;
    return(
    <Container className="mt-4" style={{ marginBottom:50 }}>
        <Row>     
            <Col className="col-lg-8">
                <h5 className="mb-3"><Nav.Link as={Link} to="/shop">Seguir Comprando</Nav.Link></h5>
                
                <hr/>

                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div>
                    <p className="mb-0">Usted tiene {cantidaditems()} items in su carrito</p>
                  </div>
                </div>       
                {carrito.map((compra) =>(
                <Col key={compra.id}>
                <ItemShoppingCard producto={compra}/>
                </Col>
                ))
                }
                <hr/>
                <div className="d-flex justify-content-between align-items-center mb-4">
                <div></div>
                  <div>
                    <p className="mb-1"><h3>Total:</h3></p>
                  </div>
                  <div>
                    <p className="mb-0"><span className="text-muted"><h2>${importetotal()}</h2></span></p>
                  </div>
                </div>       
              </Col>

              {/********cambio de parte**************** */}
              <Col className="col-lg-4">

                <div className="card bg-secondary text-white rounded-3">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                    <h5 className="mb-0">Card details</h5>
                    </div>
                    <p className="small mb-2">Card type</p>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                    <a href="#!" type="submit" className="text-white"><FontAwesomeIcon icon={faCcMastercard} className="fab fa-cc-paypal fa-2x"/></a>
                    <a href="#!" type="submit" className="text-white"><FontAwesomeIcon icon={faCcVisa} className="fab fa-cc-paypal fa-2x" /></a>
                    <a href="#!" type="submit" className="text-white"><FontAwesomeIcon icon={faCcAmex} className="fab fa-cc-paypal fa-2x"  /></a>
                    <a href="#!" type="submit" className="text-white"><FontAwesomeIcon icon={faCcPaypal} className="fab fa-cc-paypal fa-2x"  /></a>
                    </div>
                    <form className="mt-4">
                    <div className="form-outline form-white mb-4">
                        <input type="text" id="typeName" className="form-control form-control-lg" siez="17"
                        placeholder="Cardholder's Name" />
                        <label className="form-label" for="typeName">Cardholder's Name</label>
                    </div>

                    <div className="form-outline form-white mb-4">
                        <input type="text" id="typeText" className="form-control form-control-lg" siez="17"
                        placeholder="1234 5678 9012 3457" minlength="19" maxlength="19" />
                        <label className="form-label" for="typeText">Card Number</label>
                    </div>

                    <div className="row mb-4">
                        <div className="col-md-6">
                        <div className="form-outline form-white">
                            <input type="text" id="typeExp" className="form-control form-control-lg"
                            placeholder="MM/YYYY" size="7" minlength="7" maxlength="7" />
                            <label className="form-label" for="typeExp">Expiration</label>
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="form-outline form-white">
                            <input type="password" id="typeText" className="form-control form-control-lg"
                            placeholder="&#9679;&#9679;&#9679;" size="1" minlength="3" maxlength="3" />
                            <label className="form-label" for="typeText">Cvv</label>
                        </div>
                        </div>
                    </div>

                    </form>

                    <hr className="my-4"/>

                    <div className="d-flex justify-content-between">
                    <p className="mb-2">Subtotal</p>
                    <p className="mb-2">${importetotal()}</p>
                    </div>

                    <div className="d-flex justify-content-between">
                    <p className="mb-2">Shipping</p>
                    <p className="mb-2">${shipping}</p>
                    </div>

                    <div className="d-flex justify-content-between mb-4">
                    <p className="mb-2">Total(Incl. taxes)</p>
                    <p className="mb-2">${importetotal(shipping)}</p>
                    </div>

                    <button type="button" className="btn btn-info btn-block btn-lg">
                    <div className="d-flex justify-content-between">
                        <span>Finalizar Compra<i className="fas fa-long-arrow-alt-right ms-2"></i></span>
                    </div>
                    </button>

                </div>
                </div>

            </Col>
        </Row>
    </Container>
        );
    };

export default ShoppingCart;