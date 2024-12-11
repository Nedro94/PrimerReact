import React, { useState } from "react";
import NavBar from "./component/NavBar ";
import ItemListContainer from "./component/ItemListContainer";
import Cart from "./component/cart"; 

const App = () => {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState("tienda");

  {/* manejar la adición de productos al carrito */}
  const handleAddToCart = (count) => {
    const newItem = {
      id: "1",
      name: "Camisa Tiger",
      quantity: count,
      price: 20,
    };

    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === newItem.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + count }
            : item
        );
      }

      return [...prevCart, newItem];
    });
  };

  return (
    <div>
      {/* Barra de navegación */}
      <NavBar view={view} setView={setView} />
      {view === "tienda" && <ItemListContainer stock={10} initial={1} onAdd={handleAddToCart} />}
      {view === "carrito" && <Cart cart={cart} />}
    </div>
  );
};

export default App;