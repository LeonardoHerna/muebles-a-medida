import React from "react";

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: "#111",
      color: "#ccc",
      padding: "30px 20px",
      textAlign: "center"
    }}>
      <div style={{ maxWidth: "1000px", margin: "auto" }}>
        <p style={{ marginBottom: "10px" }}>
          Muebles a Medida © {new Date().getFullYear()} — Todos los derechos reservados.
        </p>
        <p>
          Contacto: <a href="mailto:info@mueblesamedida.com" style={{ color: "#ffb347" }}>info@mueblesamedida.com</a> | 
          Tel: <a href="tel:+59899123456" style={{ color: "#ffb347" }}>+598 99 123 456</a>
        </p>
        <div style={{ marginTop: "15px" }}>
          <a href="#" style={{ margin: "0 10px", color: "#ccc", textDecoration: "none" }}>Instagram</a>
          <a href="#" style={{ margin: "0 10px", color: "#ccc", textDecoration: "none" }}>Facebook</a>
          <a href="#" style={{ margin: "0 10px", color: "#ccc", textDecoration: "none" }}>WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}
