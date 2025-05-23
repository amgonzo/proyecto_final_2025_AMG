import Navegacion from './components/Navegacion';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Header from './components/Header';
import { useState } from 'react';
import Footer from './components/footer';
import Login from './pages/Login';
import Perfil from './pages/protectedroute/Perfil';
import ProtectedRoute from './components/ProtectedRoute';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetail from './pages/ProductDetail';

function App() {
  const [carrito, setCarrito] = useState([]);
  return (
    <div>
      <Router>
        <div>
          <Header carrito={carrito} setCarrito={setCarrito}/>
          <Navegacion carrito={carrito} setCarrito={setCarrito}/>
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/shop' element={<Shop carrito={carrito} setCarrito={setCarrito}/>} />
              <Route path='/contact' element={<Contact/>} />
              <Route path='/login' element={<Login/>} />
              <Route path='/productdetail/:idProducto' element={<ProductDetail/>} />
              <Route path='/carrito' element={<ShoppingCart carrito={carrito} setCarrito={setCarrito}/>} />
              <Route path="/perfil" element={
                <ProtectedRoute><Perfil /></ProtectedRoute>
              } />
          </Routes>
          <Footer/>
        </div>
      </Router>
    </div>
  )
}

export default App