const arrayPrueba = [1, 2, 3, 4, 5, 6, 7];

const readTareas = (req, res) => {
  res.json({
    mensaje: "Lista de tareas",
    data: arrayPrueba,
  });
};

module.exports = {
  readTareas,
};
