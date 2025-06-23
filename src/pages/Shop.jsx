import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ShopCard from '../components/ShopCard';
import Categorias from "../components/Categorias";

const Shop = () => {
  const [categoria, setCategoria] = useState(null);
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

 const fechProductos = async() => {
    
    setLoading(true);
    try 
    {
      let url='https://dummyjson.com/products';
      if (categoria) {
        //url = 'https://api.escuelajs.co/api/v1/products/?categoryId=' + categoria;
        if (categoria != 'extras')
        {url = 'https://dummyjson.com/products/category/' + categoria;}
        else
        {url = 'https://68515d448612b47a2c09be5a.mockapi.io/api/v1/products';}
      }
      const res = await fetch(url);
      if (!res.ok) throw new Error("Error al obtener productos");  
      
      const data = await res.json();
      if(categoria != 'extras'){setProductos(data.products);}
      else{
        const data2 = data.map(a => (a.id === a.id ? { ...a, id: parseInt(a.id) + 1000 } : a)); // Suma 1 al elemento        
        setProductos(data2);

      }
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
    fechProductos();
  }, [categoria]);

  if(loading)
    {
        return(
        <div>Cargando...</div>
        );
    }
    else
    {
      return (
        <Container className="mt-4" style={{ marginBottom: 50 }}>
          <h2>Shop</h2>
          <Categorias onCategoriaChange={setCategoria} />
          <Container className='mt-4'>
            <Row xs={1} md={2} lg={3} className="g-4 h-100">
              {productos.map((producto) => (
                <Col key={producto.id} className="d-flex align-items-stretch">
                  <ShopCard producto={producto} />
                </Col>
              ))}
            </Row>
          </Container>
        </Container>
      );
    }
};

export default Shop;
