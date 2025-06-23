import Table from 'react-bootstrap/Table';
import Paginacion from './Pagination';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';

function TablaExtras({datos, titulos, openEditModal, handleDelete}){
    const [itemsporpagina, setItemsporPagina] = useState(5);
    const [paginaactual, setPagina] =  useState(1);

    const datospaginados = datos.slice(itemsporpagina * (paginaactual - 1), itemsporpagina * paginaactual);
    const [show, setShow] = useState(false);

    return(
        <>
        <Container>
            <hr className="hr" />
                <Row className="mb-4">
                    <Col xs={10}></Col>
                    <Col className="d-flex justify-content-end">
                    <Form.Label>Ver</Form.Label>
                    </Col>
                    <Col className="d-flex justify-content-end">
                    <Form.Select size="sm" onChange={(e)=>setItemsporPagina(e.target.value)}>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                    </Form.Select>
                    </Col>
                </Row>
            <Row>
            <Col>
                <Table striped bordered hover>
                    <thead>
                        <tr className="text-center">
                        {titulos.map((titulo, index) => (
                            <th key={index}>{titulo}</th>
                        ))}
                        </tr>
                    </thead>
                    <tbody>
                        {datospaginados.map((dato, index) => (
                            <tr key={index}>
                                
                                <td>{dato.id}</td>    
                                <td>{dato.title}</td>    
                                <td>{dato.price}</td>    
                                <td>{dato.description.substring(0, 20) + '...' }</td>
                                <td>{dato.category}</td>     
                                <td>{dato.stock}</td>    
                                <td>{dato.stockminimo}</td> 
                                <td><div>
                            <Card.Img variant="top" src={dato.thumbnail}
                            className="img-fluid rounded-3" alt="image item" style={{height:"100%", maxHeight: "40px", width: "100%", maxWidth: "40px"}}/>
                        </div></td>    
                                
                                <td className="text-center">
                                <Button
                                    variant="secondary"
                                    size="sm"
                                    onClick={() => openEditModal(dato)}
                                    className="me-2"
                                >
                                    <FontAwesomeIcon icon={faPen} />
                                </Button>
                                
                                <Button
                                    variant="secondary"
                                    size="sm"
                                    onClick={() => handleDelete(dato.id)}
                                >
                                   <FontAwesomeIcon icon={faTrash} />
                                </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Col>
        </Row>
        <Row>
            <Col className="d-flex justify-content-end">
                <Paginacion cantidad={datos.length} itemsporpagina={itemsporpagina} paginaactual={paginaactual} setPagina={setPagina} />
            </Col>
        </Row>
        <hr className="hr" />
    </Container>
    <ToastContainer className="p-3" position='middle-center' style={{ zIndex: 1 }}>
        <Toast onClose={() => setShow(false)} show={show} delay={1000} autohide>
            <Toast.Header>
            <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
            />
            <strong className="me-auto">Titulo</strong>
            <small>algo</small>
            </Toast.Header>
            <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
        </Toast>
        </ToastContainer>
  </>
    )
}

export default TablaExtras;