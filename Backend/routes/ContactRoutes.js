import express from "express";
import ContactMessage from "../models/ContactMessage.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

router.post("/", async (req, res) => {
  const { nombre, telefono, ubicacion, mensaje } = req.body;

  if (!nombre || !telefono || !ubicacion || !mensaje) {
    return res.status(400).json({ error: "Todos los campos son obligatorios" });
  }

  try {
    // Guardar en la base de datos
    const nuevoMensaje = new ContactMessage({ nombre, telefono, ubicacion, mensaje });
    await nuevoMensaje.save();

    // Configurar el transporte para enviar mail
    const transporter = nodemailer.createTransport({
      service: "gmail", // Podés cambiar a otro proveedor si querés
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Configurar contenido del email
    const mailOptions = {
      from: `"Landing Muebles" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL, // Puede ser igual a EMAIL_USER
      subject: "Nuevo mensaje del formulario",
      html: `
        <p><strong>Nombre:</strong> Juan Pérez</p>
<p><strong>Teléfono:</strong> 099123456</p>
<p><strong>Ubicación:</strong> Montevideo</p>
<p><strong>Mensaje:</strong></p>
<p style="background-color: #f4f4f4; padding: 10px; border-left: 4px solid #007bff;">
  Me interesa un mueble a medida para la cocina.
</p>
      `,
    };

    // Enviar el mail
    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: "Mensaje guardado y correo enviado correctamente" });
  } catch (err) {
    console.error("Error al guardar/enviar email:", err);
    res.status(500).json({ error: "Error del servidor" });
  }
});

export default router;
