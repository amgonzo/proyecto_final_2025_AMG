import React, { useState, useEffect } from "react";
import { Container, Table, Button, Modal, Form } from "react-bootstrap";
import TablaExtras from "../components/TablaExtras";
import {Image }from "react-bootstrap";
import Swal from 'sweetalert2';

const API_URL = "https://68515d448612b47a2c09be5a.mockapi.io/api/v1/products";

const Extras = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState("create"); 
  const [currentItem, setCurrentItem] = useState({ title: "", price: "", description: "", category: "", stock: "", stockminimo: "", thumbnail: "" });

  const titulos = ["ID","Nombre Producto","Precio","Descripción","Categoria","Stock","Stock Minimo","Imagen", "Acciones"];

  // Carga inicial
  const fetchItems = async () => 
    {

    //cambia el estado para la carga inicial
    setLoading(true);
    try 
    {
      //Hace una petición HTTP para obtener datos desde la URL API_URL y espera a que termine     
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error("Error al obtener extras");

      //es un método que convierte el cuerpo de la respuesta (que normalmente está en formato texto JSON) a un objeto JavaScript.
      const data = await res.json();


      //Guarda los datos recibidos en el estado o variable que maneja los items  
      setItems(data);
    } 
    catch (error) 
    {
      Swal.fire({
        icon: 'error',
        title: 'Extras',
        text: 'Error cargando datos',
      });
      console.error(error);
    } 
    //Independientemente de que haya ocurrido un error o no, indica que terminó la carga de datos  
    finally 
    {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleChange = (e) => 
    {
    setCurrentItem({ ...currentItem, [e.target.name]: e.target.value });
  };

  //Esta función envía un nuevo item a la API usando POST, luego actualiza la lista de items y cierra el modal si todo sale bien. 
  // Si ocurre un error, muestra una alerta y lo registra en la consola.
  const handleCreate = async () => 
    {
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(currentItem),
      });
      if (!res.ok) throw new Error("Error al crear el producto");
      await fetchItems();
      handleCloseModal();
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Extras',
        text: 'Error creando producto',
      });
      console.error(error);
    }
  };

  const handleUpdate = async () => {
    try {
      const res = await fetch(`${API_URL}/${currentItem.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(currentItem),
      });
      if (!res.ok) throw new Error("Error al actualizar producto");
      await fetchItems();
      handleCloseModal();
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Extras',
        text: 'Error actualizando producto',
      });
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("¿Seguro que quieres eliminar este producto?")) {
      try {
        const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
        if (!res.ok) throw new Error("Error al eliminar producto");
        await fetchItems();
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Extras',
          text: 'Error eliminando producto',
        });
        console.error(error);
      }
    }
  };

  const openCreateModal = () => {
    setModalMode("create");
    setCurrentItem({ title: "", price: "", description: "", category: "", stock: "", stockminimo: "", thumbnail: "" });
    setShowModal(true);
  };

  const openEditModal = (item) => {
    setModalMode("edit");
    setCurrentItem(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Container className="mt-4">
      <h1>Extras</h1>
      <Button variant="secondary" onClick={openCreateModal} className="mb-3">
        Crear nuevo producto
      </Button>

      {loading ? (
        <p>Cargando...</p>
      ) : (

        <TablaExtras datos={items} titulos={titulos} openEditModal={openEditModal} handleDelete={handleDelete}/>
      )}

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {modalMode === "create" ? "Crear nuevo producto" : "Editar producto"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Nombre del Producto</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el nombre del producto"
                name="title"
                value={currentItem.title}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPrice">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ingrese el precio"
                name="price"
                value={currentItem.price}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDescription">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Ingrese la descripción"
                name="description"
                value={currentItem.description}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCategory">
              <Form.Label>Categoria</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese la categoria"
                name="category"
                value={currentItem.category}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formStock">
              <Form.Label>Stock</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el stock"
                name="stock"
                value={currentItem.stock}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formStockMinimo">
              <Form.Label>Stock Minimo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el stock"
                name="stockminimo"
                value={currentItem.stockminimo}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formThumbnail">
              <Form.Label>Imagen</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese la url de la imagen"
                name="thumbnail"
                value={currentItem.thumbnail}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancelar
          </Button>
          <Button
            variant="primary"
            onClick={modalMode === "create" ? handleCreate : handleUpdate}
            disabled={!currentItem.title || !currentItem.price || !currentItem.description || !currentItem.category || !currentItem.stock || !currentItem.stockminimo || !currentItem.thumbnail}
          >
            {modalMode === "create" ? "Crear" : "Actualizar"}
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Extras;