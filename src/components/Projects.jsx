import React, { useEffect, useState } from "react";

const projects = [
  {
    title: "Cocina moderna a medida",
    img: "/Imagenes/img-projects-cocina.jpeg",
  },
  {
    title: "Placard empotrado",
    img: "/Imagenes/img-projects-placard.jpeg",
  },
  {
    title: "Mueble de baño minimalista",
    img: "/Imagenes/img-projects-baño.jpeg",
  },
  {
    title: "Estantería de diseño",
    img: "/Imagenes/img-projects-estanteria.jpeg",
  },
];

export default function Projects() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <section id="projects" style={{ ...sectionStyle, opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>Proyectos realizados</h2>
        <div style={gridStyle}>
          {projects.map((project, index) => (
            <div
              key={index}
              style={cardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.03)";
                e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 6px 18px rgba(0, 0, 0, 0.06)";
              }}
            >
              <div style={{ overflow: "hidden" }}>
                <img
                  src={project.img}
                  alt={project.title}
                  style={{
                    ...imageStyle,
                    transition: "transform 0.5s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
              </div>
              <p style={captionStyle}>{project.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Estilos base ---

const sectionStyle = {
  backgroundColor: "#f7f7f7",
  padding: "80px 0",
};

const containerStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 20px",
};

const titleStyle = {
  fontSize: "2.5rem",
  fontWeight: "700",
  textAlign: "center",
  marginBottom: "50px",
  color: "#1f2937",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "30px",
};

const cardStyle = {
  backgroundColor: "#ffffff",
  borderRadius: "16px",
  boxShadow: "0 6px 18px rgba(0, 0, 0, 0.06)",
  overflow: "hidden",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  cursor: "pointer",
};

const imageStyle = {
  width: "100%",
  height: "200px",
  objectFit: "cover",
};

const captionStyle = {
  padding: "18px",
  fontSize: "1.125rem",
  fontWeight: "600",
  color: "#111827",
};
