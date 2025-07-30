import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header style={headerStyle}>
      {/* Contenedor del logo y título */}
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          justifyContent: isMobile ? "center" : "flex-start",
          gap: "10px",
          width: isMobile ? "100%" : "auto",
          marginBottom: isMobile ? "10px" : "0",
        }}
      >
        <img src={logo} alt="Logo Muebles a Medida" style={{ height: "50px" }} />
        <span
          style={{
            fontSize: "1.5rem",
            fontWeight: "600",
            color: "#333",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          Muebles a Medida
        </span>
      </div>

      {/* Menú en desktop */}
      {!isMobile && (
        <nav>
          <ul style={navListStyle}>
            <li><a href="#hero" style={linkStyle}>Inicio</a></li>
            <li><a href="#projects" style={linkStyle}>Proyectos</a></li>
            <li><a href="#form" style={linkStyle}>Contacto</a></li>
          </ul>
        </nav>
      )}

      {/* Botón hamburguesa en móvil */}
      {isMobile && (
        <div style={burgerStyle} onClick={() => setMenuOpen(!menuOpen)}>
          <div style={burgerBar}></div>
          <div style={burgerBar}></div>
          <div style={burgerBar}></div>
        </div>
      )}

      {/* Menú desplegable móvil */}
      {isMobile && menuOpen && (
        <div style={mobileMenuStyle}>
          <a href="#hero" style={mobileLinkStyle} onClick={() => setMenuOpen(false)}>Inicio</a>
          <a href="#projects" style={mobileLinkStyle} onClick={() => setMenuOpen(false)}>Proyectos</a>
          <a href="#form" style={mobileLinkStyle} onClick={() => setMenuOpen(false)}>Contacto</a>
        </div>
      )}
    </header>
  );
}

// Estilos generales
const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px 40px",
  backgroundColor: "#fff",
  borderBottom: "1px solid #e5e5e5",
  position: "sticky",
  top: 0,
  zIndex: 1000,
  flexWrap: "wrap",
};

const navListStyle = {
  display: "flex",
  listStyle: "none",
  margin: 0,
  padding: 0,
  gap: "30px",
};

const linkStyle = {
  textDecoration: "none",
  color: "#333",
  fontWeight: "500",
  fontSize: "1rem",
  transition: "color 0.3s",
};

// Estilos del botón hamburguesa
const burgerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  width: "30px",
  height: "30px",
  gap: "5px",
};

const burgerBar = {
  width: "25px",
  height: "3px",
  backgroundColor: "#333",
  borderRadius: "2px",
};

// Estilos del menú desplegable móvil
const mobileMenuStyle = {
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  top: "80px",
  right: "40px",
  backgroundColor: "#fff",
  border: "1px solid #ddd",
  borderRadius: "8px",
  padding: "10px 0",
  boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
  zIndex: 1001,
};

const mobileLinkStyle = {
  padding: "12px 20px",
  textDecoration: "none",
  color: "#333",
  fontWeight: "500",
  fontSize: "1rem",
  transition: "background 0.2s",
};
