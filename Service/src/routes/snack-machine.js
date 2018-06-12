var express = require('express');
var controller = require('../controllers/controller')
var route = express.Router();

module.exports = class MachineSnackRouter{

    constructor(){
        this.serviceBalance = new ServiceBalance();
        this.serviceProduct = new ServiceProduct();

        route.post('/insertCard', this.serviceBalance.insertCard)
        route.post('/buyProduct', this.serviceProduct.buyProduct)

    }

}

