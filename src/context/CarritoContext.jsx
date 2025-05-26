import { createContext, useState } from "react"

export const CarritoContext = createContext();

export const CarrtioProvider = ({children}) => {

    const [carrito, setCarrito] = useState([]);

    function findArrayElementByID(array, id) {
        return array.find((element) => {
          return element.id === id;
        })
      }
      const agregaralcarrito = producto => {
            if (!findArrayElementByID(carrito, producto.id)) {
                setCarrito([
                ...carrito,
                { id: producto.id, title: producto.title, price: producto.price, image: producto.images[0], cantidad: 1 }
                ]);
            } else {
                setCarrito(carrito.map(a => (a.id === producto.id ? { ...a, cantidad: a.cantidad + 1 } : a)));
            }
        }
      const quitardelcarrito = producto => {
            const newArray = carrito.filter(item => item.id !== producto.id)
            setCarrito(newArray);
          }

      const cambiarcantidaditems = (producto, cantidad) => {
        setCarrito(carrito.map(a => (a.id === producto.id ? {...a, cantidad: cantidad} : a)))
      }

      const importetotal = (ship) => { 
        if(ship != null)
        {return (carrito.reduce((total, item) => total + item.price * item.cantidad, 0) + ship).toFixed(2);}
        else
        {return carrito.reduce((total, item) => total + item.price * item.cantidad, 0).toFixed(2);}
    }
    const cantidaditems = () => { 
        return carrito.reduce((cantidad, item) => cantidad + item.cantidad, 0);
    }

    return (
        <CarritoContext.Provider value={{ carrito, agregaralcarrito, quitardelcarrito, cambiarcantidaditems, cantidaditems, importetotal }}>
          {children}
        </CarritoContext.Provider>
      );
}