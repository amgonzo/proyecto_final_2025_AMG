import Navegacion from './components/Navegacion';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/footer';
import Login from './pages/Login';
import Perfil from './pages/protectedroute/Perfil';
import ProtectedRoute from './components/ProtectedRoute';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetail from './pages/ProductDetail';
import {CarrtioProvider} from './context/CarritoContext';
import { Container } from 'react-bootstrap';
import { Toaster} from 'react-hot-toast';

function App() {
  //const [carrito, setCarrito] = useState([]);
  return (
    <div>
       <CarrtioProvider>
        <Router>
          <div className="d-flex flex-column min-vh-100">
            <Header/>
            <Navegacion/>
            <Container fluid className="flex-grow-1">
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/shop' element={<Shop/>} />
                <Route path='/contact' element={<Contact/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/productdetail/:idProducto' element={<ProductDetail/>} />
                <Route path='/carrito' element={<ShoppingCart />} />
                <Route path="/perfil" element={
                  <ProtectedRoute><Perfil /></ProtectedRoute>
                } />
            </Routes>
            </Container>
            <Footer/>
            <Toaster position="top-center" reverseOrder={false} />
          </div>
        </Router>
      </CarrtioProvider>
    </div>
  )
}

export default App