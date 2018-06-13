const FactoryService = require('../services/factory-service');

const serviceCard = FactoryService.newServiceCard;
const serviceProduct = FactoryService.newServiceProduct;

class ControllerMachine {

    insertCard(req, res, next) {
        try {

            serviceCard.insertCard(req.body.card_number).then((balance) => {

                res.json(`Current Balance is ${balance}`);

            }).catch((error) => {

                next(error);

            });

        } catch (error) {

            next(error);

        }
    }

    buyProduct(req, res, next) {

        try {

            serviceProduct.buyProduct(req.body.product_id, req.body.card_id).then((result) => {

                res.json("Purchase completed successfully.");

            }).catch((error) => {

                next(error);

            });

        } catch (error) {

            next(error);

        }
    }

}

module.exports = new ControllerMachine();