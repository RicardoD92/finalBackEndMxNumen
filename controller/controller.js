const axios = require("axios");
const req = require("express/lib/request");
const res = require("express/lib/response");
const { Moto } = require(`../model/model`);

const vistaMotos = async (req, res) => {
  const motos = await Moto.find();
  res.json({ motos });
};
/*
const vistaUnaMoto = async (req, res) =>{
    const moto = await Moto.findById(req.params.id)
    res.json({moto})
}
*/
const crearMoto = async (req, res) => {
  try {
      const mot = new Moto({
    patente: req.body.patente,
    marca: req.body.marca,
    modelo: req.body.modelo,
    año: req.body.año,
    cc: req.body.cc,
  });
  await mot.save();
  console.log(" ");
  res.json({ msg: "La moto fue creado con Exito!!" });
  } catch (error) {
    res.json({
      msg: error.message || error,
    });
    
  }
};

const vistaUnaMoto = async (req, res) => {
  try {
    const mot = await User.findById(req.params.id);
    res.json({ mot, msg: "Moto consultada" });
  } catch (error) {
    res.status(500).json({ msg: "no se encontro la moto" });
  }
};

const editarMoto = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    console.log(req.body);
    const updateMoto = await Moto.findByIdAndUpdate(id, req.updateMoto);
    res.status(200).json(updateMoto);
  } catch (error) {}
};
const borrarMoto = async (req, res) => {
  try {
    const mot = await Moto.findByIdAndDelete(req.params.id);
    res.json({ msg: "Se eliminado la moto con exito", mot });
  } catch (error) {
    res.json({
      msg: error.message || error,
    });
  }
};

const consultaAxios = async (req, res) => {
  try {
    const resultado = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );

    res.json(resultado.data);
  } catch (error) {
    console.log(error);
    res.json({
      msg: error.message || error,
    });
  }
};

module.exports = {
  vistaMotos,
  crearMoto,
  vistaUnaMoto,
  editarMoto,
  borrarMoto,
  consultaAxios,
};
