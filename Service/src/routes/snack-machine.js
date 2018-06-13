var express = require('express');
var Controller = require('../controllers/controller');
var router = express.Router();

let controller = new Controller();

router.post('/insertCard', controller.)
router.post('/buyProduct', controller.buyProduct)

module.exports = router;