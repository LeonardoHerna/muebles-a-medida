import React, { useEffect, useState } from "react";

const steps = [
  {
    title: "1. Te escuchamos",
    description: "Contanos qué necesitás y te asesoramos sin compromiso.",
  },
  {
    title: "2. Diseñamos juntos",
    description: "Creamos una propuesta 100% personalizada.",
  },
  {
    title: "3. Fabricamos a medida",
    description: "Con materiales de calidad y en tiempos acordados.",
  },
  {
    title: "4. Entregamos y montamos",
    description: "Instalamos el mueble en tu hogar listo para usar.",
  },
];

export default function Process() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <section
      style={{
        backgroundColor: "#f9f9f9",
        padding: "80px 20px",
        transition: "opacity 0.8s ease, transform 0.8s ease",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            marginBottom: "50px",
            fontWeight: "700",
            color: "#1f2937",
          }}
        >
          ¿Cómo trabajamos?
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "30px",
          }}
        >
          {steps.map((step, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#ffffff",
                padding: "28px",
                borderRadius: "14px",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.06)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 24px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 8px 24px rgba(0, 0, 0, 0.06)";
              }}
            >
              <h3
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "600",
                  marginBottom: "12px",
                  color: "#111827",
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontSize: "1rem",
                  color: "#4b5563",
                  lineHeight: "1.6",
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
