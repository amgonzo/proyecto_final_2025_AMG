import Navegacion from './components/Navegacion';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Header from './components/Header';
import { useState } from 'react';
import Footer from './components/footer';
import Login from './pages/Login';

function App() {
  const [carrito, setCarrito] = useState([]);
  return (
    <div>
      <Router>
        <div>
          <Header carrito={carrito}/>
          <Navegacion/>
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/shop' element={<Shop carrito={carrito} setCarrito={setCarrito}/>} />
              <Route path='/contact' element={<Contact/>} />
              <Route path='/login' element={<Login/>} />
          </Routes>
          <Footer/>
        </div>
      </Router>
    </div>
  )
}

export default App