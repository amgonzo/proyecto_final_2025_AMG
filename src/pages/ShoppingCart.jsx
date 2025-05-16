import React from "react";
import { Container } from "react-bootstrap";
import ItemShoppingCard from "../components/ItemShoppingCard";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';


const ShoppingCart=({carrito, setCarrito})=>
    {
        const total = () => { 
            return carrito.reduce((total, item) => total + item.price * item.cantidad, 0).toFixed(2);
        }

    return(
    <Container className="mt-4">
        <h1>Carrito</h1>
        <p>Pagina de Carrito de compras</p>
        <div className="row">     
            <div className="col-lg-8">
                <h5 className="mb-3"><a href="#!" className="text-body"><i
                      className="fas fa-long-arrow-alt-left me-2"></i>Continue shopping</a></h5>
                <hr/>

                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div>
                    <p className="mb-1">Shopping cart</p>
                    <p className="mb-0">You have 4 items in your cart</p>
                  </div>
                  <div>
                    <p className="mb-0"><span className="text-muted">Sort by:</span> <a href="#!"
                        className="text-body">price <i className="fas fa-angle-down mt-1"></i></a></p>
                  </div>
                </div>       
                {carrito.map((compra) =>(
                <Col key={compra.id}>
                <ItemShoppingCard producto={compra} carrito={carrito} setCarrito={setCarrito}/>
                </Col>
                ))
                }
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div>
                    <p className="mb-1">Total:</p>
                  </div>
                  <div>
                    <p className="mb-0"><span className="text-muted"><h2>{total()}</h2></span></p>
                  </div>
                </div>       
              </div>

              {/********cambio de parte**************** */}
              <div className="col-lg-4">

                <div className="card bg-secondary text-white rounded-3">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                    <h5 className="mb-0">Card details</h5>
                    </div>
                    <p className="small mb-2">Card type</p>
                    <a href="#!" type="submit" className="text-white"><i
                        className="fab fa-cc-mastercard fa-2x me-2"></i></a>
                    <a href="#!" type="submit" className="text-white"><i
                        className="fab fa-cc-visa fa-2x me-2"></i></a>
                    <a href="#!" type="submit" className="text-white"><i
                        className="fab fa-cc-amex fa-2x me-2"></i></a>
                    <a href="#!" type="submit" className="text-white"><i className="fab fa-cc-paypal fa-2x"></i></a>

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
                    <p className="mb-2">${total()}</p>
                    </div>

                    <div className="d-flex justify-content-between">
                    <p className="mb-2">Shipping</p>
                    <p className="mb-2">$20.00</p>
                    </div>

                    <div className="d-flex justify-content-between mb-4">
                    <p className="mb-2">Total(Incl. taxes)</p>
                    <p className="mb-2">$4818.00</p>
                    </div>

                    <button type="button" className="btn btn-info btn-block btn-lg">
                    <div className="d-flex justify-content-between">
                        <span>$4818.00</span>
                        <span>Checkout <i className="fas fa-long-arrow-alt-right ms-2"></i></span>
                    </div>
                    </button>

                </div>
                </div>

            </div>
        </div>
    </Container>
        );
    };

export default ShoppingCart;