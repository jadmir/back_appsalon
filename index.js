// configurar prettier
import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import { db } from "./config/db.js";
import servicesRoutes from "./routes/servicesRoutes.js";

const init = async () => {
//variables de entorno
dotenv.config();

//configurar app
const app = express();

// Lee datos via body
app.use(express.json());

//conectar a la bd
await db();

//definir una ruta
app.use("/api/services", servicesRoutes);

//definir puert
const PORT = process.env.PORT || 4000;

//arrancar la app
app.listen(PORT, () => {
  console.log(colors.blue("El puerto se esta ejecutando en el puerto:", PORT));
});

}

init()