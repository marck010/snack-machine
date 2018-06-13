var express = require('express');
var controller = require('../controllers/controller-snack-machine');
var router = express.Router();

router.post('/insertCard', controller.insertCard)
router.post('/buyProduct', controller.buyProduct)

module.exports = router;