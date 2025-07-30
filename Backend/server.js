import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/contact", contactRoutes);

// Conexión a MongoDB y arranque
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB conectado");
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Servidor corriendo en puerto ${process.env.PORT || 5000}`);
    });
  })
  .catch((err) => console.error("Error al conectar MongoDB:", err));
