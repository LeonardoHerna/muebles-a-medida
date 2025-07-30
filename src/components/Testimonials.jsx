import React, { useEffect, useState } from "react";

const testimonials = [
  {
    name: "María G.",
    comment: "Encargué un placard a medida y quedó perfecto. Muy profesionales y puntuales.",
    img: "Imagenes/img-testimonials-mujer.jpeg"
  },
  {
    name: "Luis R.",
    comment: "Me ayudaron a diseñar una cocina que se adapta 100% a mi espacio. Recomendados.",
    img: "Imagenes/img-testimonials-hombre.jpeg"
  },
  {
    name: "Ana F.",
    comment: "Excelente atención y materiales de calidad. Estoy feliz con mi mueble.",
    img: "Imagenes/img-testimonials-mujer2.jpeg"
  }
];

export default function Testimonials() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <section
      style={{
        padding: "80px 20px",
        backgroundColor: "#ffffff",
        transition: "opacity 0.8s ease, transform 0.8s ease",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "auto", textAlign: "center" }}>
        <h2
          style={{
            fontSize: "2.5rem",
            marginBottom: "50px",
            fontWeight: "700",
            color: "#1f2937",
          }}
        >
          Lo que dicen nuestros clientes
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "30px",
            justifyContent: "center",
          }}
        >
          {testimonials.map((testi, index) => (
            <div
              key={index}
              style={{
                maxWidth: "320px",
                padding: "28px",
                borderRadius: "16px",
                backgroundColor: "#f9fafb",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.06)",
                textAlign: "left",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.06)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "16px",
                }}
              >
                <img
                  src={testi.img}
                  alt={testi.name}
                  style={{
                    borderRadius: "50%",
                    width: "56px",
                    height: "56px",
                    objectFit: "cover",
                    marginRight: "12px",
                  }}
                />
                <span
                  style={{
                    fontWeight: "600",
                    fontSize: "1.1rem",
                    color: "#111827",
                  }}
                >
                  {testi.name}
                </span>
              </div>
              <p
                style={{
                  fontStyle: "italic",
                  color: "#4b5563",
                  lineHeight: "1.6",
                  fontSize: "1rem",
                }}
              >
                “{testi.comment}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
