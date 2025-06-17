import React, { useState, useEffect } from "react";
import { Container, Table, Button, Modal, Form } from "react-bootstrap";
import Tabla from "../components/Tabla";

const API_URL = "https://68515d448612b47a2c09be5a.mockapi.io/api/v1/clients";

const Clientes = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState("create"); 
  const [currentItem, setCurrentItem] = useState({ name: "", address: "", city: "", state: "", zipcode: "" });

  const titulos = ["ID","Nombre y Apellido","Dirección","Ciudad","Provincia","Código Postal","Acciones"];

  // Carga inicial
  const fetchItems = async () => 
    {

    //cambia el estado para la carga inicial
    setLoading(true);
    try 
    {
      //Hace una petición HTTP para obtener datos desde la URL API_URL y espera a que termine     
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error("Error al obtener clientes");

      //es un método que convierte el cuerpo de la respuesta (que normalmente está en formato texto JSON) a un objeto JavaScript.
      const data = await res.json();


      //Guarda los datos recibidos en el estado o variable que maneja los items  
      setItems(data);
    } 
    catch (error) 
    {
      alert("Error cargando datos");
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
      if (!res.ok) throw new Error("Error al crear el cliente");
      await fetchItems();
      handleCloseModal();
    } catch (error) {
      alert("Error creando cliente");
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
      if (!res.ok) throw new Error("Error al actualizar cliente");
      await fetchItems();
      handleCloseModal();
    } catch (error) {
      alert("Error actualizando cliente");
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("¿Seguro que quieres eliminar este cliente?")) {
      try {
        const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
        if (!res.ok) throw new Error("Error al eliminar cliente");
        await fetchItems();
      } catch (error) {
        alert("Error eliminando cliente");
        console.error(error);
      }
    }
  };

  const openCreateModal = () => {
    setModalMode("create");
    setCurrentItem({ name: "", address: "", city: "", state: "", zipcode: "" });
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
      <h1>Clientes</h1>

      <Button variant="secondary" onClick={openCreateModal} className="mb-3">
        Crear nuevo cliente
      </Button>

      {loading ? (
        <p>Cargando...</p>
      ) : (

        <Tabla datos={items} titulos={titulos} openEditModal={openEditModal} handleDelete={handleDelete}/>
      )}

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {modalMode === "create" ? "Crear nuevo cliente" : "Editar cliente"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Nombre y Apellido</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el nombre y apellido"
                name="name"
                value={currentItem.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formAddress">
              <Form.Label>Dirección</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese la dirección"
                name="address"
                value={currentItem.address}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCity">
              <Form.Label>Ciudad</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese la ciudad"
                name="city"
                value={currentItem.city}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formState">
              <Form.Label>Provincia</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese la provincia"
                name="state"
                value={currentItem.state}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formZipCode">
              <Form.Label>Código Postal</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el código postal"
                name="zipcode"
                value={currentItem.zipcode}
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
            disabled={!currentItem.name || !currentItem.address || !currentItem.city || !currentItem.state || !currentItem.zipcode}
          >
            {modalMode === "create" ? "Crear" : "Actualizar"}
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Clientes;