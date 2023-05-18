require("dotenv").config();
const express = require("express");
const app = express();
const conectarDB = require("./config/database");

//Conectar a la DB
conectarDB();

const router = require("./routes/router"); //importar router
app.use("/", router); //usar el router

app.listen(process.env.PORT, () => {
  console.log(`servidor corriendo en el puerto ${process.env.PORT}`);
});
