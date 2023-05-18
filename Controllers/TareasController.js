const Tareas = require("../Models/Tareas");

const inicio = async (req, res) => {
  res.json({
    mensaje: "IHENRIQUEZ - API CRUD TAREAS",
    urls: [
      { path: "GET | /api/", desc: "Lista todas las tareas" },
      { path: "GET | /api/{id}", desc: "Busca solo una tarea" },
      { path: "POST | /api/", desc: "Crea una nueva tarea" },
      { path: "PATCH | /api/{id}", desc: "Actualiza una tarea" },
      { path: "DELETE | /api/{id}", desc: "Borra una tarea" },
    ],
  });
};

const readTareas = async (req, res) => {
  const tareas = await Tareas.find();
  res.json({
    mensaje: "Lista de tareas",
    data: tareas,
  });
};

// const findTarea = async (req, res) => {

//   const tareas = await Tareas.find();
//   res.json({
//     mensaje: "Lista de tareas",
//     data: tareas,
//   });
// };

module.exports = {
  inicio,
  readTareas,
};
