import React from "react";
import { styles } from "../service/style";

const Cart  = ({ cart }) => {
  return (
    <div style={styles.containerCart}>
      <h3>Carrito</h3>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul style={styles.ul}>
          {cart.map((item) => (
            <li key={item.id} style={styles.li}>
              {item.name} - Cantidad: {item.quantity} - Precio Total: $
              {item.quantity * item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
