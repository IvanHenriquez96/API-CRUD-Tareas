require("dotenv").config();
const express = require("express");
const app = express();
const conectarDB = require("./config/database");

//Conectar a la DB
conectarDB();

//Middleware para analizar el cuerpo de las solicitudes en fotmato JSON
app.use(express.json());

const router = require("./routes/router"); //importar router
app.use("/", router); //usar el router

app.listen(process.env.PORT, () => {
  console.log(`servidor corriendo en el puerto ${process.env.PORT}`);
});
