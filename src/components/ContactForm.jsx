import React, { useEffect, useState } from "react";

export default function ContactForm() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 100);
  }, []);

  return (
    <section
      id="form"
      style={{
        backgroundColor: "#f3f4f6",
        padding: "80px 20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "opacity 0.8s ease, transform 0.8s ease",
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(30px)",
      }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Formulario enviado correctamente ✅");
        }}
        style={{
          backgroundColor: "#ffffff",
          padding: "40px",
          borderRadius: "16px",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
          width: "100%",
          maxWidth: "600px",
          transition: "transform 0.3s ease",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "30px",
            fontSize: "2rem",
            color: "#111827",
            fontWeight: "700",
          }}
        >
          Reservá tu servicio
        </h2>

        <Input placeholder="Nombre completo" name="nombre" type="text" />
        <Input placeholder="Teléfono" name="telefono" type="tel" />
        <Input placeholder="Ubicación (barrio o ciudad)" name="ubicacion" type="text" />
        <TextArea placeholder="Contanos qué tipo de mueble estás buscando..." name="mensaje" rows="4" />

        <button
          type="submit"
          style={{
            backgroundColor: "#ff7f50",
            color: "#fff",
            padding: "14px",
            width: "100%",
            border: "none",
            borderRadius: "8px",
            fontSize: "1rem",
            fontWeight: "600",
            cursor: "pointer",
            marginTop: "10px",
            transition: "background-color 0.3s ease, transform 0.2s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
        >
          Enviar
        </button>
      </form>
    </section>
  );
}

function Input({ placeholder, name, type }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      required
      style={{
        width: "100%",
        padding: "14px",
        marginBottom: "18px",
        borderRadius: "8px",
        border: "1px solid #d1d5db",
        fontSize: "1rem",
        transition: "all 0.3s ease",
        outline: "none",
      }}
      onFocus={(e) => {
        e.currentTarget.style.borderColor = "#ff7f50";
        e.currentTarget.style.boxShadow = "0 0 0 3px rgba(255, 127, 80, 0.2)";
      }}
      onBlur={(e) => {
        e.currentTarget.style.borderColor = "#d1d5db";
        e.currentTarget.style.boxShadow = "none";
      }}
    />
  );
}

function TextArea({ placeholder, name, rows }) {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      rows={rows}
      required
      style={{
        width: "100%",
        padding: "14px",
        marginBottom: "18px",
        borderRadius: "8px",
        border: "1px solid #d1d5db",
        fontSize: "1rem",
        transition: "all 0.3s ease",
        resize: "none",
        outline: "none",
      }}
      onFocus={(e) => {
        e.currentTarget.style.borderColor = "#ff7f50";
        e.currentTarget.style.boxShadow = "0 0 0 3px rgba(255, 127, 80, 0.2)";
      }}
      onBlur={(e) => {
        e.currentTarget.style.borderColor = "#d1d5db";
        e.currentTarget.style.boxShadow = "none";
      }}
    />
  );
}
