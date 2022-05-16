const express = require('express');
const router = express.Router();
const {vistaMotos, crearMoto, vistaUnaMoto, borrarMoto, editarMoto, consultaAxios } = require (`../controller/controller`)
const {check} = require("express-validator");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get(`/ver`, vistaMotos);
router.get(`/ver/:id`, vistaUnaMoto);
router.post("/crear", [
  check("patente").not().isEmpty().isLength({ max: 7, min: 6 }).withMessage("La patente debe ser de 6 o 7 caracteres alfanumericos"),check("marca").not().isEmpty(),
  check("modelo").not().isEmpty().withMessage("El modelo de la moto es necesario")],check("año").not().isEmpty().isNumeric(),check("cc").not().isEmpty().isNumeric(),
  crearMoto);

  router.put('/editarMoto/:id', [
    check(`patente`).not().isEmpty().withMessage("La patente debe ser de 6 o 7 caracteres alfanumericos"),
    check(`marca`).not().isEmpty(),
    check(`modelo`).isEmpty().withMessage("El modelo de la moto es necesario"),
    check(`año`).isLength().isNumeric(),
    check("cc").not().isEmpty().isNumeric()
], editarMoto);


  router.delete('/eliminarmoto/:id', borrarMoto);

  router.get(`/consultaFotos`, consultaAxios);


module.exports = router;
