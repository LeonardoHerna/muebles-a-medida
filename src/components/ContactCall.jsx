import React, { useEffect, useState } from "react";

export default function ContactCall() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 100);
  }, []);

  return (
    <section
      style={{
        background: "linear-gradient(to right, #1f2937, #111827)", // gradiente gris carbón
        color: "#f9fafb",
        padding: "80px 20px",
        textAlign: "center",
        transition: "opacity 0.8s ease, transform 0.8s ease",
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(30px)",
      }}
    >
      <h2
        style={{
          fontSize: "2.2rem",
          marginBottom: "20px",
          fontWeight: "700",
          color: "#ffffff",
        }}
      >
        ¿Listo para transformar tus espacios?
      </h2>

      <p
        style={{
          marginBottom: "35px",
          fontSize: "1.125rem",
          maxWidth: "600px",
          marginLeft: "auto",
          marginRight: "auto",
          color: "#d1d5db",
        }}
      >
        Contactanos ahora y recibí asesoramiento personalizado sin compromiso.
      </p>

      <a
        href="#form"
        style={{
          backgroundColor: "#fbbf24", // amarillo suave profesional
          padding: "14px 32px",
          borderRadius: "8px",
          color: "#1f2937", // gris muy oscuro
          textDecoration: "none",
          fontWeight: "600",
          fontSize: "1rem",
          transition: "background-color 0.3s, transform 0.2s",
          display: "inline-block",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#facc15";
          e.currentTarget.style.transform = "scale(1.05)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#fbbf24";
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        Reservá tu mueble a medida
      </a>
    </section>
  );
}
