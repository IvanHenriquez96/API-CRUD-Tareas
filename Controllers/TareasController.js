const Tareas = require("../Models/Tareas");

const readTareas = async (req, res) => {
  const tareas = await Tareas.find();
  console.log(tareas);
  res.json({
    mensaje: "Lista de tareas",
    data: tareas,
  });
};

module.exports = {
  readTareas,
};
