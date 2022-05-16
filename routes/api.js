const express = require (`express`);
const router = express.Router();
const {vistaPerros, vistaUno, crearPerros} = require (`../controller/controller`)

router.get (`/ver`, vistaPerros);
router.get (`/crear/:name`, crearPerros)

module.exports = router;