import React, { useState } from "react";

const faqs = [
  {
    question: "¿Cuánto demora el proceso desde el diseño hasta la entrega?",
    answer: "Generalmente entre 2 a 4 semanas, dependiendo del tipo de mueble y disponibilidad de materiales.",
  },
  {
    question: "¿Trabajan con medidas personalizadas?",
    answer: "Sí, todos nuestros muebles son 100% a medida. Nos adaptamos a tus espacios y necesidades.",
  },
  {
    question: "¿Tienen garantía?",
    answer: "Sí, ofrecemos garantía de 6 meses por defectos de fabricación o instalación.",
  },
  {
    question: "¿Se puede pagar en cuotas?",
    answer: "Sí, aceptamos pagos en cuotas con tarjetas y otros métodos según el acuerdo.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>Preguntas frecuentes</h2>
        <div style={faqListStyle}>
          {faqs.map((faq, index) => {
            const isOpen = index === openIndex;
            return (
              <div key={index} style={faqItemStyle}>
                <button
                  onClick={() => toggle(index)}
                  style={{
                    ...questionButtonStyle,
                    color: isOpen ? "#222" : "#444",
                  }}
                  aria-expanded={isOpen}
                  role="button"
                >
                  <span>{faq.question}</span>
                  <span
                    style={{
                      ...chevronStyle,
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    ▼
                  </span>
                </button>
                <div
                  style={{
                    ...answerStyle,
                    maxHeight: isOpen ? "200px" : "0px",
                    opacity: isOpen ? 1 : 0,
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                  }}
                >
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Estilos
const sectionStyle = {
  backgroundColor: "#ffffff",
  padding: "80px 20px",
  borderTop: "1px solid #eee",
};

const containerStyle = {
  maxWidth: "900px",
  margin: "0 auto",
};

const titleStyle = {
  fontSize: "2.2rem",
  fontWeight: "700",
  textAlign: "center",
  marginBottom: "40px",
  color: "#222",
};

const faqListStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

const faqItemStyle = {
  backgroundColor: "#f9f9f9",
  borderRadius: "10px",
  padding: "16px 20px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.03)",
  transition: "box-shadow 0.2s ease",
};

const questionButtonStyle = {
  background: "none",
  border: "none",
  cursor: "pointer",
  fontSize: "1.1rem",
  fontWeight: "600",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  padding: 0,
};

const chevronStyle = {
  transition: "transform 0.3s ease",
  fontSize: "1.1rem",
};

const answerStyle = {
  marginTop: "12px",
  fontSize: "1rem",
  color: "#555",
  lineHeight: "1.6",
};
