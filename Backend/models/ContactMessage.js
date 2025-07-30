import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  nombre: String,
  telefono: String,
  ubicacion: String,
  mensaje: String,
  fecha: { type: Date, default: Date.now },
});

export default mongoose.model("ContactMessage", contactSchema);
