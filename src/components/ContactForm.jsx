import React, { useEffect, useState } from "react";

export default function ContactForm() {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    ubicacion: "",
    mensaje: "",
  });

  const [enviando, setEnviando] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setTimeout(() => setShow(true), 100);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);
    setSuccess(false);
    setError("");

    try {
      const res = await fetch("https://muebles-a-medida.onrender.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(true);
        setFormData({
          nombre: "",
          telefono: "",
          ubicacion: "",
          mensaje: "",
        });
      } else {
        setError(data.error || "Error al enviar el formulario");
      }
    } catch (err) {
      setError("Error al conectar con el servidor");
    } finally {
      setEnviando(false);
    }
  };

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
        onSubmit={handleSubmit}
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

        <Input
          placeholder="Nombre completo"
          name="nombre"
          type="text"
          value={formData.nombre}
          onChange={handleChange}
        />
        <Input
          placeholder="Teléfono"
          name="telefono"
          type="tel"
          value={formData.telefono}
          onChange={handleChange}
        />
        <Input
          placeholder="Ubicación (barrio o ciudad)"
          name="ubicacion"
          type="text"
          value={formData.ubicacion}
          onChange={handleChange}
        />
        <TextArea
          placeholder="Contanos qué tipo de mueble estás buscando..."
          name="mensaje"
          rows="4"
          value={formData.mensaje}
          onChange={handleChange}
        />

        <button
          type="submit"
          disabled={enviando}
          style={{
            backgroundColor: enviando ? "#ffab91" : "#ff7f50",
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
          onMouseEnter={(e) =>
            !enviando && (e.currentTarget.style.transform = "translateY(-2px)")
          }
          onMouseLeave={(e) =>
            !enviando && (e.currentTarget.style.transform = "translateY(0)")
          }
        >
          {enviando ? "Enviando..." : "Enviar"}
        </button>

        {success && (
          <p style={{ color: "green", marginTop: "10px", textAlign: "center" }}>
            ¡Mensaje enviado correctamente!
          </p>
        )}
        {error && (
          <p style={{ color: "red", marginTop: "10px", textAlign: "center" }}>{error}</p>
        )}
      </form>
    </section>
  );
}

function Input({ placeholder, name, type, value, onChange }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
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

function TextArea({ placeholder, name, rows, value, onChange }) {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      rows={rows}
      value={value}
      onChange={onChange}
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

