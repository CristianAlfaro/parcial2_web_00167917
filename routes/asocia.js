var express = require('express')
var router = express.Router();

const asociacionController = require('../controllers/controllers');

    router.get('/', asociacionController.index);
    router.get('/:id', asociacionController.findAsociaciones);
    router.post('/', asociacionController.create);
    router.put('/:id', asociacionController.update);
    router.delete('/:id', asociacionController.delete);

module.exports = router;