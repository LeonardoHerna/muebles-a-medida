import React from "react";

export default function Hero() {
  return (
    <header
      id="hero"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: "50px",
        padding: "60px 10px",
        maxWidth: "1200px",
        margin: "20",
      }}
    >
      <img
        src="/Imagenes/img-hero.jpeg" 
        alt="Mueble personalizado"
        style={{
          width: "100%",
          maxWidth: "520px",
          borderRadius: "16px",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.08)",
        }}
      />

      <div style={{ flex: "1", minWidth: "280px" }}>
        <h1
          style={{
            fontSize: "2.75rem",
            lineHeight: "1.2",
            marginBottom: "16px",
            marginLeft: "20px",
            color: "#222",
            textAlign: "center"
          }}
        >
          Muebles a medida para tu estilo de vida
        </h1>
        <p
          style={{
            fontSize: "1.12rem",
            color: "#555",
            marginBottom: "30px",
            marginLeft: "50px",
            maxWidth: "500px",
            textAlign: "center"
          }}
        >
          Diseño personalizado, fabricación local y montaje profesional en tu
          hogar.
        </p>
        <button
          style={{
            padding: "14px 32px",
            marginLeft: "50px",
            background: "linear-gradient(135deg, #7d5fff, #5e60ce)",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontWeight: "600",
            fontSize: "1rem",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            cursor: "pointer",
            transition: "transform 0.2s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          Solicitar presupuesto
        </button>
      </div>
    </header>
  );
}
