import React from "react";
import { styles } from "../service/style";

const NavBar  = ({ view, setView }) => {
  return (
    <nav style={styles.nav}>
      <button
        style={{
          margin: "0 10px",
          padding: "10px 20px",
          backgroundColor: view === "tienda" ? "#007bff" : "#ccc",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
        onClick={() => setView("tienda")}
      >
        Tienda
      </button>
      <button
        style={{
          margin: "0 10px",
          padding: "10px 20px",
          backgroundColor: view === "carrito" ? "#007bff" : "#ccc",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
        onClick={() => setView("carrito")}
      >
        Carrito
      </button>
    </nav>
  );
};

export default NavBar;
