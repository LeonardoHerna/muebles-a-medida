import React, { useEffect, useState } from "react";

const services = [
  {
    title: "Diseño Personalizado",
    img: "Imagenes/img-benefits-perzo.jpeg",
    description: "Cada mueble se adapta a tus espacios, estilo y necesidades.",
  },
  {
    title: "Materiales de Calidad",
    img: "Imagenes/img-benefits-material.jpeg",
    description: "Trabajamos con maderas nobles y herrajes de primera línea.",
  },
  {
    title: "Montaje Profesional",
    img: "Imagenes/img-benefits-montaje.jpeg",
    description: "Nuestro equipo asegura una instalación precisa y limpia.",
  },
  {
    title: "Entrega Puntual",
    img: "Imagenes/img-benefits-entrega.jpeg",
    description: "Cumplimos con los plazos acordados para tu tranquilidad.",
  },
];

export default function Services() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <section
      id="servicios"
      style={{
        ...sectionStyle,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
      }}
    >
      <div style={containerStyle}>
        <h2 style={titleStyle}>¿Por qué elegirnos?</h2>
        <div style={gridStyle}>
          {services.map((service, index) => (
            <div
              key={index}
              style={cardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.06)";
              }}
            >
              <div style={{ overflow: "hidden", borderRadius: "10px" }}>
                <img
                  src={service.img}
                  alt={service.title}
                  style={{
                    ...imageStyle,
                    transition: "transform 0.4s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
              </div>
              <h3 style={cardTitle}>{service.title}</h3>
              <p style={cardDesc}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Estilos base ---

const sectionStyle = {
  padding: "80px 0",
  backgroundColor: "#f9f9f9",
};

const containerStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 20px",
};

const titleStyle = {
  fontSize: "2.5rem",
  fontWeight: "700",
  marginBottom: "50px",
  textAlign: "center",
  color: "#1f2937",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "40px",
};

const cardStyle = {
  backgroundColor: "#ffffff",
  padding: "24px",
  borderRadius: "16px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.06)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  cursor: "default",
  textAlign: "center",
};

const imageStyle = {
  width: "100%",
  height: "200px",
  objectFit: "cover",
};

const cardTitle = {
  fontSize: "1.5rem",
  fontWeight: "600",
  margin: "20px 0 10px",
  color: "#111827",
};

const cardDesc = {
  fontSize: "1rem",
  color: "#4b5563",
  lineHeight: "1.6",
};
