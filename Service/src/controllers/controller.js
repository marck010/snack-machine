const ServiceCard = require("../services/service-card");
const ServiceProduct = require("../services/service-produt");

module.exports = class ControllerMachine {

    constructor(){
        this.serviceCard = new ServiceCard(); 
        this.serviceProduct = new ServiceProduct(); 
    }

    insertCard(req, res, next) {
        try {

            this.serviceCard.insertCard(req.card_id).then(function (balance) {
    
                res.json(balance);

            }).catch(function (error) {

                res.json(error);

            });

        } catch (error) {

            next(error);

        }
    }

    buyProduct(req, res, next){

        try {

            this.serviceProduct.buyProduct(req.product).then(function (docs) {    
          
            }).catch(function (error) {
          
                res.json(error);
          
            });
    
        } catch (error) {
          
            next(error);
        
        }
    }

}