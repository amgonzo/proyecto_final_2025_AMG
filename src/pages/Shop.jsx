import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ShopCard from '../components/ShopCard';
import Categorias from "../components/Categorias";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Paginacion from '../components/Pagination';

const Shop = () => {
  const [categoria, setCategoria] = useState(null);
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busqueda, setBusqueda] = useState('');
  const itemsporpagina = 6;
  const [paginaactual, setPagina] =  useState(1);

  //const datospaginados = datos.slice(itemsporpagina * (paginaactual - 1), itemsporpagina * paginaactual);

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

  const filtrados = productos.filter(p =>
    p.title.toLowerCase().includes(busqueda.toLowerCase())
  );
  
  const datospaginados = filtrados.slice(itemsporpagina * (paginaactual - 1), itemsporpagina * paginaactual);
  
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
          <div className="input-group mb-3">
        <span className="input-group-text"><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
        <input
          type="text"
          className="form-control"
          placeholder="Buscar producto..."
          value={busqueda}
          onChange={e => setBusqueda(e.target.value)}
        />
      </div>
          <Categorias onCategoriaChange={setCategoria} />
          <Container className='mt-4'>
            <Row xs={1} md={2} lg={3} className="g-4 h-100">
              {datospaginados.map((producto) => (
                <Col key={producto.id} className="d-flex align-items-stretch">
                  <ShopCard producto={producto} />
                </Col>
              ))}
            </Row>
            <Row>
              <Col className="d-flex justify-content-end">
                  <Paginacion cantidad={filtrados.length} itemsporpagina={itemsporpagina} paginaactual={paginaactual} setPagina={setPagina} />
              </Col>
            </Row>
          </Container>
        </Container>
      );
    }
};

export default Shop;
