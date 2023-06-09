const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../Models/User");

const register = async (req, res) => {
  try {
    const { user, password } = req.body;
    const hashedPasswd = await bcrypt.hash(password, 10);

    const newUser = new User({
      user,
      password: hashedPasswd,
    });

    await newUser.save();
    res.status(200).json({ message: "Usuario registrado exitosamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al registrar el usuario" });
  }
};

const login = async (req, res) => {
  try {
    const { user, password } = req.body;

    const usuario = await User.findOne({ user });

    if (!usuario) {
      throw new Error("Usuario no encontrado");
    }

    const passMatch = await bcrypt.compare(password, usuario.password);

    if (!passMatch) {
      throw new Error("Contraseña incorrecta");
    }

    const token = jwt.sign({ userId: user._id }, process.env.APP_KEY);

    res.status(200).json({ token });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

module.exports = {
  login,
  register,
};
